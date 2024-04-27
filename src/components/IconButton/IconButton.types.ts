import React from 'react';

export interface IconButtonProps {
    children: React.ReactNode;
    onClick: () => void | null;
    type?: 'submit' | 'reset' | 'button';
    size?: 'small' | 'medium' | 'large';
    disabled?: boolean;
    className?: string;
}