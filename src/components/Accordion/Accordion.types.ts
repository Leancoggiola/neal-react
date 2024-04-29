import { ReactNode } from 'react';

export interface AccordionProps {
    children: ReactNode;
    onOpen?: () => void | null;
    onClose?: () => void | null;
    open?: boolean;
    useChevronIcon?: boolean;
    alignIconRight?: boolean;
    className?: string;
}

export interface AccordionTriggerProps {
    children: ReactNode;
    className?: string;
}

export interface AccordionContentProps {
    children: ReactNode;
    className?: string;
}