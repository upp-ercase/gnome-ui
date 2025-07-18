import { Meta, StoryObj } from '@storybook/react-vite';
import { MasonryList } from './MasonryList';
import { BlockType } from '../../types';

const meta = {
  title: 'Elements/MasonryList',
  component: MasonryList,
  decorators: [
    (Story) => (
      <div className="container">
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
  parameters: {
    layout: 'full',
  },
} satisfies Meta<typeof MasonryList>;

export default meta;

type Story = StoryObj<typeof MasonryList>;

const mockContentItems: BlockType[] = [
  {
    eyebrow: 'Graphic Design',
    title: '### __Aura Branding Design__',
    body: 'With lots of unique blocks, you can easily build a page without coding. Build your next landing page.',
    media: [
      {
        url: 'https://images.ctfassets.net/ehmycbmc25mu/IMlVNuSxJCc5YEgbt0atF/c77a22a0b0142218d83df3a14f0fe501/aura_branding_design.webp',
        title: '',
        width: 500,
        height: 540,
      },
    ],
    buttons: [],
    alignment: 'start',
    layout: 'vertical',
    contentType: 'flexiblecontent',
  },
  {
    eyebrow: 'Graphic Design',
    title: '### __AB.S Snack Packaging__',
    body: 'With lots of unique blocks, you can easily build a page without coding. Build your next landing page.',
    media: [
      {
        url: 'https://images.ctfassets.net/ehmycbmc25mu/48teXH9EVGDDGpAQ1WAZ2z/c214bb12ec107af76f5f2d4277f2c02e/abs_snack_packaging.webp',
        title: '',
        width: 500,
        height: 342,
      },
    ],
    buttons: [],
    alignment: 'start',
    layout: 'vertical',
    contentType: 'flexiblecontent',
  },
  {
    eyebrow: 'Web Development',
    title: '### __Gradient Website Development__',
    body: 'With lots of unique blocks, you can easily build a page without coding. Build your next landing page.',
    media: [
      {
        url: 'https://images.ctfassets.net/ehmycbmc25mu/4crqftRooXebH2fWGXDAXM/f199950dad1c255bb7edd8e2420f89cb/gradient_website_development.webp',
        title: '',
        width: 500,
        height: 346,
      },
    ],
    buttons: [],
    alignment: 'start',
    layout: 'vertical',
    contentType: 'flexiblecontent',
  },
  {
    eyebrow: 'Content Writing',
    title: '### __Magazine Content Writing__',
    body: 'With lots of unique blocks, you can easily build a page without coding. Build your next landing page.',
    media: [
      {
        url: 'https://images.ctfassets.net/ehmycbmc25mu/HQaR7mdLoCh1fA71aoWfU/e805d57e563373c3bdaa97dfaecadc78/magazine_content_writing.webp',
        title: '',
        width: 500,
        height: 540,
      },
    ],
    buttons: [],
    alignment: 'start',
    layout: 'vertical',
    contentType: 'flexiblecontent',
  },
];

export const OneColumn: Story = {
  args: {
    contentItems: mockContentItems,
    columns: 1,
    gap: 'base',
  },
};

export const TwoColumns: Story = {
  args: {
    contentItems: mockContentItems,
    columns: 2,
    gap: 'base',
  },
};

export const ThreeColumns: Story = {
  args: {
    contentItems: mockContentItems,
    columns: 3,
    gap: 'base',
  },
};

export const FourColumns: Story = {
  args: {
    contentItems: mockContentItems,
    columns: 4,
    gap: 'base',
  },
};

export const GapLarge: Story = {
  args: {
    contentItems: mockContentItems,
    columns: 2,
    gap: 'lg',
  },
};

export const GapXL: Story = {
  args: {
    contentItems: mockContentItems,
    columns: 2,
    gap: 'xl',
  },
};
