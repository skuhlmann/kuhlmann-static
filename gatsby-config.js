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
        background_color: '#ECEBE4',
        theme_color: '#153B50',
        display: 'minimal-ui',
        icon: 'src/images/ssk-horse-icon.png',
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-sass',
  ],
}
