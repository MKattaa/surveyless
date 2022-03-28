module.exports = {
  plugins: [
    'gatsby-plugin-resolve-src',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'surveyless',
        short_name: 'surveyless',
        start_url: '/',
        background_color: '#FFFFFF',
        theme_color: '#4b98e5',
        display: 'minimal-ui',
        icon: 'static/images/logo.png',
      },
    },
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/styles/typography',
      },
    },
    'gatsby-plugin-styled-components',
    'gatsby-transformer-remark',
    // source files
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: 'survey',
        name: 'survey',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: 'README.md',
        name: 'surveyInfo',
      },
    },
  ],
};
