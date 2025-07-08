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
                id:"home",
                label: "Home",
                href: "/",
                openNewTab: false,
            },
            {
                id: "contact",
                label: "Contact",
                href: "/Contact",
                openNewTab: false,
            }
        ],
        layout: "standard"
    }
}