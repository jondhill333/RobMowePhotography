import React from "react";
import styled from "styled-components";
import Img from "gatsby-image";
import PortabeText, { propTypes } from "@sanity/block-content-to-react";
import urlBuilder from "@sanity/image-url";

const ArticleStyles = styled.div`
  font-family: "Crimson Text";
  font-size: 2rem;
  display: grid;
  line-height: 1.1.%;
  max-width: 2000px;
  margin: 0 20px;
  grid-gap: 10px 10px;
  grid-template-columns: repeat(12, 1fr);
  .title {
    grid-column: 3 / -3;
    text-align: center;
  }
  .mainImage {
    grid-column: 2 / -2;
  }
  .text {
    grid-column: 3 / -3;
    figure {
      height: 450px;
      margin: 0;
      text-align: center;
      img {
        height: 95%;
        margin: 0 auto;
      }
    }
  }
  h1,
  h2,
  h3,
  p {
    margin: 20px 0px;
  }

  figcaption {
    font-size: 1.5rem;
  }

  @media (max-width: 500px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 98%;
    max-width: 98%;
    margin: 10px 20px 50px 10px;
    gap: 0;

    > blockquote {
      font-size: 40px;
    }
    h2 {
      text-align: center;
    }
  }
`;

const urlFor = (source) =>
  urlBuilder({ projectId: "qfg70uq3", dataset: "production" }).image(source);
const serializer = {
  types: {
    mainImage: (props) => (
      <figure>
        <img src={urlFor(props.node.asset)} alt={props.node.alt} />

        <figcaption>{props.node.caption}</figcaption>
      </figure>
    ),
  },
};
export default function BlogPage({ data }) {
  const portableTextData = data.blog._rawBody;
  const otherBlogData = data.blog;

  return (
    <>
      {/* <SEO title='Important Info' /> */}
      <ArticleStyles>
        <h1 className="title">{otherBlogData.title}</h1>
        <Img
          fluid={otherBlogData.mainImage.asset.fluid}
          alt={otherBlogData.name}
          className="mainImage"
        />
        <PortabeText
          blocks={portableTextData}
          serializers={serializer}
          className="text"
        ></PortabeText>
      </ArticleStyles>
    </>
  );
}

export const query = graphql`
  query($slug: String!) {
    blog: sanityBlogs(slug: { current: { eq: $slug } }) {
      mainImage {
        asset {
          fluid(maxHeight: 400) {
            ...GatsbySanityImageFluid
          }
          fixed(width: 500, height: 500) {
            ...GatsbySanityImageFixed
          }
        }
        caption
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
`;
