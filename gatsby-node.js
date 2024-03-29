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
      path: `photos/${category.name}`,
      component: categoryTemplate,
      context: {
        category: category.name,
        categoryRegex: `/${category.name}/i`,
      },
    });
  });
}

async function turnBlogsIntoPages({ graphql, actions }) {
  const blogTemplate = path.resolve("./src/templates/blogPost.js");

  const { data } = await graphql(`
    query {
      blogs: allSanityBlogs {
        nodes {
          title
          slug {
            current
          }
        }
      }
    }
  `);
  data.blogs.nodes.forEach((blog) => {
    actions.createPage({
      path: `blogs/${blog.slug.current}`,
      component: blogTemplate,
      context: {
        slug: blog.slug.current,
        title: blog.title,
      },
    });
  });
}

exports.createPages = async (params) => {
  await Promise.all([
    turnCategoriesIntoPages(params),
    turnBlogsIntoPages(params),
  ]);
};
