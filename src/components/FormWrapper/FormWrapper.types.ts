import { ReactNode } from "react";

export interface FormWrapperProps {
    children: ReactNode;
    error?: boolean;
    className?: string;
} 