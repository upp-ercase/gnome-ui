import { Meta, StoryObj } from '@storybook/react-vite';
import { SmartSection } from './SmartSection';

const meta = {
  title: 'Sections/SmartSection',
  component: SmartSection,
  tags: ['autodocs'],
  parameters: {
    layout: 'full',
  },
} satisfies Meta<typeof SmartSection>;

export default meta;

type Story = StoryObj<typeof SmartSection>;

export const Hero: Story = {
  args: {
    data: {
      content: [
        {
          eyebrow: "LET'S SHIFT YOUR BUSINESS",
          title: '# __Get things done by awesome remote team__',
          body: 'With lots of unique blocks, you can easily build a page without coding. Build your next consultancy website within few minutes.',
          ctas: [
            {
              label: 'Get started a project',
              href: '/',
              variant: 'primary',
            },
            {
              label: 'Learn More',
              href: '/',
              variant: 'link',
            },
          ],
          alignment: 'start',
          titleFontSize: 'lg',
          contentType: 'richcontent',
        },
        {
          file: {
            url: 'https://images.ctfassets.net/ehmycbmc25mu/6C8WE9mpr1piWHKZdE1HGD/1818ba5f42ed9b60281445f92957672b/dashboard_hero.webp',
            title: '',
            description: '',
            width: 1824,
            height: 1270,
          },
          priority: true,
          contentType: 'featuredmedia',
        },
      ],
      layout: 'Columns',
      gap: 'lg',
      paddingTop: 'xl',
      paddingBottom: 'xl',
      backgroundImage: null,
      width: 'standard',
    },
  },
};

export const Hero2: Story = {
  args: {
    data: {
      content: [
        {
          eyebrow: "LET'S SHIFT YOUR BUSINESS",
          title: '# __Get things done by awesome remote team__',
          body: 'With lots of unique blocks, you can easily build a page without coding. Build your next consultancy website within few minutes.',
          ctas: [
            {
              label: 'Get started a project',
              href: '/',
              variant: 'primary',
            },
            {
              label: 'Learn More',
              href: '/',
              variant: 'link',
            },
          ],
          alignment: 'center',
          titleFontSize: 'lg',
          contentType: 'richcontent',
        },
        {
          file: {
            url: 'https://images.ctfassets.net/ehmycbmc25mu/6C8WE9mpr1piWHKZdE1HGD/1818ba5f42ed9b60281445f92957672b/dashboard_hero.webp',
            title: '',
            description: '',
            width: 1824,
            height: 1270,
          },
          priority: true,
          contentType: 'featuredmedia',
        },
      ],
      layout: 'Rows',
      gap: 'lg',
      paddingTop: 'xl',
      paddingBottom: 'xl',
      backgroundImage: null,
      width: 'standard',
    },
  },
};

