import { Meta, StoryObj } from "@storybook/react";
import { NlAccordionGroup } from "../../../components";

const meta: Meta<typeof NlAccordionGroup> = {
  title: 'Components/Accordion Group',
  component: NlAccordionGroup,
  argTypes: {
    // Behaviour
    children: {
      description: 'The content of the accordion',
      value: null,
      control: false
    },
    defaultSelected: {
      description: 'Specifies which accordion is render open by default',
      value: null,
      type: { name: 'number', required: false },
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

type Story = StoryObj<typeof NlAccordionGroup>;
export const AccordionTriggerDefault: Story = {};