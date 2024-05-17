import { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { NlErrorMessage, NlFormWrapper, NlLabel, NlOption, NlSelect } from "../../../../components";

const meta: Meta<typeof NlSelect> = {
  title: 'Components/Forms/Select',
  component: NlSelect,
  argTypes: {
    // Behaviour
    id: {
      description: 'Specifies the id of input. If empty is set by default',
      type: { name: 'string', required: false },
    },
    multiple: {
      description: 'Specifies whether more than one option can be selected.',
      type: { name: 'boolean', required: false },
    },
    value: {
      description: 'The selected option(s).',
      type: { name: 'array', value: { name: 'string' }, required: true },
    },
    filter: {
      description: 'If true, filter options by input',
      type: { name: 'boolean', required: false },
    },
    // Styles
    disabled: {
      description: 'Specifies if select is disabled',
      type: { name: 'boolean', required: false },
    },
    required: {
      description: 'Specifies if select is required',
      type: { name: 'boolean', required: false },
    },
    showSelectAllBtn: {
      description: 'Show select all options checkbox',
      type: { name: 'boolean', required: false },
    },
    visibleOptions: {
      description: 'Specifies the number of options to be displayed before having to scroll.',
      type: { name: 'number', required: false },
    },
    placeholder: {
      description: 'Select placeholder.',
      type: { name: 'string', required: false },
    },
    searchPlaceholder: {
      description: 'Placeholder when filter search bar is active.',
      type: { name: 'string', required: false },
    },
    noResultsLayout: {
      description: 'Custom message template for no results found.',
      type: { name: 'other', value: 'ReactNode', required: false },
      control: false
    },
    // Events
    onChange: {
      description: 'Event fired when the value is changed. Returns the value of the selected option.',
      type: { name: 'function', required: false },
      control: false
    },
    className: {
      description: 'Specify a custom class to override the component styles.',
      type: { name: 'string', required: false },
    },
  },
  decorators: [
    Story => (
      <div style={{ height: 250, padding: '12px' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof NlSelect>;

const SelectTemplate = {
  render: (args: any) => {
    const [value, setValue] = useState<string[]>([]);

    return (
      <NlFormWrapper>
        <NlLabel>Cars</NlLabel>
        <NlSelect {...args} value={value} onChange={val => setValue(val)} >
          <NlOption value="audi">Audi</NlOption>
          <NlOption value="alfa romeo" disabled>Alfa Romeo (disabled)</NlOption>
          <NlOption value="ferrari">Ferrari</NlOption>
          <NlOption value="chevrolet">Chevrolet</NlOption>
          <NlOption value="bmw">BMW</NlOption>
          <NlOption value="toyota">Toyota</NlOption>
          <NlOption value="nissan">Nissan</NlOption>
          <NlOption value="dodge">Dodge</NlOption>
        </NlSelect>
        {value.length === 0 && <NlErrorMessage>This field is required</NlErrorMessage>}
      </NlFormWrapper>
    );
  },
};

export const SelectDefault: Story = {
  ...SelectTemplate,
  args: {
    placeholder: 'Placeholder',
    visibleOptions: 4,
    required: true
  },
  parameters: {
    controls: {
      exclude: ["id", "children", "value", "required", "searchPlaceholder", "noResultsLayout", "onChange"]
    }
  }
};