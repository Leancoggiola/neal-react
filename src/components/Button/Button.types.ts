import React from 'react';

export interface ButtonProps {
    children: React.ReactNode;
    onClick: () => void | null;
    type?: 'submit' | 'reset' | 'button';
    size?: 'small' | 'medium' | 'large';
    variant?: 'primary' | 'secondary';
    warn?: boolean;
    className?: string;
    disabled?: boolean;
    loading?: boolean;
    progress?: number;
    stepper?: 'prev' | 'next' | null;
}