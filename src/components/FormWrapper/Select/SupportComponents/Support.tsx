import classNames from "classnames";
import { FC, useContext, useEffect } from "react";

import { actionIcSearch, contentIcRemove, navigationIcCheck } from "../../../../assets/icons";
import { NlIcon } from "../../../Icon";
import { NlOption } from "../Option";

import { SelectContext } from "../Select.context";

interface SelectCheckboxProps {
  selected: boolean,
  indeterminate?: boolean,
  onClick?(): void
}

interface SelectAllProps {
  selectLabel?: string,
  deselectLabel?: string
}

export const SelectCheckbox: FC<SelectCheckboxProps> = ({ selected = false, indeterminate = false, onClick = () => { } }) => {
  const classes = classNames({
    'nl-select-checkbox': true,
    'nl-select-checkbox-selected': selected,
    'nl-select-checkbox-indeterminate': indeterminate
  });

  return (
    <div className={classes} onClick={onClick}>
      <NlIcon src={navigationIcCheck} className='nl-select-checkbox-icon-selected' />
      <NlIcon src={contentIcRemove} className='nl-select-checkbox-icon-indeterminate' />
    </div>
  );
}

export const SelectAll: FC<SelectAllProps> = ({ selectLabel = 'Select All', deselectLabel = 'Deselect All' }) => {
  const { hasSelectedAllOptions: { selected, indeterminate }, handleClickSelectAll } = useContext(SelectContext)

  return (
    <div className="nl-select-all" onClick={handleClickSelectAll}>
      <SelectCheckbox selected={selected} indeterminate={indeterminate} />
      {!selected ? selectLabel : deselectLabel}
    </div>
  );
}

export const SelectSearch: FC<{}> = () => {
  const {
    open,
    multiple,
    totalOptions,
    searchPlaceholder,
    searchOption,
    selectSearchRef,
    hasSelectedAllOptions,
    handleChangeSearch,
    handleClickSearchCheckbox,
  } = useContext(SelectContext);

  useEffect(() => {
    if (open) selectSearchRef.current?.focus();
  }, [open])

  const classes = classNames({
    'nl-select-search': true,
    'nl-select-search-no-results': totalOptions === 0,
  });

  return (
    <div className={classes}>
      {multiple && (
        <SelectCheckbox
          selected={hasSelectedAllOptions.selected}
          indeterminate={hasSelectedAllOptions.indeterminate}
          onClick={handleClickSearchCheckbox}
        />
      )}
      <input
        ref={selectSearchRef}
        className="nl-select-search-input"
        type="text"
        role="combobox"
        placeholder={searchPlaceholder}
        value={searchOption}
        onChange={handleChangeSearch}
      />
      <NlIcon src={actionIcSearch} className="nl-select-search-icon" />
    </div>
  );
}

export const DefaultOptionTemplate: FC<{ value: string, searchTerm: string }> = ({ value = '', searchTerm = '' }) => {
  const escapeRegExp = (str: string) => str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');

  if (!searchTerm.trim()) return <span>{value}</span>

  const regex = new RegExp(`(${escapeRegExp(searchTerm)})`, 'gi');
  const parts = value.split(regex);

  return (
    <span className="nl-default-template">
      {parts.map((part, index) => regex.test(part) ? (
        <strong key={index} style={{ fontWeight: 'bold' }}>
          {part}
        </strong>
      ) : (part)
      )}
    </span>
  );
}

export const NoResultsTemplate: FC<{ message: string }> = ({ message }) => <NlOption value={'none'} disabled>{message}</NlOption>;