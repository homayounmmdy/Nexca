import type { Meta, StoryObj } from '@storybook/react';
import { SiteNameLink } from '@/components/atoms';

const meta = {
   title: 'Components/Atom/SiteNameLink',
   component: SiteNameLink,
} satisfies Meta;
export default meta;

type Story = StoryObj<typeof SiteNameLink>;

export const Default: Story = {};
