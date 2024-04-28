import React from 'react';

export interface FabButtonProps {
    children: React.ReactNode;
    onClick: () => void | null;
    type?: 'submit' | 'reset' | 'button';
    size?: 'small' | 'medium';
    disabled?: boolean;
    className?: string;
}