import { NlThemeProvider } from '../src/components';
import './index.scss';

import { ArgTypes, Description, Primary, Stories, Subtitle, Title } from '@storybook/blocks';

const preview = {
  parameters: {
    actions: { argTypesRegex: '^on(?!Label)[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => {
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
