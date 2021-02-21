import * as React from "react";
import styled from "styled-components";
// import SEO from "../components/SEO";
import Img from "gatsby-image";

const AboutPageStyles = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  .profilePictureContainer {
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .profilePicture {
    width: 400px;
    height: 400px;
    border-radius: 50%;
  }

  .about {
    font-family: "GlacialIndifference";
    width: 50%;
    font-size: 1rem;
    text-align: justify;
    padding: 0 4% 0 0;
  }
  @media (max-width: 1000px) {
    .profilePicture {
      width: 350px;
      height: 350px;
    }
    .about {
      font-size: 1.7rem;
      padding: 0 2% 0 0;
    }
  }
  @media (max-width: 750px) {
    flex-direction: column;
    padding: 4% 0;
    height: 100%;
    .profilePictureContainer {
      width: 100%;
    }
    .profilePicture {
      width: 300px;
      height: 300px;
    }
    .about {
      padding: 3% 0;
      width: 95%;
    }
  }
  @media (max-width: 400px) {
    .profilePicture {
      width: 250px;
      height: 250px;
    }
  }
`;

export default function AboutPage({ data }) {
  // const profilePic = data.logos.nodes.filter(
  //   (pic) => pic.name === "Profile Picture Two"
  // );
  // const profilePicFluid = profilePic[0].image.asset.fluid;
  return (
    <>
      {/* <SEO title="About" /> */}
      <AboutPageStyles>
        <section className="profilePictureContainer">
          <Img
            // fluid={profilePicFluid}
            // alt={profilePic.name}
            className="profilePicture"
          />
        </section>
        <section className="about">
          <p>
            I’m Maggie and I’m the creator behind the colourful makings at
            Maggie Betty. I live in the Sussex countryside with my husband,
            where I enjoy walking, baking and most of all creating eye-catching
            handmade gifts at home. I have a passion for material and fabrics,
            as well as bright colours and striking patterns.
          </p>
          <p>
            I started sewing as a hobby, making face masks for my friends and
            family. Their encouragement has lead me to take on many more
            projects, and now share my work online with you all - so thank you
            for dropping by to my website. I hope to encourage others discover a
            love for sewing, or find a special gift from one of my many items
            for sale.
          </p>
          <p>
            I lovingly hand craft each piece and take pride in the quality of my
            work. On my Instagram and Etsy pages you’ll find my unique cosmetic
            bags, cushions, headbands, glasses cases and more. If you have a
            special request for a particular colour or pattern, feel free to
            contact me and I’ll do my best to help.
          </p>
        </section>
      </AboutPageStyles>
    </>
  );
}

// export const query = graphql`
//   query profilePictureQuery {
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
