import React, { useEffect } from 'react';

import { ThemeProviderProps } from './ThemeProvider.types';

export const NlThemeProvider: React.FC<ThemeProviderProps> = ({variant = 'dark'}) => {
  useEffect(() => {
    document.querySelector('body')?.setAttribute('class', 'nl-theme-'+ variant)
  }, [variant])

  return null
};