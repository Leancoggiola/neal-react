import { Meta, StoryObj } from "@storybook/react";
import { NlBadge } from "../../../components";

const meta: Meta<typeof NlBadge> = {
  title: 'Components/Badge',
  component: NlBadge,
  argTypes: {
    // Behaviour
    value: {
      description: 'Number display on badge component',
      value: 0,
      type: { name: 'number', required: false }
    },
    overlap: {
      description: 'Specifies if overlap other component',
      value: false,
      type: { name: 'boolean', required: false }
    },
    // Styles
    variant: {
      description: 'Specifies the variant style of badge',
      value: 'image',
      type: { name: 'string', required: false },
      options: ['default', 'alt', 'success', 'info', 'warning', 'error'],
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
type Story = StoryObj<typeof NlBadge>;

export const BadgeDefault: Story = {
  args: {
    value: 10,
    overlap: false,
    variant: 'default'
  },
};