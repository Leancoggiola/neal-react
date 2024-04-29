import { Meta, StoryObj } from "@storybook/react";
import { NlAccordionContent } from "../../../components";

const meta: Meta<typeof NlAccordionContent> = {
  title: 'Components/Accordion Content',
  component: NlAccordionContent,
  argTypes: {
    // Behaviour
    children: {
      description: 'The content of the accordion content',
      value: null,
      control: false
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

type Story = StoryObj<typeof NlAccordionContent>;
export const AccordionTriggerDefault: Story = {};