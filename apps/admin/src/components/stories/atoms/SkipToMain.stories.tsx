import type { Meta, StoryObj } from '@storybook/react';
import SkipToMain from '@/components/atoms/SkipToMain';

const meta = {
   title: 'Components/Atom/SkipToMain',
   component: SkipToMain,
   tags: ['autodocs'],
   parameters: {
      docs: {
         description: {
            component:
               'A "Skip to main content" link that improves keyboard navigation accessibility. It is hidden off-screen by default and becomes visible when focused, allowing users to bypass repetitive navigation elements.',
         },
      },
   },
} satisfies Meta<typeof SkipToMain>;

export default meta;

type Story = StoryObj<typeof SkipToMain>;

export const Default: Story = {};

export const Focused: Story = {
   play: async ({ canvasElement }) => {
      const link = canvasElement.querySelector('a');
      if (link) {
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
