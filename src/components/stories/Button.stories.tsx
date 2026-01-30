import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@/components/atoms';
import { IoArrowUpCircleSharp } from 'react-icons/io5';

const meta = {
   title: 'Components/Atom/Button',
   component: Button,
   args: {
      children: 'Button',
      color: 'btn-primary',
      removeDefaultStyle: false,
   },
   argTypes: {
      removeDefaultStyle: {
         control: 'inline-radio',
         options: [true, false],
      },
      color: {
         control: 'select',
         options: [
            'btn-primary',
            'btn-secondary',
            'btn-neutral',
            'btn-success',
            'btn-info',
            'btn-warning',
            'btn-error',
            'btn-accent',
            'btn-ghost',
            'btn-link',
            'btn-null',
         ],
      },
   },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {};

export const Secondary: Story = {
   args: {
      color: 'btn-secondary',
   },
};

export const CustomButton: Story = {
   args: {
      color: 'btn-null',
      removeDefaultStyle: true,
      className: 'bg-amber-700 text-black font-bold p-5',
   },
};

export const Link: Story = {
   args: {
      color: 'btn-link',
   },
};

export const WithIcon: Story = {
   args: {
      color: 'btn-success',
      children: <IoArrowUpCircleSharp size={16} />,
   },
};
