import type { Preview } from '@storybook/react';
import React from 'react';
import { NlThemeProvider } from '../src/components';
import './index.scss';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    Story => {
      return (
        <>
          <NlThemeProvider variant={'dark'} />
          <Story />
        </>
      );
    },
  ],
};

export default preview;
