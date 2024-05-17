import { ReactNode } from "react";

export interface OptionProps {
  children: ReactNode,
  value: string,
  label?: string,
  disabled?: boolean,
  optionIndex?: number,
  isSelected?: boolean,
  isCurrentSelected?: boolean,
  onClick?(): void,
  className?: string;
}