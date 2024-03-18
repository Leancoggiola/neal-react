import { StoryObj, Meta } from "@storybook/react";
import { NlIcon } from "../../../components/Icon";
import { navigationIcMenu } from '../../../assets/icons';

const meta: Meta<typeof NlIcon> = {
  title: 'Components/Icon',
  component: NlIcon,
  argTypes: {
    src: {
      description: 'Source of the Icon to show.',
      type: { name: 'string', required: true },
    },
    title: {
      description: 'HTML attribute title',
      type: { name: 'string', required: false },
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
type Story = StoryObj<typeof NlIcon>;

export const IconTest: Story = {
  args: {
    src: navigationIcMenu
  },
  parameters: {
    docs: {
      source: {
        format: true,
        code: `
          import { NlIcon } from 'neal-react';
          import { navigationIcMenu } from 'neal-react/assets/icons';

          const MenuIcon = () => {
            return (
              <NlIcon
                src={svg}
                title="Menu"
              />;
            )
          }

          export default SettingsIcon;
        `,
      },
    },
  },
};