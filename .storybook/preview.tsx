import type { Preview } from '@storybook/react';
import { previewTheme } from './Theme';
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
    docs: {
      theme: previewTheme
    }
  },
  decorators: [
    Story => {
      return (
        <>
          <NlThemeProvider variant={'dark'} />
          <div style={{
            backgroundColor: '#1A1A24',
            overflow: 'auto',
            height: '100%',
          }}>
            <Story />
          </div>
        </>
      );
    },
  ],
};

export default preview;
