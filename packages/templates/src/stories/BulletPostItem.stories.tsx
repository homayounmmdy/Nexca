import type { Meta, StoryObj } from "@storybook/react";
import BulletPostItem from "../components/BulletPostItem";
import "../styles.css";

const meta = {
  title: "BulletPostItem",
  component: BulletPostItem,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof BulletPostItem>;

export default meta;

type Story = StoryObj<typeof meta>;

const makePost = (
  overrides: Partial<React.ComponentProps<typeof BulletPostItem>["post"]> = {}
): React.ComponentProps<typeof BulletPostItem>["post"] => ({
  title: "Untitled",
  imgurl: "https://via.placeholder.com/150",
  description: "A short description of the post.",
  templates: "default",
  postType: "article",
  services: "general",
  section: "blog",
  _id: "1",
  body: "",
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  __v: 0,
  field: undefined,
  categories: [],
  masterEditor: false,
  source: undefined,
  author: undefined,
  ...overrides,
});

export const Default: Story = {
  args: {
    post: makePost({
      _id: "1",
      title: "How to Build Accessible React Components",
    }),
  },
};

export const LongTitle: Story = {
  args: {
    post: makePost({
      _id: "2",
      title:
        "A Complete Guide to Building Accessible and Reusable React Components with TypeScript",
    }),
  },
};

export const ShortTitle: Story = {
  args: {
    post: makePost({
      _id: "3",
      title: "React Accessibility",
    }),
  },
};