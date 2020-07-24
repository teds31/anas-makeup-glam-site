module.exports = {
  siteMetadata: {
    title: `Ana's Makeup Site`,
    description: `Makeup`,
    author: `@ireneperez`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: `src/images/logo/lips.png`
      },
    },
  ],
}