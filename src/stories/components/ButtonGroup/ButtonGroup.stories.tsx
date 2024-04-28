import { StoryObj, Meta } from "@storybook/react";
import { NlButton, NlButtonGroup, NlIcon } from "../../../components";
import { actionIcSettings } from "../../../assets/icons";

const meta: Meta<typeof NlButtonGroup> = {
  title: 'Components/Button/Button Group',
  component: NlButtonGroup,
  argTypes: {
    // Styles
    size: {
      description: 'Specifies the size of button group',
      value: 'small',
      type: { name: 'string', required: false },
      options: ['small', 'medium', 'large'],
      control: { type: 'radio' }
    },
    variant: {
      description: 'Specifies the variant of button group',
      value: 'default',
      type: { name: 'string', required: false },
      options: ['default', 'ghost'],
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
type Story = StoryObj<typeof NlButtonGroup>;

export const ButtonGroupDefault: Story = {
  render: args => {
    return (
      <NlButtonGroup {...args}>
        <NlButton onClick={() => { }}>
          <NlIcon src={actionIcSettings} />First
        </NlButton>
        <NlButton onClick={() => { }}>Middle</NlButton>
        <NlButton onClick={() => { }}>Last</NlButton>
      </NlButtonGroup>
    )
  },
  args: {
    size: 'small',
    variant: 'default',
  },
  parameters: {
    controls: {
      exclude: ["children"]
    }
  }
};