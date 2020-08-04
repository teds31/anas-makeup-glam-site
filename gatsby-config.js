module.exports = {
  siteMetadata: {
    title: `Ana's Makeup Glam Site`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@ireneperez`,
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-your-fonts',
      options: {
        host: 'girafffene.github.io/fonts',
        fonts: [
          `font-one.css`, // font-family: 'Font One';
          `font-two.css` // font-family: 'Font Two';
        ]
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Homemade Apple`,
          },
        ],
      },
    },
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
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logos/lips.png`, 
      },
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/portfolio`,
        display: `minimal-ui`,
        icon: `src/images/logos/lips.png`, 
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