export const Features: Story = {
  args: {
    data: {
      content: [
        {
          eyebrow: '',
          title: '# __Features with Real Impact__',
          body: 'With lots of unique blocks, you can easily build a page without coding. Build your next consultancy website within few minutes.',
          ctas: [],
          alignment: 'center',
          titleFontSize: 'base',
          contentType: 'richcontent',
        },
        {
          contentItems: [
            {
              eyebrow: '',
              title: '### __Unlimited Projects__',
              body: 'With lots of unique blocks, you can easily build a page without coding.',
              media: [
                {
                  url: 'https://images.ctfassets.net/ehmycbmc25mu/1FEf0rGpqNhepyZmMV62XP/fae3e73a1dbce0822d663d2023d2bca7/roadmap_icon.svg',
                  title: '',
                  width: 40,
                  height: 40,
                },
              ],
              buttons: [],
              alignment: 'start',
              layout: 'horizontal',
              contentType: 'flexiblecontent',
            },
            {
              eyebrow: '',
              title: '### __Team Management__',
              body: 'With lots of unique blocks, you can easily build a page without coding.',
              media: [
                {
                  url: 'https://images.ctfassets.net/ehmycbmc25mu/hsJk5X277srF1eNvU2q6G/3a22813fb5762124358357d6c2a7d080/users-wm_icon.svg',
                  title: '',
                  width: 40,
                  height: 40,
                },
              ],
              buttons: [],
              alignment: 'start',
              layout: 'horizontal',
              contentType: 'flexiblecontent',
            },
            {
              eyebrow: '',
              title: '### __File Sharing__',
              body: 'With lots of unique blocks, you can easily build a page without coding.',
              media: [
                {
                  url: 'https://images.ctfassets.net/ehmycbmc25mu/7mI8ozDv17tlvPeB1Im6bw/ff68000460948339ac8cbfaa71c1a831/share_icon.svg',
                  title: '',
                  width: 40,
                  height: 40,
                },
              ],
              buttons: [],
              alignment: 'start',
              layout: 'horizontal',
              contentType: 'flexiblecontent',
            },
            {
              eyebrow: '',
              title: '### __Video Meetings__',
              body: 'With lots of unique blocks, you can easily build a page without coding.',
              media: [
                {
                  url: 'https://images.ctfassets.net/ehmycbmc25mu/49l45vJKQA0ToIPaMvAFtI/aa0a7c5dd8c89e7a680b95c846cc72f4/video_meetings_icon.svg',
                  title: '',
                  width: 40,
                  height: 40,
                },
              ],
              buttons: [],
              alignment: 'start',
              layout: 'horizontal',
              contentType: 'flexiblecontent',
            },
            {
              eyebrow: '',
              title: '### __Time Tracking__',
              body: 'With lots of unique blocks, you can easily build a page without coding.',
              media: [
                {
                  url: 'https://images.ctfassets.net/ehmycbmc25mu/19FP567L897YBbffIUZhRu/64ced381f77dd6715843d5d880dec049/opening_times_icon.svg',
                  title: '',
                  width: 40,
                  height: 40,
                },
              ],
              buttons: [],
              alignment: 'start',
              layout: 'horizontal',
              contentType: 'flexiblecontent',
            },
            {
              eyebrow: '',
              title: '### __Payment System__',
              body: 'With lots of unique blocks, you can easily build a page without coding.',
              media: [
                {
                  url: 'https://images.ctfassets.net/ehmycbmc25mu/2EaZszrPHyrp4Fvd61TxH8/7396b1590470da01b64fdf7476f55bfd/card_favourite_icon.svg',
                  title: '',
                  width: 40,
                  height: 40,
                },
              ],
              buttons: [],
              alignment: 'start',
              layout: 'horizontal',
              contentType: 'flexiblecontent',
            },
          ],
          ctas: [],
          columns: 3,
          gap: 'base',
          layout: 'grid',
          contentType: 'contentlist',
        },
      ],
      layout: 'Rows',
      gap: 'lg',
      paddingTop: 'xl',
      paddingBottom: 'xl',
      backgroundColor: '#f4f5fa',
      width: 'standard',
    },
  },
};

