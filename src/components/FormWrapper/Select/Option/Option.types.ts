import { ReactElement } from "react";

export interface OptionProps {
  children: ReactElement,
  value: string,
  label?: string,
  disabled: boolean,
  optionIndex: number,
  isSelected: boolean,
  isCurrentSelected: boolean,
  onClick(): void,
  className?: string;
}