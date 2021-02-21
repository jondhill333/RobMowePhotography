import * as React from "react";
import styled from "styled-components";
// import PictureDisplay from "../components/picturesDisplay";
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
        This is the photos page
        {/* <PictureDisplay pictures={data.pictures.nodes} /> */}
      </PhotosPageStyles>
    </>
  );
}

// export const query = graphql`
//   query PictureQuery {
//     pictures: allSanityProductImages {
//       nodes {
//         image {
//           asset {
//             fluid(maxHeight: 700) {
//               ...GatsbySanityImageFluid
//             }
//             fixed(width: 270, height: 270) {
//               ...GatsbySanityImageFixed
//             }
//           }
//         }
//         name
//         description
//         slug {
//           current
//         }
//       }
//     }
//   }
// `;