export const Testimonials: Story = {
  args: {
    data: {
      content: [
        {
          eyebrow: '',
          title: "# __What Client's Say__",
          body: 'With lots of unique blocks, you can easily build a page without coding. Build your next consultancy website within few minutes.',
          ctas: [],
          alignment: 'center',
          titleFontSize: 'base',
          contentType: 'richcontent',
        },
        {
          contentItems: [
            {
              content:
                '__“You made it so simple. My new site is so much faster and easier to work with than my old site.”__',
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
              rating: 5,
              alignment: 'start',
              layout: 'horizontal',
              fontSize: 'base',
              contentType: 'testimonial',
            },
            {
              content:
                '__"Must have book for all, who want to be Product Designer or Interaction Designer."__',
              authorImage: {
                id: '1',
                url: 'https://randomuser.me/api/portraits/women/2.jpg',
                title: 'Esther Allison',
                description: 'Profile picture of Esther Allison',
                width: 90,
                height: 90,
                contentType: 'image/jpeg',
              },
              authorName: 'Esther Allison',
              authorTitle: 'UX Designer',
              rating: 5,
              alignment: 'start',
              layout: 'horizontal',
              fontSize: 'base',
              contentType: 'testimonial',
            },
            {
              content:
                '__“Simply the best. Better than all the rest. I’d recommend this product to beginners and advanced users who want success.”__',
              authorImage: {
                id: '1',
                url: 'https://randomuser.me/api/portraits/men/24.jpg',
                title: 'Barry Young',
                description: 'Profile picture of Barry Young',
                width: 90,
                height: 90,
                contentType: 'image/jpeg',
              },
              authorName: 'Barry Young',
              authorTitle: 'Founder at ZYX',
              rating: 5,
              alignment: 'start',
              layout: 'horizontal',
              fontSize: 'base',
              contentType: 'testimonial',
            },
            {
              content:
                '__“OMG! I cannot believe that I have got a brand new landing page after getting NovaJAM. It was super easy to edit and publish.”__',
              authorImage: {
                id: '1',
                url: 'https://randomuser.me/api/portraits/men/54.jpg',
                title: 'Isaac Olson',
                description: 'Profile picture of Isaac Olson',
                width: 90,
                height: 90,
                contentType: 'image/jpeg',
              },
              authorName: 'Isaac Olson',
              authorTitle: 'Web Developer',
              rating: 5,
              alignment: 'start',
              layout: 'horizontal',
              fontSize: 'base',
              contentType: 'testimonial',
            },
          ],
          ctas: [],
          columns: 2,
          gap: 'lg',
          layout: 'grid',
          contentType: 'contentlist',
        },
      ],
      layout: 'Rows',
      gap: 'lg',
      paddingTop: 'xl',
      paddingBottom: 'xl',
      backgroundColor: '#f4f5fa',
      width: 'standard',
    },
  },
};

export const Testimonials2: Story = {
  args: {
    data: {
      content: [
        {
          eyebrow: '',
          title: "# __What Client's Say__",
          body: 'With lots of unique blocks, you can easily build a page without coding. Build your next consultancy website within few minutes.',
          ctas: [],
          alignment: 'center',
          titleFontSize: 'base',
          contentType: 'richcontent',
        },
        {
          contentItems: [
            {
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
              rating: 5,
              alignment: 'start',
              layout: 'horizontal',
              fontSize: 'base',
              contentType: 'testimonial',
            },
            {
              content:
                '"Must have book for all, who want to be Product Designer or Interaction Designer."',
              authorImage: {
                id: '1',
                url: 'https://randomuser.me/api/portraits/women/2.jpg',
                title: 'Esther Allison',
                description: 'Profile picture of Esther Allison',
                width: 90,
                height: 90,
                contentType: 'image/jpeg',
              },
              authorName: 'Esther Allison',
              authorTitle: 'UX Designer',
              rating: 5,
              alignment: 'start',
              layout: 'horizontal',
              fontSize: 'base',
              contentType: 'testimonial',
            },
            {
              content:
                '“Simply the best. Better than all the rest. I’d recommend this product to beginners and advanced users who want success.”',
              authorImage: {
                id: '1',
                url: 'https://randomuser.me/api/portraits/men/24.jpg',
                title: 'Barry Young',
                description: 'Profile picture of Barry Young',
                width: 90,
                height: 90,
                contentType: 'image/jpeg',
              },
              authorName: 'Barry Young',
              authorTitle: 'Founder at ZYX',
              rating: 5,
              alignment: 'start',
              layout: 'horizontal',
              fontSize: 'base',
              contentType: 'testimonial',
            },
            {
              content:
                '“OMG! I cannot believe that I have got a brand new landing page after getting NovaJAM. It was super easy to edit and publish.”',
              authorImage: {
                id: '1',
                url: 'https://randomuser.me/api/portraits/men/54.jpg',
                title: 'Isaac Olson',
                description: 'Profile picture of Isaac Olson',
                width: 90,
                height: 90,
                contentType: 'image/jpeg',
              },
              authorName: 'Isaac Olson',
              authorTitle: 'Web Developer',
              rating: 5,
              alignment: 'start',
              layout: 'horizontal',
              fontSize: 'base',
              contentType: 'testimonial',
            },
          ],
          ctas: [],
          columns: 3,
          gap: 'lg',
          layout: 'carousel',
          contentType: 'contentlist',
        },
      ],
      layout: 'Rows',
      gap: 'lg',
      paddingTop: 'xl',
      paddingBottom: 'xl',
      backgroundColor: '#432dd7',
      width: 'standard',
      inverse: true,
    },
  },
};

