import type { Meta, StoryObj } from '@storybook/react';
import { Container } from '@/components/atoms';

const meta = {
   title: 'Components/Atom/Container',
   component: Container,
   tags: ['autodocs'],
   args: {
      children: <div className="bg-amber-700 w-full h-screen">Hello World</div>,
   },
   argTypes: {
      className: {
         control: 'text',
         description: 'Additional CSS classes to apply to the container.',
      },
   },
} satisfies Meta;
export default meta;

type Story = StoryObj<typeof Container>;

export const Default: Story = {
   args: {
      children: (
         <div className="bg-gray-100 p-6 text-center">
            Default responsive container with centered content.
         </div>
      ),
   },
};

export const WithCustomClass: Story = {
   args: {
      children: (
         <div className="bg-blue-100 p-6 text-center">
            Container with custom background via className.
         </div>
      ),
      className: 'my-custom-container',
   },
};
