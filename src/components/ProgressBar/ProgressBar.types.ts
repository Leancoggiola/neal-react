export interface ProgressBarProps {
    circle?: boolean;
    isIndeterminate?: boolean;
    value?: number;
    error?: boolean;
    hideLabel?: boolean;
    processStateLabel?: string;
    resultStateLabel?: string;
    labelPosition?: 'top' | 'right' | 'bottom' | 'default';
    className?: string;
}
