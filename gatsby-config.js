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
        }
    ]
};
