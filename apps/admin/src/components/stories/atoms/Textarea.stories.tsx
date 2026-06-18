import type { Meta, StoryObj } from '@storybook/react';
import { Textarea } from '@/components/atoms';
import { FaRegMessage } from 'react-icons/fa6';

const meta = {
   title: 'Components/Atom/Textarea',
   component: Textarea,
   tags: ['autodocs'],
   args: {
      rows: 4,
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
         description: 'DaisyUI-style textarea color variant',
      },
      label: {
         control: 'text',
         description:
            'Optional label text displayed above or beside the textarea',
      },
      icon: {
         control: false,
         description:
            'React node (e.g., icon) to display inside a labeled container',
      },
      rows: {
         control: 'number',
         description: 'Number of visible text lines',
         defaultValue: 4,
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
      label: 'Your message',
      color: 'textarea-accent',
      placeholder: 'Type your feedback here...',
   },
};

export const With7Rows: Story = {
   args: {
      rows: 7,
   },
};
