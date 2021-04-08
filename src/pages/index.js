import * as React from "react";
import styled from "styled-components";
import Img from "gatsby-image";
import SEO from "../components/SEO";

const HomePageStyles = styled.div`
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
    font-family: "Noto Sans";
    width: 50%;
    font-size: 1.8rem;
    text-align: justify;
    /* padding: 0 6% 0 0; */
  }
  .aboutTextContainer {
    width: 80%;
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
    .profilePictureContainer {
      align-items: flex-start;
      /* justify-content: start; */
    }
    .profilePicture {
      width: 250px;
      height: 250px;
    }
    .about {
      display: flex;
      justify-content: center;
    }
    .aboutTextContainer {
      width: 95%;
      /* padding: 0 10px 0 10px; */
    }
  }
`;

export default function HomePage({ data }) {
  const profilePic = data.images.nodes.filter(
    (image) => image.name === "Profile Picture"
  );
  const profilePicFluid = profilePic[0].image.asset.fluid;
  // const profilePicFixed = profilePic[0].image.asset.fixed;
  return (
    <>
      <SEO title="Home" />
      <HomePageStyles>
        <section className="profilePictureContainer">
          <Img
            fluid={profilePicFluid}
            // fluid={profilePicFixed}
            alt={profilePic.name}
            className="profilePicture"
          />
        </section>
        <section className="about">
          <div className="aboutTextContainer">
            <p>
              My name is Rob. I have worked in the Travel Industry for 17 years
              in which time I have been fortunate to live in many countries,
              including Italy, France, the USA and Croatia.
            </p>
            <p>
              I enjoy writing about my experiences and I am also a keen and
              creative photographer. This site is a place for me to store my
              thoughts and photos. Hope you enjoy.
            </p>
            <p>
              {" "}
              Please check me out on instagram or send me an email if you wish
              to get in contact.
            </p>
          </div>
        </section>
      </HomePageStyles>
    </>
  );
}
export const query = graphql`
  query OtherImageQuery {
    images: allSanityOtherImages {
      nodes {
        image {
          asset {
            fluid(maxWidth: 700) {
              ...GatsbySanityImageFluid
            }
            fixed(width: 400, height: 400) {
              ...GatsbySanityImageFixed
            }
          }
        }
        name
      }
    }
  }
`;
