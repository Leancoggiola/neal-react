import classNames from 'classnames';
import { FC, FocusEvent, useContext, useEffect, useState } from 'react';

import DateRangePicker from '@wojtekmaj/react-daterange-picker';
import DatePicker from 'react-date-picker';

import { actionIcDatePicker } from '../../../assets/icons';
import { NlIcon } from '../../Icon';
import { FormWrapperContext } from '../FormWrapper.context';
import { DatePickerProps } from './DatePicker.types';

let idCounter = 0;

export const NlDatePicker: FC<DatePickerProps> = ({
  value: valueProp = null,
  minDate,
  maxDate,
  format = 'y-MM-dd',
  todayMark = false,
  range = false,
  onClick = () => null,
  onChange = () => null,
  onFocus = () => null,
  onCalendarOpen = () => null,
  onCalendarClose = () => null,
  onKeyDown = () => null,
  disabled = false,
  required = false,
  className = '',
}) => {

  const formContext = useContext(FormWrapperContext);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // valueProp = controlled, else uncontrolled component
  const value = valueProp || formContext.value || null;

  useEffect(() => {
    formContext.setElementType('date');
    formContext.setId(`nl-date-picker-${idCounter++}`);
  }, []);

  useEffect(() => formContext.setHasContent(value && typeof value === 'object'), [value]);
  useEffect(() => formContext.setValue(valueProp), [valueProp]);
  useEffect(() => formContext.setIsRequired(required), [required]);
  useEffect(() => formContext.setIsDisabled(disabled), [disabled]);
  useEffect(() => setIsOpen(formContext.isFocus), [formContext.isFocus]);

  const handleChange = (date: any) => {
    debugger
    !valueProp && formContext.setValue(date);
    date !== null && setInvalidState(date);

    onChange(date);
  };

  const validateDate = (date: string) => {
    return Date.parse(date) && Date.parse(date) > 0;
  };

  const setInvalidState = (date: string) => {
    let isError = true;
    if (range) {
      if (validateDate(date[0]) && validateDate(date[1])) {
        isError = false;
      }
    } else if (validateDate(date)) {
      isError = false;
    }

    formContext.setIsError(isError);
  }

  const handleFocus = (event: FocusEvent<HTMLDivElement>) => {
    formContext.setIsFocus(true);
    onFocus(event);
  };

  const handleClick = (event: MouseEvent) => {
    if (!disabled) {
      formContext.setIsFocus(true);
      onClick(event);
    }
  };

  const handleCalendarOpen = () => onCalendarOpen()

  const handleCalendarClose = () => {
    formContext.setIsFocus(false);
    onCalendarClose();
  };

  const handleKeyDown = (event: KeyboardEvent) => onKeyDown(event)

  const classes = classNames({
    'nl-date-picker': true,
    'nl-date-picker-range': range,
    'nl-date-picker-error': formContext.isError,
    'nl-date-picker-has-value': formContext.hasContent || value,
    'nl-date-picker-today-highlight': todayMark,
    [className]: true,
  });

  const datePickerProps = {
    name: formContext.id,
    minDate,
    maxDate,
    value,
    isOpen,
    format,
    disabled,
    clearIcon: null,
    calendarProps: {
      className: 'nl-date-picker-calendar',
      next2Label: null,
      prev2Label: null,
    },
    calendarIcon: (<NlIcon className="nl-date-picker-calendar-icon" src={actionIcDatePicker} />),
    dayPlaceholder: "DD",
    monthPlaceholder: "MM",
    yearPlaceholder: "YYYY",
    className: classes,
    onFocus: handleFocus,
    onChange: handleChange,
    onCalendarClose: handleCalendarClose,
    onCalendarOpen: handleCalendarOpen,
    onClick: handleClick,
    onKeyDown: handleKeyDown,
  };

  return (
    <div className='nl-date-picker-wrapper'>
      {range ? <DateRangePicker {...datePickerProps} /> : <DatePicker {...datePickerProps} />}
    </div>
  )
}