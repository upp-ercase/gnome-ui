/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,ts,jsx,tsx}",
        "./.storybook/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/**/*.stories.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontSize: {
                smd: [
                    '0.9375rem',
                    {
                        lineHeight: '1.375rem',
                    },
                ],
                'sm-heading': 'var(--sm-heading-font-size)',
                'base-heading': 'var(--base-heading-font-size)',
                'lg-heading': 'var(--lg-heading-font-size)',
                'xl-heading': 'var(--xl-heading-font-size)',
                '2xl-heading': 'var(--2xl-heading-font-size)',
            },
            spacing: {
                1.25: '0.3125rem',
                2.5: '0.625rem',
                4.5: '1.125rem',
                7.5: '1.875rem',
                13: '3.25rem',
                14: '3.5rem',
                15: '3.75rem',
                18: '4.5rem',
                19.5: '4.875rem',
                26: '6.5rem',
                39: '9.75rem',
                42: '10.5rem',
                63: '15.75rem',
            },
            lineHeight: {
                tighter: '1.1',
                tight: '1.2',
                normal: '1.3',
            },
            aspectRatio: {
                '3/4': '3 / 4',
                '3/2': '3 / 2',
                '4/3': '4 / 3',
            },
        },
    },
    plugins: [],
}