import type { Meta, StoryObj } from '@storybook/react';
import SkipToMain from '@/components/atoms/SkipToMain';

const meta = {
   title: 'Components/Atom/SkipToMain',
   component: SkipToMain,
   parameters: {
      docs: {
         description: {
            component:
               'A "Skip to main content" link that improves keyboard navigation accessibility. It is hidden off-screen by default and becomes visible when focused, allowing users to bypass repetitive navigation elements.',
         },
      },
   },
   argTypes: {},
} satisfies Meta<typeof SkipToMain>;

export default meta;

type Story = StoryObj<typeof SkipToMain>;

/**
 * Default story showing the skip link in its normal state (hidden off-screen).
 * To see it appear, click the canvas or press Tab while focused on the preview.
 */
export const Default: Story = {};

/**
 * This story demonstrates the focused state explicitly.
 * In real usage, this appears automatically when the user tabs to the link.
 */
export const Focused: Story = {
   play: async ({ canvasElement }) => {
      const canvas = canvasElement;
      const link = canvas.querySelector('a');
      if (link) {
         // Simulate focus to show the visible state
         (link as HTMLElement).focus();
      }
   },
   parameters: {
      docs: {
         description: {
            story: 'Shows the skip link when it receives keyboard focus. This is how keyboard-only users will see it before pressing Enter to jump to #main.',
         },
      },
   },
};
