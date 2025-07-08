import { Meta, StoryObj } from '@storybook/react-vite';
import { GridList } from './GridList';
import { AlignmentType } from '../../types';

const meta = {
    title: 'Elements/GridList',
    component: GridList,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof GridList>;

export default meta;

type Story = StoryObj<typeof GridList>;

const contentItems = [
    {
        keyNumber: '1M+',
        description:
            'With lots of unique blocks, you can easily build a page without coding. Build your next landing page.',
        layout: 'vertical' as 'vertical',
        alignment: 'center' as AlignmentType,
        contentType: 'statistics' as 'statistics'
    },
    {
        keyNumber: '92%',
        description:
            'With lots of unique blocks, you can easily build a page without coding. Build your next landing page.',
        layout: 'vertical' as 'vertical',
        alignment: 'center' as AlignmentType,
        contentType: 'statistics' as 'statistics'
    },
    {
        keyNumber: '4.9/5.0',
        description:
            'With lots of unique blocks, you can easily build a page without coding. Build your next landing page.',
        layout: 'vertical' as 'vertical',
        alignment: 'center' as AlignmentType,
        contentType: 'statistics' as 'statistics'
    },
    {
        keyNumber: '9K+',
        description:
            'With lots of unique blocks, you can easily build a page without coding. Build your next landing page.',
        layout: 'vertical' as 'vertical',
        alignment: 'center' as AlignmentType,
        contentType: 'statistics' as 'statistics'
    },
];

export const OneColumn: Story = {
    args: {
        contentItems: contentItems,
        columns: 1,
        gap: 'base'
    }
}

export const TwoColumns: Story = {
    args: {
        contentItems: contentItems,
        columns: 2,
        gap: 'base'
    }
}

export const ThreeColumns: Story = {
    args: {
        contentItems: contentItems,
        columns: 3,
        gap: 'base'
    }
}

export const FourColumns: Story = {
    args: {
        contentItems: contentItems,
        columns: 4,
        gap: 'base'
    }
}

export const GapLarge: Story = {
    args: {
        contentItems: contentItems,
        columns: 2,
        gap: 'lg'
    }
}

export const GapXL: Story = {
    args: {
        contentItems: contentItems,
        columns: 2,
        gap: 'xl'
    }
}