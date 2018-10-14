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
        background_color: '#f4e659',
        theme_color: '#261c46',
        display: 'minimal-ui',
        icon: 'src/images/ssk-horse-icon.png',
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-sass',
  ],
}
