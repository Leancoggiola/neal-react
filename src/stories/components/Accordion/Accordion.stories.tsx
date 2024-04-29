import { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { NlAccordion, NlAccordionContent, NlAccordionGroup, NlAccordionTrigger } from "../../../components";

const meta: Meta<typeof NlAccordion> = {
  title: 'Components/Accordion',
  component: NlAccordion,
  argTypes: {
    // Behaviour
    children: {
      description: 'The content of the accordion',
      value: null,
      control: false
    },
    onOpen: {
      description: 'The callback function when the accordion is opened',
      value: null,
      type: { name: 'function', required: false },
    },
    onClose: {
      description: 'The callback function when the accordion is closed',
      value: null,
      type: { name: 'function', required: false },
    },
    open: {
      description: 'Whetever the accordions is opened or closed',
      value: false,
      type: { name: 'boolean', required: false },
    },
    // Variants
    useChevronIcon: {
      description: 'Specifies whether use the arrows icons on header',
      value: false,
      type: { name: 'boolean', required: false },
    },
    alignIconRight: {
      description: 'Specifies whether the icon is positioned on the right of header',
      value: false,
      type: { name: 'boolean', required: false },
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
type Story = StoryObj<typeof NlAccordion>;

export const AccordionDefault: Story = {
  render: args => {
    const [open, setOpen] = useState(false);

    return (
      <NlAccordion {...args} open={open} onOpen={() => setOpen(true)} onClose={() => setOpen(false)} >
        <NlAccordionTrigger>Accordion Title Content</NlAccordionTrigger>
        <NlAccordionContent>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Donec porta fermentum aliquet. Maecenas vel diam sed justo tempus cursus id nec libero. Etiam posuere, urna eu lobortis ornare, mi lectus finibus mi, sit amet malesuada lectus augue pretium mauris. Proin purus nisi, euismod quis volutpat id, maximus nec nisi. Aliquam at imperdiet turpis.
            Curabitur risus purus, euismod non justo vitae, aliquam tincidunt sem. Morbi non leo in mauris condimentum varius a eget turpis. Duis tristique quam a pharetra volutpat. Praesent non facilisis ex. Donec volutpat pellentesque vestibulum.
            Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
          </p>
        </NlAccordionContent>
      </NlAccordion>
    )
  },
  args: {
    alignIconRight: false,
    useChevronIcon: false,
    className: '',
  },
  parameters: {
    controls: {
      exclude: ["children", "open", "onOpen", "onClose"]
    }
  }
};

const accordion = () => (
  <NlAccordion>
    <NlAccordionTrigger>Accordion Title Content</NlAccordionTrigger>
    <NlAccordionContent>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Donec porta fermentum aliquet. Maecenas vel diam sed justo tempus cursus id nec libero. Etiam posuere, urna eu lobortis ornare, mi lectus finibus mi, sit amet malesuada lectus augue pretium mauris. Proin purus nisi, euismod quis volutpat id, maximus nec nisi. Aliquam at imperdiet turpis.
        Curabitur risus purus, euismod non justo vitae, aliquam tincidunt sem. Morbi non leo in mauris condimentum varius a eget turpis. Duis tristique quam a pharetra volutpat. Praesent non facilisis ex. Donec volutpat pellentesque vestibulum.
        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
      </p>
    </NlAccordionContent>
  </NlAccordion>
)

export const AccordionGroupExample: Story = {
  render: args => (
    <NlAccordionGroup {...args}>
      {accordion()}
      {accordion()}
      {accordion()}
    </NlAccordionGroup>
  ),
};