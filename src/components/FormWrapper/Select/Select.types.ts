import { ReactElement, SelectHTMLAttributes } from "react";

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  children: ReactElement[],
  id?: string,
  value: string[],
  placeholder?: string,
  searchPlaceholder?: string,
  visibleOptions: number,
  showSelectAllBtn: boolean,
  filter?: boolean,
  noResultsLayout?: ReactElement,
  onChange: (val:any) => void,
  className?: string;
}