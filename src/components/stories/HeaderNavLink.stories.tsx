import type { Meta, StoryObj } from '@storybook/react';
import { HeaderNavLink } from '@/components/atoms';

const meta = {
   title: 'Components/Atom/HeaderNavLink',
   component: HeaderNavLink,
   args: {
      name: 'Home',
      href: '/',
      type: 'desktop',
   },
   tags: ['autodocs'],
   argTypes: {
      name: {
         description: 'Visible label text of the navigation link',
         table: {
            type: { summary: 'string' },
            defaultValue: { summary: '—' },
         },
      },
      href: {
         description:
            'Target URL path; used to determine active state via route matching',
         table: {
            type: { summary: 'string' },
         },
      },
      type: {
         description:
            'Rendering style variant: desktop (inline) or mobile (block)',
         control: 'radio',
         options: ['desktop', 'mobile'],
         table: {
            type: { summary: '"desktop" | "mobile"' },
            defaultValue: { summary: 'desktop' },
         },
      },
   },
   parameters: {
      docs: {
         description: {
            component:
               'A responsive header navigation link that supports active-state highlighting and adapts styling between desktop and mobile views. Active state is determined by comparing `href` with the current route.',
         },
      },
   },
} satisfies Meta;
export default meta;

type Story = StoryObj<typeof HeaderNavLink>;

export const Default: Story = {};

export const Mobile: Story = {
   args: {
      type: 'mobile',
   },
};
