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

const mockExpert: ExpertType = {
  name: 'John Doe',
  profilePicture: {
    url: 'https://images.unsplash.com/flagged/photo-1595514191830-3e96a518989b?q=70&w=250&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'John Doe',
    description: 'Profile picture of John Doe',
    width: 250,
    height: 250,
    contentType: 'image/jpeg',
  },
  role: 'Senior Writer',
  description: 'John is a senior writer with 10 years of experience.',
  specialization: ['Technology', 'Science'],
  organization: 'Webbie Media',
  alignment: 'start',
  contentType: 'expert',
};

export const Start: Story = {
  args: {
    data: mockExpert,
  },
};

export const Center: Story = {
  args: {
    data: {
      ...mockExpert,
      alignment: 'center',
    },
  },
};

export const End: Story = {
  args: {
    data: {
      ...mockExpert,
      alignment: 'end',
    },
  },
};
