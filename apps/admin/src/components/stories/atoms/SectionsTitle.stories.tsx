import type { Meta, StoryObj } from '@storybook/react';
import { SectionsTitle } from '@/components/atoms';

const meta = {
   title: 'Components/Atom/SectionTitle',
   component: SectionsTitle,
   tags: ['autodocs'],
   args: {
      children: 'Section Title',
      line: true,
      bg: 'bg-indigo-700',
   },
   argTypes: {
      children: {
         control: 'text',
         description: 'The title text to display',
      },
      bg: {
         control: 'text',
         description:
            'Tailwind background color class for the badge (e.g., `bg-green-600`)',
      },
      line: {
         control: 'boolean',
         description:
            'Whether to show the decorative horizontal line after the title',
      },
      className: {
         control: 'text',
         description: 'Additional Tailwind classes for the title badge',
      },
   },
} satisfies Meta<typeof SectionsTitle>;

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
