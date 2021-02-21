import * as React from "react";
import styled from "styled-components";
import ImageDisplay from "../components/ImagesDisplay";
// import SEO from "../components/SEO";

const PhotosPageStyles = styled.div`
  display: flex;
  justify-content: center;
`;

export default function PhotosPage({ data }) {
  return (
    <>
      {/* <SEO title="Photos" /> */}
      <PhotosPageStyles>
        <ImageDisplay images={data.images.nodes} />
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
            fluid(maxHeight: 700) {
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
