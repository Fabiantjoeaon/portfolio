module.exports = {
    siteMetadata: {
        title: "Fabian's portfolio",
        siteURL: 'https://fabiantjoeaon.com',
        themeColor: '#a5abff'
    },
    plugins: [
        'gatsby-plugin-react-helmet',
        {
            resolve: `gatsby-plugin-typography`,
            options: {
                pathToConfigModule: `src/utils/typography.js`
            }
        },
        `gatsby-plugin-offline`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/src/pages/posts`,
                name: 'markdown-pages'
            }
        },
        {
            resolve: 'gatsby-plugin-netlify',
            options: {
                headers: {}, // option to add more headers. `Link` headers are transformed by the below criteria
                allPageHeaders: [], // option to add headers for all pages. `Link` headers are transformed by the below criteria
                mergeSecurityHeaders: true, // boolean to turn off the default security headers
                mergeLinkHeaders: true, // boolean to turn off the default gatsby js headers
                mergeCachingHeaders: true, // boolean to turn off the default caching headers
                transformHeaders: (headers, path) => headers, // optional transform for manipulating headers under each path (e.g.sorting), etc.
                generateMatchPathRewrites: true, // boolean to turn off automatic creation of redirect rules for client only paths
            }
        },
        {
            resolve: `gatsby-plugin-favicon`,
            options: {
                logo: './src/favicon.png',
                injectHTML: true,
                icons: {
                    android: true,
                    appleIcon: true,
                    appleStartup: true,
                    coast: false,
                    favicons: true,
                    firefox: true,
                    twitter: false,
                    yandex: false,
                    windows: false
                }
            }
        },
        {
            resolve: `gatsby-plugin-styled-components`
        },
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    `gatsby-plugin-sharp`,
                    'gatsby-remark-copy-linked-files',
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            // It's important to specify the maxWidth (in pixels) of
                            // the content container as this plugin uses this as the
                            // base for generating different widths of each image.
                            maxWidth: 590
                        }
                    },
                    {
                        resolve: `gatsby-remark-prismjs`,
                        options: {
                            // Class prefix for <pre> tags containing syntax highlighting;
                            // defaults to 'language-' (eg <pre class="language-js">).
                            // If your site loads Prism into the browser at runtime,
                            // (eg for use with libraries like react-live),
                            // you may use this to prevent Prism from re-processing syntax.
                            // This is an uncommon use-case though;
                            // If you're unsure, it's best to use the default value.
                            classPrefix: 'language-'
                        }
                    },
                    {
                        resolve: 'gatsby-remark-embed-video',
                        options: {
                            width: 800,
                            ratio: 1.77, // Optional: Defaults to 16/9 = 1.77
                            height: 400 // Optional: Overrides optional.ratio
                        }
                    }
                ]
            }
        }
    ]
};
