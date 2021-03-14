module.exports = {
  siteMetadata: {
    title: `Drive Test Pro Driving School – Driving Lessons Serving the Greater Toronto Area`,
    author: `Drive Test Pro Driving School`,
    description: `Drive Test Pro Driving School - Driver education, tips, locations, rates, and hours`,
    siteUrl: `http://drivetestprodrivingschool.com`,
    keywords: [
      'behind-the-wheel',
      'adult drivers',
      'nervous drivers',
      'education',
      'esl',
      'behind the wheel',
      'minnesota',
      'twin cities',
      'nervous',
      'english as second language',
      'minneapolis',
      'saint paul',
      'st. paul',
      'midway driving school',
      'midway driving',
      'driving school',
      'anxious',
      'anxious drivers',
      'adult',
      'locations',
      'rates',
      'hours',
      'lessons',
      'driving',
      'drivers'
    ]
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Roboto\:400,500,700` // you can also specify font weights and styles
        ],
        display: 'swap'
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/assets`,
        name: `images`
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`
            }
          },
          `gatsby-remark-images`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`
        ]
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-material-ui`,
      // If you want to use styled components, in conjunction to Material-UI, you should:
      // - Change the injection order
      // - Add the plugin
      options: {
        stylesProvider: {
          injectFirst: true,
        },
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Drive Test Pro Driving School`,
        short_name: `MDS`,
        start_url: `http://drivetestprodrivingschool.com`,
        background_color: `#ffffff`,
        theme_color: `#ffffff`,
        display: `standalone`,
        icon: `src/assets/mds-icon.png`
      }
    },
    `gatsby-plugin-remove-serviceworker`,
    `gatsby-plugin-react-helmet`
  ]
}
