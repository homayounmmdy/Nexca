import type { Meta, StoryObj } from '@storybook/react';
import { ChatMessage } from '@/components/atoms';

const meta: Meta<typeof ChatMessage> = {
   title: 'Components/Atom/ChatMessage',
   component: ChatMessage,
   tags: ['autodocs'],
   argTypes: {
      color: {
         control: 'select',
         options: [
            null,
            'chat-bubble-primary',
            'chat-bubble-secondary',
            'chat-bubble-accent',
            'chat-bubble-info',
            'chat-bubble-success',
            'chat-bubble-warning',
            'chat-bubble-error',
            'chat-bubble-ghost',
         ],
         description:
            'Color variant for the chat bubble. Uses DaisyUI-style naming.',
      },
      chatDirection: {
         control: 'radio',
         options: ['chat-start', 'chat-end'],
         description:
            '`chat-start` = left (incoming), `chat-end` = right (outgoing)',
      },
   },
};

export default meta;

type Story = StoryObj<typeof ChatMessage>;

export const Incoming: Story = {
   args: {
      children: 'Hello! How are you?',
      color: 'chat-bubble-primary',
      chatDirection: 'chat-start',
   },
};

export const Secondary: Story = {
   args: {
      children: 'Hello! How are you?',
      color: 'chat-bubble-secondary',
   },
};

export const Outgoing: Story = {
   args: {
      children: 'I’m doing great, thanks!',
      color: 'chat-bubble-success',
      chatDirection: 'chat-end',
   },
};

export const WithoutColor: Story = {
   args: {
      children: 'Plain message',
      color: null,
      chatDirection: 'chat-start',
   },
};
