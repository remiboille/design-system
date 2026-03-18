import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "ghost"],
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: { label: "Button", variant: "primary", size: "md" },
};

export const Secondary: Story = {
  args: { label: "Button", variant: "secondary", size: "md" },
};

export const Ghost: Story = {
  args: { label: "Button", variant: "ghost", size: "md" },
};

export const Small: Story = {
  args: { label: "Button", variant: "primary", size: "sm" },
};

export const Large: Story = {
  args: { label: "Button", variant: "primary", size: "lg" },
};

export const Disabled: Story = {
  args: { label: "Button", variant: "primary", disabled: true },
};
