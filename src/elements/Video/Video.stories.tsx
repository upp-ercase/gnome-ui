import { Meta, StoryObj } from '@storybook/react-vite';
import { Video } from './Video';

const meta = {
  title: 'Elements/Video',
  component: Video,
  decorators: [
    (Story) => (
      <div className="max-w-xl">
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Video>;

export default meta;

type Story = StoryObj<typeof Video>;

const mockVideo = {
  url: 'https://videos.ctfassets.net/ehmycbmc25mu/1fqCODzYo0GjjHUG3WOXwa/86e28c6b7cccd55f5794b6f74c0c2878/corporation_teamwork.mp4',
  title: 'Teamwork',
  description: '',
  width: 300,
  height: 200,
};

export const AspectRatioAuto: Story = {
  args: {
    data: mockVideo,
    aspectRatio: 'auto',
  },
};

export const AspectRatioSquare: Story = {
  args: {
    data: mockVideo,
    aspectRatio: 'square',
  },
};

export const AspectRatio16x9: Story = {
  args: {
    data: mockVideo,
    aspectRatio: '16/9',
  },
};

export const AspectRatio4x3: Story = {
  args: {
    data: mockVideo,
    aspectRatio: '4/3',
  },
};

export const AspectRatio3x2: Story = {
  args: {
    data: mockVideo,
    aspectRatio: '3/2',
  },
};

export const VideoAutoplay: Story = {
  args: {
    data: mockVideo,
    videoAutoplay: true,
  },
};

export const ZoomInOverHover: Story = {
  args: {
    data: mockVideo,
    videoAutoplay: true,
    zoomInOnHover: true,
  },
};
