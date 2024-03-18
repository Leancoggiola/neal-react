import { StoryObj, Meta } from "@storybook/react";
import { NlLoadingSpinner } from "../../../components/LoadingSpinner";

const meta: Meta<typeof NlLoadingSpinner> = {
  title: 'Components/Loading Spinner',
  component: NlLoadingSpinner,
  argTypes: {
    show: {
      description: 'Define if the spinner is show or not.',
      type: { name: 'boolean', required: false },
      defaultValue: false
    },
    fullscreen: {
      description: 'Define if the spinner is show in fullscreen or not.',
      type: { name: 'boolean', required: false },
      defaultValue: false
    },
    className: {
      description: 'Custom class to add or modified to the component styles.',
      type: { name: 'string', required: false },
    },
  },
  decorators: [
    Story => (
      <div style={{ padding: '12px' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof NlLoadingSpinner>;

export const SpinnerTest: Story = {
  args: {
    show: true
  },
  parameters: {
    docs: {
      source: {
        format: true,
        code: `
        <NlLoadingSpinner show={true}/>
        `,
      },
    },
  },
};