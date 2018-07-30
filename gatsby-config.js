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
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: "GatsbyJS",
    //     short_name: "GatsbyJS",
    //     start_url: "/",
    //     background_color: "#f7f0eb",
    //     theme_color: "#a2466c",
    //     display: "minimal-ui",
    //     icon: "src/images/icon.png", // This path is relative to the root of the site.
    //   },
    // },
    `gatsby-plugin-offline`
  ],
}