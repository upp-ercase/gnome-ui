import type { Meta, StoryObj } from '@storybook/react-vite';
import { Expert } from './Expert';
import { ExpertType } from '../../types';

const meta = {
  title: 'Blocks/Expert',
  component: Expert,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Expert>;

export default meta;

type Story = StoryObj<typeof Expert>;


const mockProfilePicture = {
  id: '1',
  url: 'https://randomuser.me/api/portraits/men/32.jpg',
  title: 'John Doe',
  description: 'Profile picture of John Doe',
  width: 250,
  height: 250,
  contentType: 'image/jpeg',
};

const baseExpert: ExpertType = {
  id: 'author-1',
  name: 'John Doe',
  profilePicture: mockProfilePicture,
  role: 'Senior Writer',
  description: 'John is a senior writer with 10 years of experience.',
  specialization: ['Technology', 'Science'],
  organization: 'Webbie Media',
  alignment: 'center',
  contentType: 'expert',
};

export const Default: Story = {
  args: {
    data: baseExpert
  }
}