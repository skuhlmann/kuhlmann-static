module.exports = {
  siteMetadata: {
    title: 'Sam Kuhlmann',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Sam Kuhlmann',
        short_name: 'Kuhlmann',
        start_url: '/',
        background_color: '#cc998d',
        theme_color: '#ecebe4',
        display: 'minimal-ui',
        icon: 'src/images/ssk-horse-icon.png',
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-sass',
  ],
}
