import type { Meta, StoryObj } from '@storybook/react';
import { NexcaMark } from '@/components/molecules';

const meta = {
   title: 'Components/Molecules/NexcaMark',
   component: NexcaMark,
   tags: ['autodocs'],
   parameters: {
      layout: 'centered',
      docs: {
         description: {
            component:
               'A verification badge component that displays a seal icon to indicate content authored by "Nexca". The icon is only rendered when the `master` prop is set to `true`, providing a visual authenticity indicator for content blocks.',
         },
      },
   },
   argTypes: {
      master: {
         control: { type: 'boolean' },
         description:
            'Controls whether the verification badge is displayed. When `true`, renders the seal icon; when `false`, renders nothing.',
         table: {
            type: { summary: 'boolean' },
         },
      },
   },
   args: {
      master: true,
   },
} satisfies Meta<typeof NexcaMark>;

export default meta;

type Story = StoryObj<typeof NexcaMark>;

export const Default: Story = {
   parameters: {
      docs: {
         description: {
            story: 'The default example shows the component with `master` set to `true`, displaying the verification seal icon.',
         },
      },
   },
};

export const NotVisible: Story = {
   args: {
      master: false,
   },
   parameters: {
      docs: {
         description: {
            story: 'Example showing the component with `master` set to `false`, resulting in no visible output.',
         },
      },
   },
};
