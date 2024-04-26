import { StoryObj, Meta } from "@storybook/react";
import { NlButton } from "../../../components/Button";

const meta: Meta<typeof NlButton> = {
  title: 'Components/Button',
  component: NlButton,
  argTypes: {
    // Behaviour
    type: {
      description: 'Specifies type of button',
      value: 'submit',
      type: { name: 'string', required: false },
      options: ['submit', 'reset', 'button'],
      control: { type: 'radio' }
    },
    // Styles
    size: {
      description: 'Specifies the size of button',
      value: 'small',
      type: { name: 'string', required: false },
      options: ['small', 'medium', 'large'],
      control: { type: 'radio' }
    },
    variant: {
      description: 'Specifies the variant of button',
      value: 'primary',
      type: { name: 'string', required: false },
      options: ['primary', 'secondary'],
      control: { type: 'radio' }
    },
    warn: {
      description: 'Specifies if button is warning',
      value: false,
      type: { name: 'boolean', required: false },
    },
    disabled: {
      description: 'Specifies if button is disabled',
      value: false,
      type: { name: 'boolean', required: false },
    },
    // Variants
    loading: {
      description: 'Specifies whether the button is loading',
      value: false,
      type: { name: 'boolean', required: false },
    },
    progress: {
      description: 'If loading, progress of load - null for indeterminate',
      value: null,
      type: { name: 'number', required: false },
    },
    stepper: {
      description: 'Add style and icon of a prev or next step button',
      value: null,
      type: { name: 'string', required: false },
      options: ['prev', 'next', null],
      control: { type: 'radio' }
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
type Story = StoryObj<typeof NlButton>;

export const ButtonDefault: Story = {
  args: {
    children: 'Button',
    onClick: () => alert('Hello world'),
    type: 'submit',
    size: 'small',
    variant: 'primary',
  },
};