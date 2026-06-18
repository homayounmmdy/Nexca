import type { Meta, StoryObj } from '@storybook/react';
import { GitHubBtn } from '@/components/molecules';

const meta = {
   title: 'Components/Molecules/GitHubBtn',
   component: GitHubBtn,
   tags: ['autodocs'],
   parameters: {
      layout: 'centered',
   },
} satisfies Meta<typeof GitHubBtn>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const CustomRepository: Story = {
   args: {
      link: 'https://github.com/your-org/custom-repo',
   },
};

export const WithExtraLinkClasses: Story = {
   args: {
      aStyle: 'border-2 border-dashed border-purple-500 rounded-lg p-1',
   },
};
