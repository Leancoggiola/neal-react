import { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { NlErrorMessage, NlFormWrapper, NlInput, NlLabel } from "../../../../components";

const meta: Meta<typeof NlInput> = {
  title: 'Components/Forms/Input',
  component: NlInput,
  argTypes: {
    // Behaviour
    id: {
      description: 'Specifies the id of input. If empty is set by default',
      type: { name: 'string', required: false }
    },
    value: {
      description: 'Value of component',
      type: { name: 'string', required: true },
    },
    placeholder: {
      description: 'Specifies the placeholder on input',
      type: { name: 'string', required: false }
    },
    type: {
      description: 'Specifies type of input',
      value: 'text',
      type: { name: 'string', required: false },
      options: ['text', 'email', 'number', 'password', 'date'],
      control: { type: 'radio' }
    },
    // Styles
    disabled: {
      description: 'Specifies if input is disabled',
      value: false,
      type: { name: 'boolean', required: false },
    },
    required: {
      description: 'Specifies if input is required',
      value: false,
      type: { name: 'boolean', required: false },
    },
    hideClearButton: {
      description: 'Specifies if input has a clear value button',
      value: false,
      type: { name: 'boolean', required: false },
    },
    // Events
    onBlur: {
      description: 'Event fire when input loses focus',
      value: () => { },
      type: { name: 'function', required: false },
    },
    onFocus: {
      description: 'Event fire when input gain focus',
      value: () => { },
      type: { name: 'function', required: false },
    },
    onChange: {
      description: 'Event fire when input change values',
      value: () => { },
      type: { name: 'function', required: false },
    },
    // Variants
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
type Story = StoryObj<typeof NlInput>;

export const InputDefault: Story = {
  render: (args) => {
    const [val, setVal] = useState<string>('');

    return (
      <NlFormWrapper>
        <NlLabel>Text Input</NlLabel>
        <NlInput {...args} value={val} onChange={e => setVal(e.target.value)} />
        {val === '' && <NlErrorMessage>This field is required</NlErrorMessage>}
      </NlFormWrapper>
    )
  },
  args: {
    id: 'input',
    type: 'text',
    required: true
  },
  parameters: {
    controls: {
      exclude: ["id", "value", "onBlur", "onChange", "onFocus"]
    }
  }
};