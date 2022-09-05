
/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Rancher Manager',
  tagline: '',
  url: 'http://docs.ranchermanager.rancher.io/',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',
  organizationName: 'rancher', // Usually your GitHub org/user name.
  projectName: 'rancher-docs', // Usually your repo name.
  trailingSlash: false,
  themeConfig: {
    algolia: {
      // The application ID provided by Algolia
      appId: 'YOUR_APP_ID',

      // Public API key: it is safe to commit it
      apiKey: 'YOUR_SEARCH_API_KEY',

      indexName: 'YOUR_INDEX_NAME',

      // Optional: see doc section below
      contextualSearch: true,

      // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
      externalUrlRegex: 'external\\.com|domain\\.com',

      // Optional: Algolia search parameters
      searchParameters: {},

      // Optional: path for search page that enabled by default (`false` to disable it)
      searchPagePath: 'search',

      //... other Algolia params
    },
    colorMode: {
      // "light" | "dark"
      defaultMode: "light",

      // Hides the switch in the navbar
      // Useful if you want to support a single color mode
      disableSwitch: true,
    },
    prism: {
      additionalLanguages: ['rust'],
    },
    navbar: {
      title: "",
      logo: {
        alt: 'logo',
        src: 'img/rancher-logo-horiz-color.svg',
        // href: 'en',
      },
      items: [
        {
          type: 'doc',
          docId: 'rancher-manager',
          position: 'right',
          label: 'Docs',
          className: 'navbar__docs',
        },
        {
          href: 'https://github.com/rancher/',
          label: 'GitHub',
          position: 'right',
          className: 'navbar__github btn btn-secondary icon-github',
        },
        {
          type: 'docsVersionDropdown',
          position: 'left',
          dropdownItemsAfter: [{to: '/versions', label: 'All versions'}],
          dropdownActiveClassDisabled: false,
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [],
      copyright: `Copyright © ${new Date().getFullYear()} SUSE Rancher. All Rights Reserved.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: '/', // Serve the docs at the site's root
          /* other docs plugin options */
          sidebarPath: require.resolve('./sidebars.js'),
          showLastUpdateTime: true,
          editUrl: 'https://github.com/rancher/rancher-docs/edit/main/',
          lastVersion: 'current',
          versions: {
            current: {
              label: 'v2.6'
            },
            2.5: {
              label: 'v2.5',
              path: 'v2.5'
            },
            '2.0-2.4': {
              label: 'v2.0-v2.4',
              path: 'v2.0-v2.4'
            },
          },
        },
        blog: false, // Optional: disable the blog plugin
        // ...
        theme: {
          customCss: [require.resolve("./src/css/custom.css")],
        },
      },
    ],
  ],
};