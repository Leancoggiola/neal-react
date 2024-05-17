import classNames from 'classnames';
import { FC, ReactElement, ReactNode, cloneElement, useContext, useEffect, useRef, useState } from 'react';

import { SelectContext } from '../Select.context';
import { DefaultOptionTemplate, SelectCheckbox } from '../SupportComponents';
import { OptionProps } from './Option.types';

const isOptionInView = (option: HTMLDivElement, listBox: HTMLDivElement) => {
  const listBoxBounding = listBox.getBoundingClientRect();
  const optionBounding = option.getBoundingClientRect();

  return (
    optionBounding.top >= listBoxBounding.top &&
    optionBounding.left >= listBoxBounding.left &&
    optionBounding.bottom <= listBoxBounding.bottom &&
    optionBounding.right <= listBoxBounding.right
  );
};

export const NlOption: FC<OptionProps> = ({
  children,
  value: optionValue = '',
  label = '',
  disabled = false,
  optionIndex = 0,
  isSelected = false,
  isCurrentSelected = false,
  onClick = null,
  className = ''
}) => {
  const [isOptionSelected, setIsOptionSelected] = useState<boolean>(isSelected);
  const {
    id,
    optionCurrent,
    searchOption,
    multiple,
    totalOptions,
    listBoxRef,
    selectTriggerRef,
    onChange,
    setOpen,
    setDisplayedValue,
    setOptionSelected,
    setOptionCurrent,
    setSelectValue,
    setHasSelectedMultipleOption,
  } = useContext(SelectContext);

  const optionRef = useRef<HTMLDivElement>(null);
  const optionIsSelected = optionIndex === optionCurrent;
  const optionAtTheTop = searchOption !== '' && optionIndex === 0 && optionCurrent === -1;

  const parsedChildrenOption = (childrenOption: ReactNode) => {
    if (typeof childrenOption === 'object') return cloneElement(children as ReactElement, { searchTerm: searchOption, value: label })

    return <DefaultOptionTemplate searchTerm={searchOption} value={childrenOption as string} />;
  };

  useEffect(() => {
    if (optionIsSelected && optionRef.current && listBoxRef.current && !isOptionInView(optionRef.current, listBoxRef.current)) {
      optionRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }, [optionIsSelected]);

  useEffect(() => {
    setIsOptionSelected(isSelected);
  }, [isSelected]);

  const handleClickSingle = () => {
    setSelectValue([optionValue]);
    setDisplayedValue([typeof children === 'object' ? label : children as string]);
    setOptionSelected([optionIndex]);
    setOptionCurrent(optionIndex);
    setOpen(false);
    selectTriggerRef?.current?.focus();

    onChange && onChange(optionValue);
  };

  const handleClickMultiple = () => {
    setSelectValue((prevState: string[]) => {
      if (prevState.includes(optionValue)) {
        const filteredValues = prevState.filter(val => val !== optionValue);
        onChange && onChange(filteredValues)
        return filteredValues;
      }
      onChange && onChange([...prevState, optionValue])
      return [...prevState, optionValue];
    });

    setDisplayedValue((prevState: string[]) => {
      const valueShowed = typeof children === 'object' ? label : children as string;
      if (prevState.includes(valueShowed)) return prevState.filter(val => val !== valueShowed);
      return [...prevState, valueShowed];
    });

    setOptionSelected((prevState: number[]) => {
      if (prevState.includes(optionIndex)) return prevState.filter(val => val !== optionIndex)
      return [...prevState, optionIndex];
    });

    setHasSelectedMultipleOption(true);
    setIsOptionSelected(!isOptionSelected);
  };

  const handleClick = () => {
    if (!disabled) {
      multiple ? handleClickMultiple() : handleClickSingle();
      onClick && onClick()
    }
  };

  const classes = classNames({
    'nl-option': true,
    'nl-option-disabled': disabled,
    'nl-option-current': optionIsSelected || isCurrentSelected || optionAtTheTop,
    [className]: true,
  });

  return (
    <div
      id={`${id}-${optionIndex}`}
      ref={optionRef}
      role="option"
      tabIndex={optionIsSelected || isCurrentSelected ? 0 : -1}
      className={classes}
      onClick={handleClick}
    >
      {multiple && totalOptions > 0 && <SelectCheckbox selected={isOptionSelected} />}
      {parsedChildrenOption(children)}
    </div>
  );
}