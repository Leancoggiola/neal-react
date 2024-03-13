import { StoryFn, Meta } from "@storybook/react";
import { NlIcon } from "../../components/Icon";
import { actionIcSettings } from '../../assets/icons';

export default {
  title: "ReactComponentLibrary/Icon",
  component: NlIcon,
} as Meta<typeof NlIcon>;

const Template: StoryFn<typeof NlIcon> = (args) => <NlIcon {...args} />;

export const IconTest = Template.bind({});
IconTest.args = {
    src: actionIcSettings
};