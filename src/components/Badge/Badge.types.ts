export interface BadgeProps {
    value?: number;
    overlap?: boolean;
    variant?: 'default' | 'alt' | 'success' | 'info' | 'warning' | 'error';
    className?: string;
}