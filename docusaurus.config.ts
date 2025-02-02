import type * as Preset from '@docusaurus/preset-classic';
import type { Config } from '@docusaurus/types';

const config: Config = {
    title: 'Seneca Dev Guide',
    tagline: 'Dinosaurs are cool',
    favicon: 'img/favicon.ico',

    url: 'https://AryanK1511.github.io',
    baseUrl: '/',
    organizationName: 'AryanK1511',
    projectName:
        'An open-source guide for Seneca students in software, IT, and engineering fields ✨',
    deploymentBranch: 'main',
    trailingSlash: false,

    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',

    i18n: {
        defaultLocale: 'en',
        locales: ['en'],
    },

    staticDirectories: ['static'],

    presets: [
        [
            'classic',
            {
                docs: {
                    path: 'docs',
                    routeBasePath: '/',
                    sidebarPath: './sidebars.ts',
                },
                blog: {
                    showReadingTime: true,
                    feedOptions: {
                        type: ['rss', 'atom'],
                        xslt: true,
                    },
                    onInlineTags: 'warn',
                    onInlineAuthors: 'warn',
                    onUntruncatedBlogPosts: 'warn',
                },
                theme: {
                    customCss: './src/css/custom.css',
                },
            } satisfies Preset.Options,
        ],
    ],

    themeConfig: {
        // Replace with your project's social card
        navbar: {
            title: 'Seneca Dev Guide',
            logo: {
                alt: 'Seneca Dev Guide Logo',
                src: 'img/logo.png',
            },
            items: [
                {
                    type: 'docSidebar',
                    sidebarId: 'guidesSidebar',
                    position: 'left',
                    label: 'Guides',
                },
                { to: '/blog', label: 'Blog', position: 'left' },
                {
                    href: 'https://github.com/AryanK1511/SenecaDevHandbook',
                    label: 'GitHub',
                    position: 'right',
                },
                {
                    href: 'https://discord.gg/HYakXGHJww',
                    label: 'Discord',
                    position: 'right',
                },
            ],
        },
        colorMode: {
            defaultMode: 'dark',
            disableSwitch: true,
            respectPrefersColorScheme: false,
        },
    } satisfies Preset.ThemeConfig,
};

export default config;