export const Statistics: Story = {
  args: {
    data: {
      content: [
        {
          contentItems: [
            {
              keyNumber: '100K+',
              description:
                '### __Active Users__\n\nWith lots of unique blocks, you can easily build a page without coding.',
              alignment: 'start',
              layout: 'vertical',
              contentType: 'statistics',
            },
            {
              keyNumber: '2M+',
              description:
                '### __Downloads__\n\nWith lots of unique blocks, you can easily build a page without coding.',
              alignment: 'start',
              layout: 'vertical',
              contentType: 'statistics',
            },
            {
              keyNumber: '99.99%',
              description:
                '### __Positive feedback__\n\nWith lots of unique blocks, you can easily build a page without coding.',
              alignment: 'start',
              layout: 'vertical',
              contentType: 'statistics',
            },
          ],
          ctas: [],
          columns: 3,
          gap: 'lg',
          layout: 'grid',
          contentType: 'contentlist',
        },
      ],
      layout: 'Rows',
      gap: 'lg',
      paddingTop: 'lg',
      paddingBottom: 'lg',
      backgroundColor: null,
      sectionSeparator: true,
      width: 'standard',
    },
  },
};

export const FAQ: Story = {
  args: {
    data: {
      content: [
        {
          eyebrow: '',
          title: '# __Frequently Asked Questions__',
          body: 'With lots of unique blocks, you can easily build a page without coding. Build your next consultancy website within few minutes.',
          ctas: [],
          alignment: 'center',
          titleFontSize: 'base',
          contentType: 'richcontent',
        },
        {
          contentItems: [
            {
              title: 'What is NovaJAM Pro?',
              body: 'NovaJAM Pro is a CMS-agnostic, component-driven website template built with Next.js. It helps you visually manage content and launch fast, SEO-optimized sites using JSON or modern headless CMSs like Contentful and Directus (Sanity coming soon).',
              isCollapsed: true,
              contentType: 'qa',
            },
            {
              title: 'Do I need a CMS to use NovaJAM Pro?',
              body: 'No! You can use NovaJAM Pro with static JSON data for smaller projects, or connect it to a headless CMS for dynamic content.',
              isCollapsed: true,
              contentType: 'qa',
            },
            {
              title: "What's the difference between NovaJAM and NovaJAM Pro?",
              body: 'NovaJAM is the open-source base version. NovaJAM Pro includes premium features like pre-built sections, form integrations, CMS support, blog system, and more.',
              isCollapsed: true,
              contentType: 'qa',
            },
          ],
          ctas: [],
          columns: 1,
          gap: 'base',
          layout: 'grid',
          contentType: 'contentlist',
        },
      ],
      layout: 'Rows',
      gap: 'lg',
      paddingTop: '2xl',
      paddingBottom: '2xl',
      backgroundColor: '#f4f5fa',
      width: 'standard',
    },
  },
};

