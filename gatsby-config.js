module.exports = {
    siteMetadata: {
        title: "Fabian's portfolio"
    },
    plugins: [
        'gatsby-plugin-react-helmet',
        {
            resolve: `gatsby-plugin-typography`,
            options: {
                pathToConfigModule: `src/utils/typography.js`
            }
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/src/pages/posts`,
                name: 'markdown-pages'
            }
        },
        `gatsby-transformer-remark`,
        {
            resolve: `gatsby-plugin-google-fonts`,
            options: {
                fonts: [`Asul`, `Chivo`]
            }
        }
    ]
};
