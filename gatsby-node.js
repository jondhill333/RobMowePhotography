const path = require(`path`);

async function turnCategoriesIntoPages({ graphql, actions }) {
  const categoryTemplate = path.resolve("./src/pages/photos.js");

  const { data } = await graphql(`
    query {
      category: allSanityCategory {
        nodes {
          name
          id
        }
      }
    }
  `);
  data.category.nodes.forEach((category) => {
    actions.createPage({
      path: `category/${category.name}`,
      component: categoryTemplate,
      context: {
        category: category.name,
        categoryRegex: `/${category.name}/i`,
      },
    });
  });
}

exports.createPages = async (params) => {
  await Promise.all([turnCategoriesIntoPages(params)]);
};
