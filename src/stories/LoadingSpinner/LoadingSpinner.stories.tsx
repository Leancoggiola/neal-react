import { StoryFn, Meta } from "@storybook/react";
import { NlLoadingSpinner, LoadingSpinnerProps } from "../../components/LoadingSpinner";

const meta: Meta<typeof NlLoadingSpinner> = {
  title: "Components/Loading Spinner",
  component: NlLoadingSpinner,
  argTypes: {
    className: {
      control: {
        disable: true,
      },
    },
  },
};

export default meta;

export const ProgressLoader = {
  name: 'Default',
  render: (args: LoadingSpinnerProps) => <NlLoadingSpinner {...args} />,
  args: {
    show: true,
    fullscreen: false,
  },
  decorators: [
    (Story: any) => (
      <div style={{ margin: '3rem' }}>
        <Story />
      </div>
    ),
  ],
};