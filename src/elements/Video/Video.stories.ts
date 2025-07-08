import { Meta, StoryObj } from '@storybook/react-vite';
import { Video } from './Video';

const meta = {
    title: 'Elements/Video',
    component: Video,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof Video>;

export default meta;

type Story = StoryObj<typeof Video>;

const video = {
    url: 'https://videos.ctfassets.net/ehmycbmc25mu/1fqCODzYo0GjjHUG3WOXwa/86e28c6b7cccd55f5794b6f74c0c2878/corporation_teamwork.mp4',
    title: 'Teamwork',
    description: '',
    width: 300,
    height: 200,
}

export const AspectRatioAuto: Story = {
    args: {
        data: video,
        aspectRatio: 'auto',
    },
};

export const AspectRatioSquare: Story = {
    args: {
        data: video,
        aspectRatio: 'square',
    },
};

export const AspectRatio16x9: Story = {
    args: {
        data: video,
        aspectRatio: '16/9',
    },
};

export const AspectRatio4x3: Story = {
    args: {
        data: video,
        aspectRatio: '4/3',
    },
};

export const AspectRatio3x2: Story = {
    args: {
        data: video,
        aspectRatio: '3/2',
    },
};

export const VideoAutoplay: Story = {
    args: {
        data: video,
        videoAutoplay: true,
    },
};

export const ZoomInOverHover: Story = {
    args: {
        data: video,
        videoAutoplay: true,
        zoomInOnHover: true,
    },
};

