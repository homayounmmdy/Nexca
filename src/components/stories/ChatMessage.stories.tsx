import type { Meta, StoryObj } from '@storybook/react';
import { ChatMessage } from '@/components/atoms';

const meta = {
   title: 'Components/Atom/ChatMessage',
   component: ChatMessage,
   args: {
      children: 'Hello World',
      chatDirection: 'chat-start',
   },
   argTypes: {
      chatDirection: {
         control: 'inline-radio',
         options: ['chat-start', 'chat-end'],
      },
      color: {
         control: 'select',
         options: [
            'chat-bubble-primary',
            'chat-bubble-secondary',
            'chat-bubble-neutral',
            'chat-bubble-accent',
            'chat-bubble-info',
            'chat-bubble-success',
            'chat-bubble-warning',
            'chat-bubble-error',
            'chat-bubble-ghost',
            'chat-bubble-link',
         ],
      },
   },
} satisfies Meta;
export default meta;

type Story = StoryObj<typeof ChatMessage>;

export const Default = {};

export const Primary = {
   args: {
      color: 'chat-bubble-primary',
   },
};

export const Secondary = {
   args: {
      color: 'chat-bubble-secondary',
   },
};

export const ChatRight = {
   args: {
      color: 'chat-bubble-neutral',
      chatDirection: 'chat-end',
   },
};
