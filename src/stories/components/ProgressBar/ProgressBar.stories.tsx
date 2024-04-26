import { StoryObj, Meta } from "@storybook/react";
import { NlProgressBar } from "../../../components/ProgressBar";

const meta: Meta<typeof NlProgressBar> = {
  title: 'Components/Progress Bar',
  component: NlProgressBar,
  argTypes: {
    value: {
      description: 'Show value of progress if not indeterminate',
      value: 0,
      type: { name: 'number', required: false }
    },
    labelPosition: {
      description: 'Specifies the position of label on linear progress bar',
      value: 'default',
      type: { name: 'string', required: false },
      options: ['top', 'right', 'bottom', 'default'],
      control: { type: 'radio' }
    },
    hideLabel: {
      description: 'Hide progress bar label',
      value: false,
      type: { name: 'boolean', required: false },
    },
    isIndeterminate: {
      description: 'Specifies if progress is indeterminate or not',
      value: false,
      type: { name: 'boolean', required: false },
    },
    processStateLabel: {
      description: 'If indeterminate, specifies label text while progressing',
      value: 'Processing...',
      type: { name: 'string', required: false },
    },
    resultStateLabel: {
      description: 'If indeterminate, specifies label text when finished',
      value: 'Completed',
      type: { name: 'string', required: false },
    },
    circle: {
      description: 'Set the progress bar as a circle or line',
      value: false,
      type: { name: 'boolean', required: false },
    },
    error: {
      description: 'Set error behaviour and message',
      value: false,
      type: { name: 'boolean', required: false },
    },
    className: {
      description: 'Custom class to add or modified to the component styles.',
      value: '',
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
type Story = StoryObj<typeof NlProgressBar>;

export const ProgressBarDefault: Story = {
  args: {
  },
};