import { StoryObj, Meta } from "@storybook/react";
import { NlIcon, NlIconButton } from "../../../components";
import { actionIcAlarm } from "../../../assets/icons";

const meta: Meta<typeof NlIconButton> = {
  title: 'Components/Icon Button',
  component: NlIconButton,
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
    disabled: {
      description: 'Specifies if button is disabled',
      value: false,
      type: { name: 'boolean', required: false },
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
type Story = StoryObj<typeof NlIconButton>;

export const IconButtonDefault: Story = {
  args: {
    children: <NlIcon src={actionIcAlarm} />,
    onClick: () => alert('Alarm set'),
    type: 'button',
    size: 'small',
  },
  parameters: {
    controls: {
      exclude: ["children", "onClick"]
    }
  }
};