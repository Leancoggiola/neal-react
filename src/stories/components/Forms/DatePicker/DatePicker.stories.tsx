import { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { NlErrorMessage, NlFormWrapper, NlDatePicker, NlLabel } from "../../../../components";

const meta: Meta<typeof NlDatePicker> = {
  title: 'Components/Forms/Date-Picker',
  component: NlDatePicker,
  argTypes: {
    // // Behaviour
    // id: {
    //   description: 'Specifies the id of input. If empty is set by default',
    //   type: { name: 'string', required: false }
    // },
    // value: {
    //   description: 'Value of component',
    //   type: { name: 'string', required: true },
    // },
    // placeholder: {
    //   description: 'Specifies the placeholder on input',
    //   type: { name: 'string', required: false }
    // },
    // type: {
    //   description: 'Specifies type of input',
    //   value: 'text',
    //   type: { name: 'string', required: false },
    //   options: ['text', 'email', 'number', 'password', 'date'],
    //   control: { type: 'radio' }
    // },
    // // Styles
    // disabled: {
    //   description: 'Specifies if input is disabled',
    //   value: false,
    //   type: { name: 'boolean', required: false },
    // },
    // required: {
    //   description: 'Specifies if input is required',
    //   value: false,
    //   type: { name: 'boolean', required: false },
    // },
    // hideClearButton: {
    //   description: 'Specifies if input has a clear value button',
    //   value: false,
    //   type: { name: 'boolean', required: false },
    // },
    // // Events
    // onBlur: {
    //   description: 'Event fire when input loses focus',
    //   value: () => { },
    //   type: { name: 'function', required: false },
    // },
    // onFocus: {
    //   description: 'Event fire when input gain focus',
    //   value: () => { },
    //   type: { name: 'function', required: false },
    // },
    // onChange: {
    //   description: 'Event fire when input change values',
    //   value: () => { },
    //   type: { name: 'function', required: false },
    // },
    // // Variants
    // className: {
    //   description: 'Custom class to add or modified to the component styles.',
    //   value: '',
    //   type: { name: 'string', required: false },
    // },
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
type Story = StoryObj<typeof NlDatePicker>;

export const DatePickerDefault: Story = {
  render: (args) => {
    const [value, setValue] = useState();

    const handleChange = (value: any) => {
      setValue(value);
    };

    return (
      <NlFormWrapper>
        <NlLabel>Date Picker</NlLabel>
        <NlDatePicker {...args} value={value} onChange={date => handleChange(date)} />
        {/*val === '' && <NlErrorMessage>This field is required</NlErrorMessage>*/}
      </NlFormWrapper>
    )
  },
  args: {
    format: "dd-MM-yyyy",

  },
  parameters: {
    controls: {
      exclude: []
    }
  }
};