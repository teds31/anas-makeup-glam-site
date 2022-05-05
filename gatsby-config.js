module.exports = {
  siteMetadata: {
    title: `Ana's Makeup Glam Site`,
    description: `The number one makeup artist in Las Vegas.`,
    author: `@teddystanowski`,
  },
  plugins: [
    // {
    //   resolve: `gatsby-plugin-prefetch-google-fonts`,
    //   options: {
    //     fonts: [
    //       {
    //         family: `Homemade Apple`,
    //       },
    //     ],
    //   },
    // },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
      options: {
        name: `looks`,
        path: `${__dirname}/src/looks`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        display: `minimal-ui`,
        icon: `src/images/logos/lips.png`,
      },
    },
  ],
}
