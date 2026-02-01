import type { Meta, StoryObj } from '@storybook/react';
import { Input } from '@/components/atoms';
import { FaRegMessage } from 'react-icons/fa6';

const meta = {
   title: 'Components/Atom/Input',
   component: Input,
   tags: ['autodocs'],
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
         description: 'DaisyUI-style input color variant',
      },
      type: {
         control: 'select',
         options: [
            'text',
            'email',
            'password',
            'number',
            'date',
            'time',
            'search',
            'url',
            'tel',
            'file',
            'color',
            'range',
            'month',
            'week',
            'datetime-local',
         ],
         description: 'HTML input type',
      },
      label: {
         control: 'text',
         description: 'Optional label text (renders above input)',
      },
      icon: {
         control: false, // Cannot be controlled via UI; shown only in specific stories
         description:
            'React node to display inside a labeled container (e.g., an icon)',
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
