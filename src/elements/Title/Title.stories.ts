import { Meta, StoryObj } from '@storybook/react-vite';
import { Title } from './Title';

const meta = {
  title: 'Elements/Title',
  component: Title,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Title>;

export default meta;

type Story = StoryObj<typeof Title>;

export const Small: Story = {
  args: {
    content: '# __Design, build and scale with NovaJAM Pro__',
    titleFontSize: 'sm',
  },
};

export const Base: Story = {
  args: {
    content: '# __Design, build and scale with NovaJAM Pro__',
    titleFontSize: 'base',
  },
};

export const Large: Story = {
  args: {
    content: '# __Design, build and scale with NovaJAM Pro__',
    titleFontSize: 'lg',
  },
};

export const XL: Story = {
  args: {
    content: '# __Design, build and scale with NovaJAM Pro__',
    titleFontSize: 'xl',
  },
};

export const XXL: Story = {
  args: {
    content: '# __Design, build and scale with NovaJAM Pro__',
    titleFontSize: '2xl',
  },
};
