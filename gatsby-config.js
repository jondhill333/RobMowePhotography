module.exports = {
  siteMetadata: {
    title: "Rob Mowe",
    siteUrl: "https://robmowe.netlify.app",
    description: "Personal Page for Rob Mowe Photography",
    instagram: "@https://www.instagram.com/robmowe",
  },
  plugins: [
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: "qfg70uq3",
        dataset: "production",
        watchMode: true,
        token: process.env.SANITY_TOKEN,
      },
    },
    "gatsby-plugin-styled-components",
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
