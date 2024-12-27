import { FocusEvent, FocusEventHandler } from "react";

export interface DatePickerProps {
  value?: Date | Date[],
  minDate?: Date,
  maxDate?: Date,
  format?: string,
  todayMark?: boolean,
  range?: boolean,
  disabled?: boolean,
  required?: boolean,

  onClick?(e: MouseEvent): void, 
  onChange?(e: any): void,
  onFocus?(e: FocusEvent<HTMLDivElement>): void, 
  onCalendarOpen?(): void, 
  onCalendarClose?(): void,
  onKeyDown?(e: KeyboardEvent): void, 

  className?: string;
}