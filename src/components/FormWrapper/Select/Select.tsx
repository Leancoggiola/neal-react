import classNames from 'classnames';
import { BaseSyntheticEvent, Children, FC, ReactElement, RefObject, cloneElement, useContext, useEffect, useRef, useState } from 'react';
import { usePopper } from 'react-popper';

import { hardwareIcKeyboardArrowDown, navigationIcClose } from '../../../assets/icons';
import { NlIcon } from '../../Icon';
import { NoResultsTemplate, SelectAll, SelectSearch } from './SupportComponents';

import { FormWrapperContext } from '../FormWrapper.context';
import { SelectProvider } from './Select.context';
import { SelectProps } from './Select.types';

let idCounter = 0;

interface SelectConfig {
  disabledOptions: string[];
  selectValue: string[];
  displayedValue: string[];
  optionSelected: number[];
}

export const NlSelect: FC<SelectProps> = ({
  children,
  id = '',
  value = [],
  placeholder = '',
  searchPlaceholder = 'Search',
  visibleOptions = 5,
  required = false,
  disabled = false,
  multiple = false,
  showSelectAllBtn = false,
  filter = false,
  onChange = () => { },
  className = ''
}) => {
  const [open, setOpen] = useState<boolean>(false);
  const [selectValue, setSelectValue] = useState<string[]>(value);
  const [displayedValue, setDisplayedValue] = useState<string[]>([]);
  const [searchOption, setSearchOption] = useState<string>('');
  const [optionSelected, setOptionSelected] = useState<number[]>([-1]);
  const [optionCurrent, setOptionCurrent] = useState<number>(-1);
  const [optionsChildrenSorted, setOptionsChildrenSorted] = useState<ReactElement[]>(children);
  const [hasSelectedMultipleOption, setHasSelectedMultipleOption] = useState<boolean>(false);

  const [hasSelectedAllOptions, setHasSelectedAllOptions] = useState<{ selected: boolean, indeterminate: boolean }>({
    selected: false,
    indeterminate: false
  });

  const listBoxRef = useRef<HTMLDivElement>(null);
  const optionWrapperRef = useRef<HTMLDivElement>(null);
  const selectSearchRef = useRef<HTMLInputElement>(null);
  const selectTriggerRef = useRef<HTMLButtonElement>(null);
  const selectWrapperRef = useRef<HTMLDivElement>(null);

  const totalOptions = Children.count(optionsChildrenSorted);
  const formContext = useContext(FormWrapperContext);

  const { styles, attributes } = usePopper(selectWrapperRef.current, optionWrapperRef.current, {
    placement: 'auto',
    modifiers: [{
      name: 'offset',
      enabled: true,
      options: { offset: [0, 8] }
    },
    {
      name: 'preventOverflow',
      options: { padding: 0 }
    },
    {
      name: 'flip',
      options: {
        padding: 8,
        allowedAutoPlacements: ['top', 'bottom']
      }
    }
    ]
  })

  const optionsChildren = Children.map(children, (child, index) => {
    const { props: { value: optionValue } } = child;

    const isSelected = Array.isArray(selectValue) ? selectValue.includes(optionValue) : selectValue === optionValue;

    return cloneElement(child, {
      isCurrentSelected: selectValue === optionValue,
      optionIndex: index,
      isSelected
    })
  })

  const getValueDetails = (valueSelected: string | string[]) => {
    if (multiple) {
      const valuesSelected = optionsChildren.reduce((acc, { props: { value: val, children: child, label, optionIndex } }) => {
        if (valueSelected.includes(val)) {
          acc[0].push(typeof child === 'object' ? label : child);
          acc[1].push(optionIndex);
        }
        return acc;
      }, [[], []] as any[][]);

      setDisplayedValue(valuesSelected[0]);
      setOptionSelected(valuesSelected[1]);
    } else {
      const currentValue = optionsChildren.reduce((acc, { props: { value: val, children: child, label, optionIndex } }) => {
        if (val === valueSelected) {
          acc.displayedValue = [typeof child === 'object' ? label : child];
          acc.optionSelected = [optionIndex];
          acc.optionCurrent = optionIndex;
        }
        return acc;
      }, { displayedValue: [] as string[], optionSelected: [-1], optionCurrent: -1 });
      setDisplayedValue(currentValue.displayedValue);
      setOptionSelected(currentValue.optionSelected);
      setOptionCurrent(currentValue.optionCurrent);
    }
  };

  const filterOptions = (options: ReactElement[]) => {
    const filteredOptions = options.filter(({ props: { children: child, label } }) => {
      const option = typeof child === 'object' ? label : child;
      return option.toLowerCase().includes(searchOption.toLowerCase());
    });

    return Children.map(filteredOptions, (child, index) => cloneElement(child, { optionIndex: index }));
  };

  const sortOptions = (options: ReactElement[]) => {
    const optionsSelected = options.filter(({ props: { isSelected } }) => isSelected);
    const optionsNonSelected = options.filter(({ props: { isSelected } }) => !isSelected);
    const optionsSorted = [...optionsSelected, ...optionsNonSelected];

    return Children.map(optionsSorted, (child, index) => cloneElement(child, { optionIndex: index }));
  };

  const clickOutside = (event: MouseEvent) => {
    const canHandleOutside = (targetRef: RefObject<HTMLDivElement>, event: MouseEvent) => Boolean(targetRef.current && !targetRef.current.contains(event.target as Node));

    if (!open && canHandleOutside(selectWrapperRef, event))
      setOpen(false)
  };

  // Use Effects
  useEffect(() => {
    selectValue && getValueDetails(selectValue);
    setOptionsChildrenSorted(optionsChildren);

    formContext.setIsDisabled(disabled);
    formContext.setIsRequired(required);
    formContext.setElementType('select');
    formContext.setHasPlaceholder(typeof placeholder === 'string' && placeholder.length > 0);
    id ? formContext.setId(id) : formContext.setId(`nl-select-${idCounter++}`);

    document.addEventListener('click', clickOutside);
    return () => document.removeEventListener('click', clickOutside)
  }, []);

  useEffect(() => {
    if (!hasSelectedMultipleOption) {
      setOptionsChildrenSorted(optionsChildren);
    }
    setHasSelectedMultipleOption(false);
  }, [children]);

  useEffect(() => {
    if (!value) {
      setSelectValue([]);
      setDisplayedValue([]);
    } else {
      setSelectValue(value);
    }
  }, [value]);

  useEffect(() => {
    if (!open) {
      if (searchOption && multiple) {
        const filteredOptions = filterOptions(optionsChildren);
        const sortedOptions = sortOptions(filteredOptions);
        setOptionsChildrenSorted(sortedOptions);
      }

      if (searchOption && !multiple) {
        const filteredOptions = filterOptions(optionsChildren);
        setOptionsChildrenSorted(filteredOptions);
      }

      if (!searchOption && multiple) {
        const sortedOptions = sortOptions(optionsChildren);
        setOptionsChildrenSorted(sortedOptions);
      }
    }
  }, [open]);

  useEffect(() => {
    formContext.setValue(displayedValue);
    formContext.setHasContent(displayedValue.length > 0 || Object.keys(displayedValue).length > 0);
  }, [displayedValue]);

  useEffect(() => {
    if (multiple) {
      const childrenSorted = optionsChildrenSorted.map(option => ({
        ...option,
        props: {
          ...option.props,
          isSelected: selectValue.includes(option.props.value),
        }
      }));
      setOptionsChildrenSorted(childrenSorted);
      if (showSelectAllBtn || filter) {
        const selectedOptions = optionsChildrenSorted.map(({ props: { value: val } }) => val);

        setHasSelectedAllOptions({
          selected: selectValue.length > 0 && selectedOptions.every(opt => selectValue.includes(opt)),
          indeterminate: selectedOptions.some(opt => selectValue.includes(opt)),
        });
      }
    }

    getValueDetails(selectValue);
  }, [selectValue]);

  useEffect(() => {
    const filteredOptions = filterOptions(optionsChildren);

    if (multiple) {
      const optionsValue = filteredOptions.map(({ props: { value: val } }) => val);

      setHasSelectedAllOptions({
        selected: optionsValue.length > 0 && optionsValue.every(opt => selectValue.includes(opt)),
        indeterminate: optionsValue.some(opt => selectValue.includes(opt)),
      });
    }

    setOptionsChildrenSorted(filteredOptions);
    setOptionCurrent(-1);
  }, [searchOption]);

  // Handlers
  const handleClickSelectAll = () => {
    if (selectValue.length) {
      setSelectValue([]);
      setDisplayedValue([]);
      setOptionSelected([]);
      setHasSelectedAllOptions({ selected: false, indeterminate: false });
      onChange([]);
    } else {
      const selectedOptions = optionsChildren.reduce((acc, { props: { value: val, children: child, label, optionIndex, disabled: optionDisabled } }) => {
        if (!optionDisabled) {
          const valueShowed = typeof child === 'object' ? label : child;
          acc.selectValue = acc.selectValue ? [...acc.selectValue, val] : [val];
          acc.displayedValue = acc.displayedValue ? [...acc.displayedValue, valueShowed] : [valueShowed];
          acc.optionSelected = acc.optionSelected ? [...acc.optionSelected, optionIndex] : [optionIndex];
        }
        return acc;
      }, { selectValue: [], displayedValue: [], optionSelected: [], disabledOptions: [] } as SelectConfig);
      setSelectValue([...selectValue, ...selectedOptions.selectValue]);
      setDisplayedValue([...displayedValue, ...selectedOptions.displayedValue]);
      setOptionSelected([...optionSelected, ...selectedOptions.optionSelected]);
      setHasSelectedAllOptions({ selected: true, indeterminate: false });
      onChange(selectedOptions.selectValue);
    }
  };

  const handleChangeSearch = (event: BaseSyntheticEvent) => {
    setSearchOption(event.target.value);
  };

  const handleClickSearchCheckbox = () => {
    const selectedOptions = optionsChildrenSorted.reduce((acc, { props: { value: val, children: child, label, optionIndex, disabled: optionDisabled } }) => {
      if (optionDisabled) {
        acc.disabledOptions = acc.disabledOptions ? [...acc.disabledOptions, val] : [val];
      } else {
        const valueShowed = typeof child === 'object' ? label : child;
        acc.selectValue = acc.selectValue ? [...acc.selectValue, val] : [val];
        acc.displayedValue = acc.displayedValue ? [...acc.displayedValue, valueShowed] : [valueShowed];
        acc.optionSelected = acc.optionSelected ? [...acc.optionSelected, optionIndex] : [optionIndex];
      }
      return acc;
    }, { selectValue: [], displayedValue: [], optionSelected: [], disabledOptions: [] } as SelectConfig);

    const prevValuesSelected = selectValue.filter(val => !selectedOptions.selectValue.includes(val));

    const prevDisplayedSelected = displayedValue.filter(val => !selectedOptions.displayedValue.includes(val));

    if (!hasSelectedAllOptions.selected && hasSelectedAllOptions.indeterminate) {
      if (selectedOptions.disabledOptions && selectedOptions.disabledOptions.length > 0) {
        setSelectValue([...prevValuesSelected]);
        if (onChange) onChange([...prevValuesSelected])
        setDisplayedValue([...prevDisplayedSelected]);
      } else {
        setSelectValue([...new Set([...selectValue, ...selectedOptions.selectValue])]);
        if (onChange) onChange([...new Set([...selectValue, ...selectedOptions.selectValue])])
        setDisplayedValue([...new Set([...displayedValue, ...selectedOptions.displayedValue])]);
      }
    } else if (hasSelectedAllOptions.selected && hasSelectedAllOptions.indeterminate) {
      setSelectValue([...prevValuesSelected]);
      if (onChange) onChange([...prevValuesSelected])
      setDisplayedValue([...prevDisplayedSelected]);
    } else {
      setSelectValue([...prevValuesSelected, ...selectedOptions.selectValue]);
      if (onChange) onChange([...prevValuesSelected, ...selectedOptions.selectValue])
      setDisplayedValue([...prevDisplayedSelected, ...selectedOptions.displayedValue]);
    }
    setHasSelectedMultipleOption(true);
  };

  const classes = classNames({
    'nl-select': true,
    'nl-select-open': open,
    'nl-select-error': formContext.isError,
    [className]: true,
  });

  const contextData = {
    id: formContext.id,
    open,
    optionSelected,
    optionCurrent,
    selectValue,
    hasSelectedAllOptions,
    searchOption,
    multiple,
    searchPlaceholder,
    totalOptions,
    listBoxRef,
    selectSearchRef,
    selectTriggerRef,
    onChange,
    handleChangeSearch,
    handleClickSelectAll,
    handleClickSearchCheckbox,
    setOpen,
    setDisplayedValue,
    setOptionSelected,
    setOptionCurrent,
    setSelectValue,
    setHasSelectedMultipleOption,
  }

  return (
    <SelectProvider value={contextData}>
      <div
        id={formContext.id}
        ref={selectWrapperRef}
        className={classes}
        onFocus={() => formContext.setIsFocus(true)}
        onBlur={() => formContext.setIsFocus(false)}
      >
        <button ref={selectTriggerRef} role="combobox" disabled={disabled} onClick={() => setOpen(!open)} className="nl-select-input">
          <span className="nl-select-input-placeholder">{!formContext.hasContent && placeholder}</span>
          <div className="nl-select-input-text">
            {displayedValue.filter(Boolean).join(', ')}
          </div>
          {selectValue.length > 0 && <NlIcon src={navigationIcClose} className="nl-select-input-clean" />}
          <NlIcon src={hardwareIcKeyboardArrowDown} className="nl-select-input-arrow" />
        </button>

        <div ref={optionWrapperRef} style={styles.popper} {...attributes.popper} className="nl-select-wrapper-options">
          {multiple && showSelectAllBtn && <SelectAll />}
          {filter && <SelectSearch />}
          <div
            role="listbox"
            ref={listBoxRef}
            id={`${formContext.id}-listbox`}
            tabIndex={-1}
            className="nl-select-options"
            style={{ maxHeight: `${visibleOptions * 3}rem` }}
          >
            {optionsChildrenSorted.length > 0 ? (optionsChildrenSorted) : (<NoResultsTemplate message="No results were found" />)}
          </div>
        </div>
      </div>
    </SelectProvider>
  )
}