import React from "react";
import styled from "styled-components";

import Img from "gatsby-image";

const BlogsPageStyles = styled.div``;

export default function BlogsPage({ data }) {
  return (
    <>
      {/* <SEO title='Important Info' /> */}
      <BlogsPageStyles className="post" id="beginning"></BlogsPageStyles>
    </>
  );
}

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
