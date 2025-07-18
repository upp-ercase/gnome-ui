import type { Meta, StoryObj } from '@storybook/react-vite';
import { Testimonial } from './Testimonial';
import { TestimonialType } from '../../types';

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

const mockTestimonial = {
  content:
    '“You made it so simple. My new site is so much faster and easier to work with than my old site.”',
  authorImage: {
    id: '1',
    url: 'https://randomuser.me/api/portraits/men/34.jpg',
    title: 'Ian Klein',
    description: 'Profile picture of Ian Klein',
    width: 90,
    height: 90,
    contentType: 'image/jpeg',
  },
  authorName: 'Ian Klein',
  authorTitle: 'Digital Marketer',
  rating: null,
  alignment: 'start',
  layout: 'horizontal',
  fontSize: 'base',
} as TestimonialType;

export const Horizontal: Story = {
  args: {
    data: mockTestimonial,
  },
};

export const Vertical: Story = {
  args: {
    data: {
      ...mockTestimonial,
      layout: 'vertical',
    },
  },
};

export const Center: Story = {
  args: {
    data: {
      ...mockTestimonial,
      layout: 'vertical',
      alignment: 'center',
    },
  },
};

export const WithRating: Story = {
  args: {
    data: {
      ...mockTestimonial,
      rating: 5,
    },
  },
};

export const WithHeading: Story = {
  args: {
    data: {
      ...mockTestimonial,
      content:
        '### __Simply the best!__ \n\nYou made it so simple. My new site is so much faster and easier to work with than my old site.',
    },
  },
};

export const FontSizeLarge: Story = {
  args: {
    data: {
      ...mockTestimonial,
      fontSize: 'lg',
      authorImage: {
        id: '1',
        url: 'https://randomuser.me/api/portraits/men/34.jpg',
        title: 'Ian Klein',
        description: 'Profile picture of Ian Klein',
        width: 130,
        height: 130,
        contentType: 'image/jpeg',
      },
    },
  },
};

export const FontSizeXL: Story = {
  args: {
    data: {
      ...mockTestimonial,
      fontSize: 'xl',
      authorImage: {
        id: '1',
        url: 'https://randomuser.me/api/portraits/men/34.jpg',
        title: 'Ian Klein',
        description: 'Profile picture of Ian Klein',
        width: 130,
        height: 130,
        contentType: 'image/jpeg',
      },
    },
  },
};

export const FontBold: Story = {
  args: {
    data: {
      ...mockTestimonial,
      fontSize: 'xl',
      authorImage: {
        id: '1',
        url: 'https://randomuser.me/api/portraits/men/34.jpg',
        title: 'Ian Klein',
        description: 'Profile picture of Ian Klein',
        width: 130,
        height: 130,
        contentType: 'image/jpeg',
      },
      content:
        '__“You made it so simple. My new site is so much faster and easier to work with than my old site.”__',
    },
  },
};
