import type { Meta, StoryObj } from '@storybook/react-vite';
import { QnA } from './QnA';

const meta = {
  title: 'Blocks/QnA',
  component: QnA,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof QnA>;

export default meta;

type Story = StoryObj<typeof QnA>;

export const isCollapsed: Story = {
  args: {
    data: {
      title: 'What is NovaJAM Pro and Why do I need it?',
      body: 'NovaJAM Pro is a modular, CMS-integrated web template and UI component library built to accelerate modern web development. It’s ideal for developers, freelancers, and content creators who want a professional, scalable foundation for marketing sites, landing pages, and more—without rebuilding everything from scratch.',
      isCollapsed: true,
    },
  },
};

export const IsNotCollapsed: Story = {
  args: {
    data: {
      title: 'Do I get free update?',
      body: 'Yes, purchasing NovaJAM Pro includes free updates, ensuring you get the latest features, improvements, and compatibility enhancements.',
      isCollapsed: false,
    },
  },
};
