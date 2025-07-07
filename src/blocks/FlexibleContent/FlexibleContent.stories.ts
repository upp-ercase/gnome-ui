import type { Meta, StoryObj } from '@storybook/react-vite';
import { FlexibleContent } from './FlexibleContent';

const meta = {
  title: 'Blocks/FlexibleContent',
  component: FlexibleContent,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof FlexibleContent>;

export default meta;

type Story = StoryObj<typeof FlexibleContent>;

export const Horizontal: Story = {
  args: {
    data: {
      media: [
        {
          url: 'https://randomuser.me/api/portraits/men/34.jpg',
          title: 'Ian Klein',
          description: 'Profile picture of Ian Klein',
          width: 128,
          height: 128,
        },
      ],
      eyebrow: null,
      title: 'Digital Marketer',
      body: '__“You made it so simple. My new site is so much faster and easier to work with than my old site.”__',
      buttons: [],
      alignment: 'start',
      layout: 'horizontal',
    },
  },
};

export const Vertical: Story = {
  args: {
    data: {
      media: [
        {
          url: 'https://randomuser.me/api/portraits/men/34.jpg',
          title: 'Ian Klein',
          description: 'Profile picture of Ian Klein',
          width: 128,
          height: 128,
        },
      ],
      eyebrow: null,
      title: 'Digital Marketer',
      body: '__“You made it so simple. My new site is so much faster and easier to work with than my old site.”__',
      buttons: [],
      alignment: 'start',
      layout: 'vertical',
    },
  },
};

export const Center: Story = {
  args: {
    data: {
      media: [
        {
          url: 'https://images.unsplash.com/photo-1606474226448-4aa808468efc?q=80&w=200&h=200&auto=format&fit=crop',
          title: 'Hiking',
          description: '',
          width: 200,
          height: 200,
        },
      ],
      eyebrow: null,
      title: 'NovaJAM PRO',
      body: 'With lots of unique blocks, you can easily build a page without coding. Build your next landing page.',
      buttons: [],
      alignment: 'center',
      layout: 'vertical',
    },
  },
};

export const WithEyebrow: Story = {
  args: {
    data: {
      media: [
        {
          url: 'https://randomuser.me/api/portraits/men/34.jpg',
          title: 'Ian Klein',
          description: 'Profile picture of Ian Klein',
          width: 128,
          height: 128,
        },
      ],
      eyebrow: 'DEMO',
      title: 'Digital Marketer',
      body: '__“You made it so simple. My new site is so much faster and easier to work with than my old site.”__',
      buttons: [],
      alignment: 'start',
      layout: 'horizontal',
    },
  },
};

export const WithButton: Story = {
  args: {
    data: {
      media: [
        {
          url: 'https://randomuser.me/api/portraits/men/34.jpg',
          title: 'Ian Klein',
          description: 'Profile picture of Ian Klein',
          width: 128,
          height: 128,
        },
      ],
      eyebrow: null,
      title: 'Digital Marketer',
      body: '__“You made it so simple. My new site is so much faster and easier to work with than my old site.”__',
      buttons: [
        {
          label: 'Contact Us',
          href: '/contact',
          withArrow: true,
          variant: 'link',
        },
      ],
      alignment: 'start',
      layout: 'horizontal',
    },
  },
};
