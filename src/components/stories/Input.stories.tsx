import type { Meta, StoryObj } from '@storybook/react';
import { Input } from '@/components/atoms';
import { FaRegMessage } from 'react-icons/fa6';

const meta = {
   title: 'Components/Atom/Input',
   component: Input,
   args: {
      placeholder: 'Enter your value here',
      type: 'text',
   },
   argTypes: {
      color: {
         control: 'select',
         options: [
            'input-primary',
            'input-secondary',
            'input-neutral',
            'input-accent',
            'input-info',
            'input-success',
            'input-warning',
            'input-error',
            'input-ghost',
            'input-link',
         ],
      },
      type: {
         control: 'select',
         options: [
            'text',
            'number',
            'password',
            'radio',
            'color',
            'email',
            'image',
            'month',
            'range',
            'search',
            'week',
            'url',
            'time',
            'file',
            'datetime-local',
            'date',
         ],
      },
   },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {};

export const Secondary: Story = {
   args: {
      color: 'input-secondary',
   },
};

export const WithIcon: Story = {
   args: {
      color: 'input-neutral',
      icon: <FaRegMessage />,
      placeholder: 'Enter your message',
   },
};

export const WithLabel: Story = {
   args: {
      label: 'Enter Your full name',
      color: 'input-accent',
      placeholder: 'Enter your name here',
   },
};

export const PasswordType: Story = {
   args: {
      type: 'password',
      placeholder: 'Enter your password here',
   },
};

export const DateType: Story = {
   args: {
      type: 'date',
   },
};
