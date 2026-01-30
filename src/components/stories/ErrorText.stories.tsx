import type { Meta, StoryObj } from '@storybook/react';
import { ErrorText } from '@/components/atoms';

const meta = {
   title: 'Components/Atom/ErrorText',
   component: ErrorText,
   args: {
      children: 'Something went wrong',
   },
} satisfies Meta;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
