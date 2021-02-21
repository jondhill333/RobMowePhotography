import * as React from "react";
import styled from "styled-components";
// import Img from "gatsby-image";
// import SEO from "../components/SEO";

const HomePageStyles = styled.div`
  height: 100%;
  /* background-color: #f7f7f7; */
`;

export default function HomePage({ data }) {
  return (
    <>
      {/* <SEO title="Home" /> */}
      <HomePageStyles>This is the home page</HomePageStyles>
    </>
  );
}
// export const query = graphql`
//   query logoQuery {
//     logos: allSanityLogoImages {
//       nodes {
//         image {
//           asset {
//             fluid(maxHeight: 700) {
//               ...GatsbySanityImageFluid
//             }
//             fixed(width: 325, height: 220) {
//               ...GatsbySanityImageFixed
//             }
//           }
//         }
//         name
//       }
//     }
//   }
// `;
