import React from "react";
import styled from "styled-components";

import Img from "gatsby-image";
import BlogPostList from "../components/BlogPostLIst";

const BlogsPageStyles = styled.div``;

export default function BlogsPage({ data }) {
  console.log(data);
  const blogs = data.blogs.nodes;
  return (
    <>
      {/* <SEO title='Important Info' /> */}
      <BlogsPageStyles className="post" id="beginning">
        <h1>Blogs</h1>
        <BlogPostList blogs={blogs} />
      </BlogsPageStyles>
    </>
  );
}

export const query = graphql`
  query BlogQueryTest {
    blogs: allSanityBlogs {
      nodes {
        mainImage {
          asset {
            fluid(maxHeight: 1000) {
              ...GatsbySanityImageFluid
            }
          }
          caption
          alt
        }
        publishedAt
        title
        slug {
          current
        }
        excerpt {
          children {
            text
          }
        }
        _rawBody
        body {
          _key
          _type
          style
          list
          _rawChildren(resolveReferences: { maxDepth: 10 })
          children {
            _key
            _type
            text
            marks
          }
        }
      }
    }
  }
`;

// export const query = graphql`
//   query BlogQuery {
//     blogs: allSanityBlogs {
//       nodes {
//         name
//         Blockquotes
//         sectionOneText
//         sectionOneTitle
//       }
//     }
//   }
// `;
