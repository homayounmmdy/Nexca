import type { Meta, StoryObj } from '@storybook/react';
import { Container } from '@/components/atoms';

const meta = {
   title: 'Components/Atom/Container',
   component: Container,
   args: {
      children: <div className="bg-amber-700 w-full h-screen">Hello World</div>,
   },
   parameters: {
      viewport: {
         defaultViewport: 'desktop',
      },
   },
} satisfies Meta;
export default meta;

type Story = StoryObj<typeof Container>;

export const Default: Story = {};

export const Tablet: Story = {
   parameters: {
      viewport: {
         defaultViewport: 'tablet',
      },
   },
};
export const Mobile: Story = {
   parameters: {
      viewport: {
         defaultViewport: 'mobile1',
      },
   },
};