export const HowItWorks: Story = {
  args: {
    data: {
      content: [
        {
          eyebrow: '',
          title: '# __How it Works?__',
          body: 'With lots of unique blocks, you can easily build a page without coding. Build your next consultancy website within few minutes.',
          ctas: [],
          alignment: 'center',
          titleFontSize: 'base',
          contentType: 'richcontent',
        },
        {
          file: {
            url: 'https://images.ctfassets.net/ehmycbmc25mu/2DWCNIOUEQJENahOzvpKdC/7929b098ceed2a8016c414d671aad2b4/management_settings.webp',
            title: 'management',
            description: '',
            width: 1100,
            height: 1100,
          },
          priority: true,
          contentType: 'featuredmedia',
        },
        {
          contentItems: [
            {
              eyebrow: '',
              title: '### __Create a project__',
              body: 'With lots of unique blocks, you can easily build a page without coding. Build your next website within a few minutes.',
              media: [
                {
                  url: 'https://images.ctfassets.net/ehmycbmc25mu/5XPaB9kgTyy56kRs4YXZ9M/ae4cd65e8582e1f9713e23d5256e58bb/1.svg',
                  title: '',
                  width: 50,
                  height: 50,
                },
              ],
              buttons: [],
              alignment: 'start',
              layout: 'horizontal',
              contentType: 'flexiblecontent',
            },
            {
              eyebrow: '',
              title: '### __Assign related people__',
              body: 'With lots of unique blocks, you can easily build a page without coding. Build your next website within a few minutes.',
              media: [
                {
                  url: 'https://images.ctfassets.net/ehmycbmc25mu/742XK3U4WZss9sx76AUTzD/381290530cfdd8b7e9794ab4cbd2b778/2.svg',
                  title: '',
                  width: 50,
                  height: 50,
                },
              ],
              buttons: [],
              alignment: 'start',
              layout: 'horizontal',
              contentType: 'flexiblecontent',
            },
            {
              eyebrow: '',
              title: '### __Make it done on-time__',
              body: 'With lots of unique blocks, you can easily build a page without coding. Build your next website within a few minutes.',
              media: [
                {
                  url: 'https://images.ctfassets.net/ehmycbmc25mu/6VlKRgERvKgrzmBJoUU32y/c02ad412c0d336704621e215d15ddf5e/3.svg',
                  title: '',
                  width: 50,
                  height: 50,
                },
              ],
              buttons: [],
              alignment: 'start',
              layout: 'horizontal',
              contentType: 'flexiblecontent',
            },
          ],
          ctas: [],
          columns: 1,
          gap: 'base',
          layout: 'grid',
          contentType: 'contentlist',
        },
      ],
      layout: 'Banner',
      gap: 'lg',
      paddingTop: 'xl',
      paddingBottom: 'xl',
      backgroundColor: null,
      width: 'standard',
    },
  },
};

