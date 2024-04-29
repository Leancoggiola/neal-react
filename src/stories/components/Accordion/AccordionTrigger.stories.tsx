import { Meta, StoryObj } from "@storybook/react";
import { NlAccordionTrigger } from "../../../components";

const meta: Meta<typeof NlAccordionTrigger> = {
  title: 'Components/Accordion Trigger',
  component: NlAccordionTrigger,
  argTypes: {
    // Behaviour
    children: {
      description: 'The content of the accordion trigger',
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

type Story = StoryObj<typeof NlAccordionTrigger>;
export const AccordionTriggerDefault: Story = {};