import * as React from "react";
import styled from "styled-components";
import PhotoDisplay from "../components/photoDisplay";
import PhotoFilter from "../components/PhotoFilter";
import SEO from "../components/SEO";

const PhotosPageStyles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export default function PhotosPage({ data }) {
  return (
    <>
      <SEO title="Photos" />
      <PhotosPageStyles>
        <h1>Photos</h1>
        <PhotoFilter />
        <PhotoDisplay photos={data.images.nodes} />
      </PhotosPageStyles>
    </>
  );
}

export const query = graphql`
  query ImageQuery {
    images: allSanityImages {
      nodes {
        image {
          asset {
            fluid(maxHeight: 800) {
              ...GatsbySanityImageFluid
            }
            fixed(width: 400, height: 400) {
              ...GatsbySanityImageFixed
            }
          }
        }
        name
        description
        slug {
          current
        }
      }
    }
  }
`;
