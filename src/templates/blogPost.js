import React from "react";
import styled from "styled-components";
import Img from "gatsby-image";
import PortabeText from "@sanity/block-content-to-react";
import urlBuilder from "@sanity/image-url";
import { IconButton } from "@chakra-ui/react";
import { FaLongArrowAltLeft } from "@react-icons/all-files/fa/FaLongArrowAltLeft";
import { Link } from "gatsby";
import SEO from "../components/SEO";
import { graphql } from "gatsby";

const ArticleStyles = styled.div`
  font-family: "Crimson Text";
  font-size: 2rem;
  display: grid;
  line-height: 1.1.%;
  max-width: 2000px;
  margin: 0 20px;
  grid-gap: 10px 10px;
  grid-template-columns: repeat(12, 1fr);
  .backLink {
    grid-column: 2;
  }
  .backLinkButton {
    width: 50px;
    height: 50px;
    cursor: pointer;
  }
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
    blockquote {
      font-size: 40px;
      margin: 40px 0;
      text-align: center;
      transform: translateX(-1%);
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

  @media (max-width: 1100px) {
    .mainImage {
      grid-column: 1 / -1;
    }
    .text {
      grid-column: 2 / -2;
    }
    .backLink {
      grid-column: 1;
    }
    img {
      width: 500px;
      object-fit: contain;
    }
  }

  @media (max-width: 700px) {
    display: flex;
    flex-direction: column;

    max-width: 98%;
    margin: 1% 1%;
    gap: 0;
    .text {
      blockquote {
        font-size: 30px;
        margin: 20px 0;
      }
      figure {
        height: 300px;
        margin-bottom: 30px;
      }
      img {
        width: 350px;
        object-fit: contain;
      }
    }
  }

  /* @media (max-width: 400px) {
    width: 98%;
    margin: 0 auto;
    text-align: start;
    .backLink {
      margin: 0;
    }
  } */
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
      <SEO title="A blog by" />
      <ArticleStyles>
        <Link className="backLink" to="/blogs">
          <IconButton
            className="backLinkButton"
            aria-label="Navigate back to blogs page"
            icon={<FaLongArrowAltLeft />}
          />
        </Link>
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
        <Link className="backLink" to="/blogs">
          <IconButton
            className="backLinkButton"
            aria-label="Navigate back to blogs page"
            icon={<FaLongArrowAltLeft />}
          />
        </Link>
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
    }
  }
`;
