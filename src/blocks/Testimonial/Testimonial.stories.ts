import type { Meta, StoryObj } from '@storybook/react-vite';
import { Testimonial } from './Testimonial';

const meta = {
  title: 'Blocks/Testimonial',
  component: Testimonial,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Testimonial>;

export default meta;

type Story = StoryObj<typeof Testimonial>;

export const Horizontal: Story = {
  args: {
    data: {
      content:
        '__“You made it so simple. My new site is so much faster and easier to work with than my old site.”__',
      authorImage: {
        id: '1',
        url: 'https://randomuser.me/api/portraits/men/34.jpg',
        title: 'Ian Klein',
        description: 'Profile picture of Ian Klein',
        width: 128,
        height: 128,
        contentType: 'image/jpeg',
      },
      authorName: 'Ian Klein',
      authorTitle: 'Digital Marketer',
      rating: 5,
      alignment: 'start',
      layout: 'horizontal',
      fontSize: 'base',
    },
  },
};

export const Vertical: Story = {
  args: {
    data: {
      content:
        '__“You made it so simple. My new site is so much faster and easier to work with than my old site.”__',
      authorImage: {
        id: '1',
        url: 'https://randomuser.me/api/portraits/men/34.jpg',
        title: 'Ian Klein',
        description: 'Profile picture of Ian Klein',
        width: 128,
        height: 128,
        contentType: 'image/jpeg',
      },
      authorName: 'Ian Klein',
      authorTitle: 'Digital Marketer',
      rating: 5,
      alignment: 'start',
      layout: 'vertical',
      fontSize: 'base',
    },
  },
};

export const Center: Story = {
  args: {
    data: {
      content:
        '__“You made it so simple. My new site is so much faster and easier to work with than my old site.”__',
      authorImage: {
        id: '1',
        url: 'https://randomuser.me/api/portraits/men/34.jpg',
        title: 'Ian Klein',
        description: 'Profile picture of Ian Klein',
        width: 128,
        height: 128,
        contentType: 'image/jpeg',
      },
      authorName: 'Ian Klein',
      authorTitle: 'Digital Marketer',
      rating: 5,
      alignment: 'center',
      layout: 'vertical',
      fontSize: 'base',
    },
  },
};

export const NoRating: Story = {
  args: {
    data: {
      content:
        '__“You made it so simple. My new site is so much faster and easier to work with than my old site.”__',
      authorImage: {
        id: '1',
        url: 'https://randomuser.me/api/portraits/men/34.jpg',
        title: 'Ian Klein',
        description: 'Profile picture of Ian Klein',
        width: 128,
        height: 128,
        contentType: 'image/jpeg',
      },
      authorName: 'Ian Klein',
      authorTitle: 'Digital Marketer',
      alignment: 'start',
      layout: 'horizontal',
      fontSize: 'base',
    },
  },
};
