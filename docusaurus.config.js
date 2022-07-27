const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: "黄旭康",
    tagline: "我永远爱楠楠",
    url: "https://huangxukang.github.io/",
    baseUrl: "/",
    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",
    favicon: "hero.jpg",
    organizationName: "黄旭康",
    projectName: "黄旭康1",

    presets: [
        [
            "classic",
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: require.resolve("./sidebars.js"),
                },
                theme: {
                    customCss: require.resolve("./src/css/custom.css"),
                },
            }),
        ],
    ],

    themeConfig:
        /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            navbar: {
                title: "黄旭康的文档",
                logo: {
                    alt: "hero",
                    src: "hero.jpg",
                },
                items: [
                    {
                        href: "https://reactjs.org/",
                        label: "React",
                        position: "right",
                    },
                    {
                        href: "https://beta.reactjs.org/",
                        label: "React Beta",
                        position: "right",
                    },
                    {
                        href: "https://reactrouter.com/",
                        label: "React Router",
                        position: "right",
                    },
                    {
                        href: "https://redux.js.org/",
                        label: "Redux",
                        position: "right",
                    },
                    {
                        href: "https://react-redux.js.org/",
                        label: "React Redux",
                        position: "right",
                    },
                    {
                        href: "https://webpack.js.org/",
                        label: "Webpack",
                        position: "right",
                    },
                    {
                        href: "https://docusaurus.io/",
                        label: "Docusaurus",
                        position: "right",
                    },
                ],
            },
            footer: {
                style: "dark",
                links: [
                    {
                        title: "Study 📚",
                        items: [
                            {
                                label: "Go Now ❤️",
                                to: "/docs/introduction",
                            },
                        ],
                    },
                    {
                        title: "Links 🔗",
                        items: [
                            {
                                label: "现代 JavaScript 教程",
                                href: "https://zh.javascript.info/",
                            },
                            {
                                label: "网道 - 互联网开发文档",
                                href: "https://www.wangdoc.com/",
                            },
                        ],
                    },
                    {
                        title: "Relax 🛩️",
                        items: [
                            {
                                label: "GitHub",
                                href: "https://github.com/",
                            },
                        ],
                    },
                ],
                copyright: `Copyright © 2019 - ${new Date().getFullYear()} 黄旭康`,
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
            },
        }),
};

module.exports = config;
