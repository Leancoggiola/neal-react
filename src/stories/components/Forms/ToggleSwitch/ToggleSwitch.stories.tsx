import { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { NlFormWrapper, NlToggleSwitch } from "../../../../components";

const meta: Meta<typeof NlToggleSwitch> = {
  title: 'Components/Forms/ToggleSwitch',
  component: NlToggleSwitch,
  argTypes: {
    // Behaviour
    id: {
      description: 'Specifies the id of input. If empty is set by default',
      type: { name: 'string', required: false }
    },
    checked: {
      description: 'Set if toggle is checked or not',
      type: { name: 'boolean', required: true },
    },
    onLabel: {
      description: 'Label when toggle is checked',
      type: { name: 'string', required: false }
    },
    offLabel: {
      description: 'Label when toggle is unchecked',
      type: { name: 'string', required: false }
    },
    // Styles
    disabled: {
      description: 'Specifies if input is disabled',
      value: false,
      type: { name: 'boolean', required: false },
    },
    hideLabels: {
      description: 'Specifies if labels are shown',
      value: false,
      type: { name: 'boolean', required: false },
    },
    // Events
    onChange: {
      description: 'Event fire when toggle change value',
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
type Story = StoryObj<typeof NlToggleSwitch>;

export const ToggleSwitchDefault: Story = {
  render: (args) => {
    const [checked, setChecked] = useState<boolean>(false)

    return (
      <NlFormWrapper>
        <NlToggleSwitch {...args} checked={checked} onChange={() => setChecked(!checked)} />
      </NlFormWrapper>
    );
  },
  args: {
    onLabel: 'On',
    offLabel: 'Off'
  },
  parameters: {
    controls: {
      exclude: ["id", "value", "checked", "onChange"]
    }
  }
};