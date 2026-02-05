import type { Meta, StoryObj } from '@storybook/react';
import { CTABtn } from '@/components/molecules';

const meta = {
   title: 'Components/Molecules/CTABtn',
   component: CTABtn,
   tags: ['autodocs'],
   parameters: {
      layout: 'centered',
   },
   args: {
      children: 'Get Started',
      href: 'https://example.com',
   },
   argTypes: {
      children: {
         control: { type: 'text' },
         description: 'The visible text label of the CTA button.',
      },
      href: {
         control: { type: 'text' },
         description: 'The destination URL for the link.',
      },
   },
   // Mock the Next.js Link behavior for Storybook
   decorators: [
      (Story) => (
         <div style={{ padding: '2rem', backgroundColor: '#f5f5f5' }}>
            <Story />
         </div>
      ),
   ],
} satisfies Meta<typeof CTABtn>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithLongText: Story = {
   args: {
      children: 'Explore Our Features Now',
   },
};

export const ExternalLink: Story = {
   args: {
      children: 'Visit External Site',
      href: 'https://external-site.com',
   },
};
