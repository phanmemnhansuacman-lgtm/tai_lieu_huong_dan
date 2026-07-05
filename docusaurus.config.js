// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'ACMan',
  tagline: 'Nghề kế toán chuyên nghiệp',
  favicon: 'img/logo-2.jpg',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      tableOfContents: {
      minHeadingLevel: 2,
      maxHeadingLevel: 6,
    },
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'Trang chủ',
        logo: {
          alt: 'ACMan Logo',
          src: 'img/acman-logo-1.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Tài liệu',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
  type: 'search',
  position: 'right',
},
          {
            href: 'https://github.com/facebook/docusaurus',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
  style: 'dark',
  copyright: `Copyright © ${new Date().getFullYear()} ACMan`,
  links: [
    {
      title: 'Tài liệu',
      items: [
        {
          label: 'Hướng dẫn sử dụng',
          to: '/docs/intro',
        },
      ],
    },
    {
      title: 'Liên hệ',
      items: [
        {
          label: 'Website',
          href: 'https://acman.vn',
        },
      ],
    },

          {
            title: 'Cộng đồng hỗ trợ',
            items: [
              {
                label: 'Khóa kế toán mới bắt đầu',
                href: 'https://zalo.me/g/uxcdbi356',
              },
              {
                label: 'ACMan hỗ trợ quyết toán thuế',
                href: 'https://zalo.me/g/udowsc205',
              },
              {
                label: 'Hỗ trợ khai thuế cho HKD',
                href: 'https://zalo.me/g/ihwrxp656',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
        ],
        // copyright: `Copyright © ${new Date().getFullYear()} ACMan`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
    stylesheets: [
  {
    href: '/css/custom.css',
    type: 'text/css',
  },
],

};

export default config;
plugins: [
  [
    require.resolve("@easyops-cn/docusaurus-search-local"),
    {
      hashed: true,
      language: ["vi", "en"],
      docsRouteBasePath: "/docs",
      indexDocs: true,
      indexBlog: false,
      indexPages: false,
    },
  ],
]