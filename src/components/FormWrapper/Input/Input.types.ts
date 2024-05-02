import { InputHTMLAttributes, ReactNode } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  type: 'text'|'email'|'number'|'password'|'date',
  hideClearButton?: boolean,
}