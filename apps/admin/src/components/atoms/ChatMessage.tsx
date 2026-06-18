import React from 'react';
import { AllowedColors } from '@/types/AllowedOptions';

/**
 * A reusable chat message component styled for chat interfaces.
 *
 * This component renders a chat bubble within a chat container, supporting
 * directional layout (sent vs. received messages) and customizable color themes
 * based on the design system's allowed color palette.
 *
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - The content to display inside the chat bubble (e.g., text, JSX).
 * @param {`chat-bubble-${AllowedColors}` | null} [props.color=null] - Optional color variant for the chat bubble.
 *   Must be one of the predefined tailwind-style color classes (e.g., 'chat-bubble-primary', 'chat-bubble-success').
 *   If `null` or omitted, no additional color class is applied.
 * @param {'chat-start' | 'chat-end'} [props.chatDirection='chat-start'] - Determines message alignment:
 *   - `'chat-start'`: Typically for received/incoming messages (left-aligned).
 *   - `'chat-end'`: Typically for sent/outgoing messages (right-aligned).
 *
 * @example
 * <ChatMessage chatDirection="chat-end" color="chat-bubble-primary">
 *   Hello, how are you?
 * </ChatMessage>
 *
 * @returns {JSX.Element} The rendered chat message component.
 */

interface Props {
   children: React.ReactNode;
   color?: `chat-bubble-${AllowedColors}` | null;
   chatDirection?: 'chat-start' | 'chat-end';
}

function ChatMessage({ children, color, chatDirection = 'chat-start' }: Props) {
   return (
      <div className={`chat ${chatDirection}`} data-testid="chat">
         <div className={`chat-bubble ${color}`} data-testid="chat-bubble">
            {children}
         </div>
      </div>
   );
}

export default ChatMessage;
