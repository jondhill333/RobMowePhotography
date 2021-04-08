import React from "react";
import styled from "styled-components";
import BlogPostList from "../components/BlogPostLIst";
import SEO from "../components/SEO";
import { graphql } from "gatsby";

const BlogsPageStyles = styled.div`
  margin: 2% 10%;
  font-family: "Crimson Text";
  h1 {
    font-size: 3rem;
  }
  @media (max-width: 1300px) {
    margin: 1% 2%;
  }
  @media (max-width: 400px) {
    margin: 1% 2%;
  }
`;

export default function BlogsPage({ data }) {
  const blogs = data.blogs.nodes;
  return (
    <>
      <SEO title="Blogs" />
      <BlogsPageStyles className="post" id="beginning">
        <h1>Blogs</h1>
        <BlogPostList blogs={blogs} />
      </BlogsPageStyles>
    </>
  );
}

export const query = graphql`
  query BlogQuery {
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
      }
    }
  }
`;
