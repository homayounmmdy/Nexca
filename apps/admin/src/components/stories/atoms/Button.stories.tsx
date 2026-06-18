import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@/components/atoms';
import { IoArrowUpCircleSharp } from 'react-icons/io5';

const meta = {
   title: 'Components/Atom/Button',
   component: Button,
   tags: ['autodocs'],
   args: {
      children: 'Button',
      color: 'btn-primary',
      removeDefaultStyle: false,
      disabled: false,
   },
   argTypes: {
      color: {
         control: 'select',
         options: [
            'btn-primary',
            'btn-secondary',
            'btn-neutral',
            'btn-accent',
            'btn-info',
            'btn-success',
            'btn-info',
            'btn-warning',
            'btn-error',
            'btn-accent',
            'btn-ghost',
            'btn-link',
            'btn-null',
         ],
         description:
            'Predefined DaisyUI button style. Use `btn-null` to disable color styling.',
      },
      removeDefaultStyle: {
         control: 'boolean',
         description: 'If true, skips the default `btn` class entirely.',
         options: [true, false],
      },
      disabled: {
         control: 'boolean',
      },
      onClick: { action: 'clicked' },
   },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
   args: {
      children: 'Click me',
      color: 'btn-primary',
   },
};
export const Secondary: Story = {
   args: {
      color: 'btn-secondary',
   },
};

export const CustomStyled: Story = {
   args: {
      children: 'Custom Button',
      removeDefaultStyle: true,
      className:
         'px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600',
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

export const Disable: Story = {
   args: {
      disabled: true,
   },
};

export const NullColor: Story = {
   args: {
      children: 'No Color',
      color: 'btn-null',
      className: 'text-gray-800',
   },
};

export const SubmitType: Story = {
   args: {
      children: 'Submit',
      type: 'submit',
      color: 'btn-success',
   },
};