export const Pricing: Story = {
  args: {
    data: {
      content: [
        {
          eyebrow: '',
          title: '# __Choose Your Plan__',
          body: 'With lots of unique blocks, you can easily build a page without coding. Build your next consultancy website within few minutes.',
          ctas: [],
          alignment: 'center',
          titleFontSize: 'base',
          contentType: 'richcontent',
        },
        {
          contentItems: [
            {
              planName: 'STARTER',
              pricingOptions: [
                {
                  billingCycle: 'Monthly',
                  standardPrice: 19,
                  salePrice: null,
                  currency: 'USD',
                  priceSuffix: 'billed monthly',
                },
                {
                  billingCycle: 'Yearly',
                  standardPrice: 190,
                  salePrice: null,
                  currency: 'USD',
                  priceSuffix: 'billed yearly',
                },
              ],
              badge: null,
              description:
                'With lots of unique blocks, you can easily build a page without coding.',
              features: [
                'Commercial License',
                '100+ HTML UI Elements',
                '01 Domain Support',
              ],
              planLimitations: ['6 Month Premium Support', 'Lifetime Updates'],
              alignment: 'start',
              cta: {
                label: 'Start Free Trial',
                href: '#',
                variant: 'outline',
              },
              featured: false,
              contentType: 'pricingplan',
            },
            {
              planName: 'STANDARD',
              pricingOptions: [
                {
                  billingCycle: 'Monthly',
                  standardPrice: 49,
                  salePrice: null,
                  currency: 'USD',
                  priceSuffix: 'billed monthly',
                },
                {
                  billingCycle: 'Yearly',
                  standardPrice: 490,
                  salePrice: null,
                  currency: 'USD',
                  priceSuffix: 'billed yearly',
                },
              ],
              badge: 'MOST POPULAR',
              description:
                'With lots of unique blocks, you can easily build a page without coding.',
              features: [
                'Commercial License',
                '100+ HTML UI Elements',
                '01 Domain Support',
                '6 Month Premium Support',
              ],
              planLimitations: ['Lifetime Updates'],
              alignment: 'start',
              cta: {
                label: 'Start Free Trial',
                href: '#',
                variant: 'primary',
              },
              featured: true,
              contentType: 'pricingplan',
            },
            {
              planName: 'PREMIUM',
              pricingOptions: [
                {
                  billingCycle: 'Monthly',
                  standardPrice: 99,
                  salePrice: null,
                  currency: 'USD',
                  priceSuffix: 'billed monthly',
                },
                {
                  billingCycle: 'Yearly',
                  standardPrice: 990,
                  salePrice: null,
                  currency: 'USD',
                  priceSuffix: 'billed yearly',
                },
              ],
              badge: null,
              description:
                'With lots of unique blocks, you can easily build a page without coding.',
              features: [
                'Commercial License',
                '100+ HTML UI Elements',
                '01 Domain Support',
                '6 Month Premium Support',
                'Lifetime Updates',
              ],
              planLimitations: [],
              alignment: 'start',
              cta: {
                label: 'Start Free Trial',
                href: '#',
                variant: 'outline',
              },
              featured: false,
              contentType: 'pricingplan',
            },
          ],
          ctas: [],
          columns: 3,
          gap: 'none',
          layout: 'flex',
          contentType: 'contentlist',
        },
      ],
      layout: 'Rows',
      gap: 'base',
      paddingTop: 'xl',
      paddingBottom: 'xl',
      backgroundColor: '#f4f5fa',
      width: 'standard',
    },
  },
};

export const ContactForm: Story = {
  args: {
    data: {
      content: [
        {
          eyebrow: '',
          title: '# __Need Help? Open a Ticket__',
          body: 'With lots of unique blocks, you can easily build a page without coding. Build your next consultancy website within few minutes.',
          ctas: [],
          alignment: 'center',
          titleFontSize: 'base',
          contentType: 'richcontent',
        },
        {
          fields: [
            {
              label: 'Name',
              fieldType: 'text',
              options: null,
              required: true,
              placeholder: 'i.e. John Doe',
              helpText: null,
              uiWidth: 'half-size',
              hideLabel: false,
            },
            {
              label: 'Company',
              fieldType: 'text',
              options: null,
              required: false,
              placeholder: 'i.e. Acme Corporation',
              helpText: null,
              uiWidth: 'half-size',
              hideLabel: false,
            },
            {
              label: 'Email',
              fieldType: 'email',
              options: null,
              required: true,
              placeholder: 'i.e. john@gmail.com',
              helpText: null,
              uiWidth: 'half-size',
              hideLabel: false,
            },
            {
              label: 'Phone Number',
              fieldType: 'tel',
              options: null,
              required: false,
              placeholder: 'i.e. +1-234-567-890',
              helpText: null,
              uiWidth: 'half-size',
              hideLabel: false,
            },
            {
              label: 'Message',
              fieldType: 'textarea',
              options: null,
              required: false,
              placeholder: 'Type your message',
              helpText: null,
              uiWidth: 'full-size',
              hideLabel: false,
            },
          ],
          submitButtonLabel: 'Submit Ticket',
          submitButtonVariant: 'primary',
          submitButtonPosition: 'bottom',
          disclaimer:
            'By clicking submit button, you agree our terms and policy.',
          formType: 'contact',
          contentType: 'form',
        },
      ],
      layout: 'Rows',
      gap: 'base',
      paddingTop: '2xl',
      paddingBottom: '2xl',
      backgroundColor: '#f4f5fa',
      width: 'standard',
    },
  },
};
