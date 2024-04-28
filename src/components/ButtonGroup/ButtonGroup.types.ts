import React from 'react';

export interface ButtonGroupProps {
    children: React.ReactNode;
    size?: 'small' | 'medium' | 'large';
    variant?: 'default' | 'ghost';
    className?: string;
}