const path = require('path');

module.exports = {
  // TODO: Change site metadate for you project
  siteMetadata: {
    title: 'Project Name',
    description: 'Project description',
    siteUrl: 'https://github.com/Wolox/gatsby-wolox-kickoff',
    author: '@damfinkel'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        includePaths: ['src/scss', 'src']
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'assets',
        path: `${__dirname}/src/assets`
      }
    },
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        '@components': path.join(__dirname, 'src/components')
      }
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      /* eslint-disable camelcase */
      /* TODO: Change data when it exists */
      options: {
        name: 'Project Name',
        short_name: 'Short Project Name',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#675CE2',
        display: 'standalone',
        icon: 'src/assets/logo.svg'
      }
      /* eslint-enable camelcase */
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-sitemap'
  ]
};
