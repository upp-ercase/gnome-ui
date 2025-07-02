import type { Meta, StoryObj } from '@storybook/react-vite';
import { Author } from './Author';
import { ExpertType } from '../../types';

const meta = {
  title: 'Blocks/Author',
  component: Author,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Author>;

export default meta;

type Story = StoryObj<typeof Author>;

const mockProfilePicture = {
  id: '1',
  url: 'https://randomuser.me/api/portraits/men/32.jpg',
  title: 'John Doe',
  description: 'Profile picture of John Doe',
  width: 250,
  height: 250,
  contentType: 'image/jpeg',
};

const baseAuthor: ExpertType = {
  id: 'author-1',
  name: 'John Doe',
  profilePicture: mockProfilePicture,
  role: 'Senior Writer',
  description: 'John is a senior writer with 10 years of experience.',
  specialization: ['Technology', 'Science'],
  organization: 'Webbie Media',
  alignment: 'start',
  contentType: 'expert',
};

export const Default: Story = {
  args: {
    author: baseAuthor,
  },
};

export const NoProfilePicture: Story = {
  args: {
    author: {
      ...baseAuthor,
      profilePicture: null,
    },
  },
};

export const NoRole: Story = {
  args: {
    author: {
      ...baseAuthor,
      role: null,
    },
  },
};
