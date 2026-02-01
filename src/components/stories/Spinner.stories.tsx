import type { Meta, StoryObj } from '@storybook/react';
import { Spinner } from '@/components/atoms';

const meta = {
   title: 'Components/Atom/Spinner',
   component: Spinner,
   tags: ['autodocs'],
} satisfies Meta;
export default meta;

type Story = StoryObj<typeof Spinner>;

export const Default: Story = {};
