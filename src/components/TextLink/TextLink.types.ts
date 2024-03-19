import React from 'react';

export interface TextLinkProps {
    href: string;
    children: React.ReactNode;
    disabled?: boolean;
    className?: string;
}