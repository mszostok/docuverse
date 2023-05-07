// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'Documentation',
    tagline: 'Documentation',
    favicon: 'img/logo.svg',

    // Set the production url of your site here
    url: 'https://docs.szostok.io',
    baseUrl: '/',

    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',

    // Even if you don't use internalization, you can use this field to set useful
    // metadata like html lang. For example, if your site is Chinese, you may want
    // to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'en',
        locales: ['en'],
    },
    themes: [
        [
            "@easyops-cn/docusaurus-search-local",
            /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
            ({
                hashed: true,
                indexBlog: false,
                indexDocs: true,
                indexPages: true,
                language: ["en"],
                docsDir: ["botkube-plugins"],
                searchContextByPaths: ["botkube-plugins"],
                highlightSearchTermsOnTargetPage: true,
                explicitSearchResultPath: true,
            }),
        ],
    ],
    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    // // Please change this to your repo.
                    // // Remove this to remove the "edit this page" links.

                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            }),
        ],
    ],
    plugins: [
        function (context, options) {
            return {
                name: 'webpack-configuration-plugin',
                configureWebpack(config, isServer, utils) {
                    return {
                        resolve: {
                            symlinks: false,
                        }
                    };
                }
            };
        },
        [
            '@docusaurus/plugin-content-docs',
            {
                id: 'botkube-plugins',
                path: 'botkube-plugins',
                routeBasePath: 'botkube-plugins',
                editUrl: ({docPath}) => {
                    return `https://github.com/mszostok/botkube-plugins/tree/main/docs/${docPath.replace("docs/botkube-plugins", "")}`
                },
                sidebarPath: require.resolve('./sidebars.botkube-plugins.js'),
                // ... other options
            },
        ],
    ],
    themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            navbar: {
                title: 'DOCS',
                items: [
                    {
                        type: 'search',
                        position: 'left',
                    },
                ],

            },
            footer: {
                style: 'dark',
                links: [
                    {
                        label: 'GitHub',
                        href: 'https://github.com/mszostok',
                    },
                    {
                        label: 'LinkedIn',
                        href: 'https://www.linkedin.com/in/mszostok/',
                    },
                    {
                        label: 'Twitter',
                        href: 'https://twitter.com/m_szostok',
                    },
                ],
                copyright: `Copyright © ${new Date().getFullYear()} Mateusz Szostok`,
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
            },
        }),
};

module.exports = config;
