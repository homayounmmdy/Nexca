import type { Meta, StoryObj } from '@storybook/react';
import { Textarea } from '@/components/atoms';
import { FaRegMessage } from 'react-icons/fa6';

const meta = {
   title: 'Components/Atom/Textarea',
   component: Textarea,
   args: {
      placeholder: 'Enter your value here',
   },
   argTypes: {
      color: {
         control: 'select',
         options: [
            'textarea-primary',
            'textarea-secondary',
            'textarea-neutral',
            'textarea-accent',
            'textarea-info',
            'textarea-success',
            'textarea-warning',
            'textarea-error',
            'textarea-ghost',
            'textarea-link',
         ],
      },
   },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof Textarea>;

export const Default: Story = {};

export const Secondary: Story = {
   args: {
      color: 'textarea-secondary',
   },
};

export const WithIcon: Story = {
   args: {
      color: 'textarea-neutral',
      icon: <FaRegMessage />,
      placeholder: 'Enter your message',
   },
};

export const WithLabel: Story = {
   args: {
      label: 'Enter Your full name',
      color: 'textarea-accent',
      placeholder: 'Enter your name here',
   },
};
