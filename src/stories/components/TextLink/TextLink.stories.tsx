import { StoryObj, Meta } from "@storybook/react";
import { NlTextLink } from "../../../components/TextLink/Index";

const meta: Meta<typeof NlTextLink> = {
  title: 'Components/Text Link',
  component: NlTextLink,
  argTypes: {
    href: {
      description: 'Specifies the URL of the page the link goes to',
      type: { name: 'string', required: true },
    },
    disabled: {
      description: 'Set disabled behaviour',
      type: { name: 'boolean', required: false },
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
type Story = StoryObj<typeof NlTextLink>;

export const TextLinkDefault: Story = {
  args: {
    children: 'Text Link',
    href: '',
    disabled: false,
  },
};