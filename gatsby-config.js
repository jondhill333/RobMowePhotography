module.exports = {
  siteMetadata: {
    title: "robMowe",
  },
  plugins: [
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: "qfg70uq3",
        dataset: "",
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
