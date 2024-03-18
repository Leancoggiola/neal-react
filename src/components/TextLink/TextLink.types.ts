import React from 'react';

export interface TextLinkProps {
    href: string;
    children: React.ReactNode;
    variant?: "default" | "alt";
    disabled?: boolean;
    className?: string;
}