import { Meta, StoryObj } from '@storybook/react-vite';
import { NavMenu } from './NavMenu';

const meta = {
  title: 'Elements/NavMenu',
  component: NavMenu,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof NavMenu>;

export default meta;

type Story = StoryObj<typeof NavMenu>;

export const Default: Story = {
  args: {
    menuItems: [
      {
        id: 'home',
        label: 'Home',
        href: '/',
        openNewTab: false,
        contentType: 'link',
      },
      {
        id: 'contact',
        label: 'Contact',
        href: 'https://getnovajam.com/contact',
        openNewTab: true,
        contentType: 'link',
      },
      {
        id: 'github',
        label: 'Github',
        href: 'https://github.com/upp-ercase/gnome-ui',
        openNewTab: true,
        contentType: 'link',
      },
    ],
    layout: 'standard',
  },
};
