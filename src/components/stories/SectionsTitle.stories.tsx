import type { Meta, StoryObj } from '@storybook/react';
import { SectionsTitle } from '@/components/atoms';

const meta = {
   title: 'Components/Atom/SectionTitle',
   component: SectionsTitle,
   args: {
      children: 'Section Title',
      line: true,
   },
} satisfies Meta;
export default meta;

type Story = StoryObj<typeof SectionsTitle>;

export const Default: Story = {};

export const WithoutLine: Story = {
   args: {
      line: false,
   },
};

export const CustomBg: Story = {
   args: {
      bg: 'bg-green-600',
   },
};
