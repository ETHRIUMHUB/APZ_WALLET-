// docusaurus.config.js
module.exports = {
  title: 'APZ Chain Docs',
  tagline: 'Transparent • Ethical • Reproducible',
  url: 'https://apz-chain.github.io',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'apz-chain',
  projectName: 'apz-wallet',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fa'],
  },
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  themeConfig: {
    navbar: {
      title: 'APZ Chain',
      items: [
        { to: '/', label: 'Docs', position: 'left' },
        { to: '/fa/index', label: 'فارسی', position: 'left' },
        {
          href: 'https://github.com/apz-chain/apz-wallet',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Built with ❤️ by Khalil Heyrani — APZ Chain`,
    },
  },
};
