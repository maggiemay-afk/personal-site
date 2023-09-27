module.exports = {
  siteMetadata: {
    siteUrl: `https://www.maggiemay.dev`,
    description: "a personal website for Maggie Herms",
    title: "Maggie Herms"
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-plugin-netlify",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Maggie Herms`,
        short_name: `MH`,
        start_url: `/`,
        background_color: `#254E58`,
        theme_color: `#e85a4f`,
        display: `minimal-ui`,
        // Generate PWA icons and a favicon
        icon: `src/images/favicon.png`,
      },
    }
  ],
}
