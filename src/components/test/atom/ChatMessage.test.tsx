import React from 'react';
import { render, screen } from '@testing-library/react';
import { ChatMessage } from '@/components/atoms';

describe('ChatMessage component', () => {
   it('should render the Default Chat Message correctly', () => {
      render(<ChatMessage color="chat-bubble-primary">test</ChatMessage>);
      const chat = screen.getByTestId('chat');
      const chatBubble = screen.getByTestId('chat-bubble');

      expect(screen.getByText('test')).toBeInTheDocument();
      expect(chat).toHaveClass('chat');

      expect(chat).toHaveClass('chat-start');
      expect(chatBubble).toHaveClass('chat-bubble');
      expect(chatBubble).toHaveClass('chat-bubble-primary');
   });

   it('should render chat in another direction', () => {
      render(
         <ChatMessage color="chat-bubble-primary" chatDirection="chat-end">
            test
         </ChatMessage>
      );

      const chat = screen.getByTestId('chat');

      expect(chat).toHaveClass('chat-end');
      expect(chat).not.toHaveClass('chat-start');
   });
});
