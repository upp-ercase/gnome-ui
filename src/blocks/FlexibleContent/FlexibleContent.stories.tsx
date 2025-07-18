import type { Meta, StoryObj } from '@storybook/react-vite';
import { FlexibleContent } from './FlexibleContent';
import { FlexibleContentType } from '../../types';

const meta = {
  title: 'Blocks/FlexibleContent',
  component: FlexibleContent,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className="max-w-md">
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof FlexibleContent>;

export default meta;

type Story = StoryObj<typeof FlexibleContent>;

const mockContent = {
  eyebrow: '',
  title: '### __Web Development__',
  body: 'With lots of unique blocks, you can easily build a page without coding. Build your next landing page.',
  media: [
    {
      url: 'https://images.ctfassets.net/ehmycbmc25mu/5hJVhM3CYW1UprUD25NyZx/ff68455872a8a6d2f89f2a2e17679203/Programming-rafiki.svg',
      title: '',
      width: 146,
      height: 135,
    },
  ],
  buttons: [],
  alignment: 'start',
  layout: 'vertical',
  contentType: 'flexiblecontent',
} as FlexibleContentType;

export const Default: Story = {
  args: {
    data: mockContent,
  },
};

export const Horizontal: Story = {
  args: {
    data: {
      ...mockContent,
      layout: 'horizontal',
    },
  },
};

export const Center: Story = {
  args: {
    data: {
      ...mockContent,
      alignment: 'center',
    },
  },
};

export const WithEyebrow: Story = {
  args: {
    data: {
      ...mockContent,
      eyebrow: 'Eyebrow',
    },
  },
};

export const WithButton: Story = {
  args: {
    data: {
      ...mockContent,
      buttons: [
        {
          label: 'Contact Us',
          href: '/contact',
          withArrow: true,
          variant: 'outline',
        },
      ],
    },
  },
};

export const WithImageCarousel: Story = {
  args: {
    data: {
      ...mockContent,
      buttons: [
        {
          label: 'Contact Us',
          href: '/contact',
          withArrow: true,
          variant: 'link',
        },
      ],
      media: [
        {
          url: 'https://images.unsplash.com/photo-1606474226448-4aa808468efc?q=100&w=300&h=200&auto=format&fit=crop',
          title: 'Hiking',
          description: '',
          width: 300,
          height: 200,
          contentType: 'image/jpeg',
        },
        {
          url: 'https://images.unsplash.com/photo-1606474226448-4aa808468efc?q=100&w=300&h=200&auto=format&fit=crop',
          title: 'Hiking',
          description: '',
          width: 300,
          height: 200,
          contentType: 'image/jpeg',
        },
        {
          url: 'https://images.unsplash.com/photo-1606474226448-4aa808468efc?q=100&w=300&h=200&auto=format&fit=crop',
          title: 'Hiking',
          description: '',
          width: 300,
          height: 200,
          contentType: 'image/jpeg',
        },
      ],
    },
  },
};

export const WithVideo: Story = {
  args: {
    data: {
      ...mockContent,
      buttons: [
        {
          label: 'Contact Us',
          href: '/contact',
          withArrow: true,
          variant: 'link',
        },
      ],
      media: [
        {
          url: 'https://videos.ctfassets.net/ehmycbmc25mu/1fqCODzYo0GjjHUG3WOXwa/86e28c6b7cccd55f5794b6f74c0c2878/corporation_teamwork.mp4',
          title: 'Teamwork',
          description: '',
          width: 300,
          height: 200,
          contentType: 'video/mp4',
        },
      ],
    },
  },
};

export const WithoutMedia: Story = {
  args: {
    data: {
      ...mockContent,
      buttons: [
        {
          label: 'Contact Us',
          href: '/contact',
          withArrow: true,
          variant: 'neutral',
        },
      ],
      media: [],
    },
  },
};
