import React from "react";
import styled from "styled-components";
import Img from "gatsby-image";
import PortabeText, { propTypes } from "@sanity/block-content-to-react";
import urlBuilder from "@sanity/image-url";

const ArticleStyles = styled.div`
  font-family: "Crimson Text";
  font-size: 1.8rem;
  display: grid;
  max-width: 2000px;
  margin: 0 20px;
  grid-gap: 10px 10px;
  grid-template-columns: 2fr 2fr 10fr 2fr 2fr;
  h1,
  h2,
  h3,
  p {
    margin: 10px 0px;
  }
  > * {
    grid-column: 3;
  }

  > figure {
    margin: 0;
    grid-column: 2 / -2;
  }
  figcaption {
    font-size: 1.5rem;
  }

  > blockquote {
    grid-column: 1 / -1;
    font-size: 60px;
    font-style: italic;
    text-align: center;
    margin: 0;
    /* height: 100px; */
    p {
      margin: 20px 0px;
    }
  }

  .tip {
    padding: 10px;
    grid-row: span 5;
    align-self: start;
  }

  .tip-left {
    grid-column: 1 / span 2;
    text-align: right;
    /* border-right: 2px solid var(--red); */
  }

  .tip-right {
    grid-column: span 2 / -1;
    /* border-left: 2px solid var(--red); */
  }

  img {
    max-width: 100%;
    width: 100%;
    object-fit: contain;
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
  urlBuilder({ projectI: "qfg70uq3", dataset: "production" }).image(source);
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
  const testblogs = data.blogs.nodes[0].body;
  console.log(testblogs);
  console.log(data);

  return (
    <>
      {/* <SEO title='Important Info' /> */}
      <ArticleStyles className="post" id="beginning">
        <PortabeText blocks={testblogs} serializers={serializer}></PortabeText>
      </ArticleStyles>
    </>
  );
}

export const query = graphql`
  query BlogQueryTest {
    blogs: allSanityBlogs {
      nodes {
        mainImage {
          asset {
            fixed {
              base64
              srcWebp
              srcSetWebp
            }
            fluid {
              base64
              srcWebp
              srcSetWebp
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
