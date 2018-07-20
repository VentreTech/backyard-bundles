module.exports = {
  siteMetadata: {
    title: 'Gatsby - Bulma - Contentful Template',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-sass`,
    // {
    //   resolve: `gatsby-source-contentful`,
    //   options: {
    //     spaceId: ``,
    //     accessToken: ``,
    //   },
    // },
    'gatsby-transformer-remark',
  ],
}