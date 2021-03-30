import { graphql, Link, useStaticQuery } from "gatsby";
import React from "react";
import styled from "styled-components";
import Img from "gatsby-image";

const NavStyles = styled.div`
  height: 50px;
  margin: 0 auto;
  width: 100%;
  display: grid;
  grid-template-columns: 25% 50% 25%;
  align-items: center;
  background-color: var(--white);
  .logo {
    font-family: "Crimson Text";
    font-size: 2.5rem;
    padding: 0 0 0 5%;
    color: black;
    display: flex;
    flex-direction: row;
    align-items: center;
    > a {
      display: flex;
      align-items: center;
    }
  }
  .image {
    width: 60px;
    height: 60px;
  }

  .pageLinks {
    font-family: "Noto Sans";
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    font-size: 1.8rem;
  }

  a {
    text-decoration: none;
    color: black;
  }

  .blogLink {
  }

  .socialLinksContainer {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    padding: 0 5% 0 0;
  }
  .instagram {
    width: 35px;
    height: 35px;
    transform: translateY(2px);
  }
  .email {
    width: 40px;
    height: 40px;
    transform: translateY(1px);
  }
  @media (max-width: 750px) {
    .logo {
      font-size: 2rem;
    }
    .pageLinks {
      font-size: 1.5rem;
    }
    .instagram {
      width: 32px;
      height: 32px;
      transform: translateY(4px);
    }
    .email {
      width: 36px;
      height: 36px;
      transform: translateY(1px);
    }
  }
  [aria-current] {
    color: var(--maisieBrown);
  }
  @media (max-width: 500px) {
    grid-template-columns: 70% 30%;
    grid-template-rows: 50% 50%;
    height: 70px;
    gap: 0;
    .logo {
      font-size: 2.1rem;
      padding-left: 8px;
      grid-column: 1;
    }
    .pageLinks {
      grid-row: 2;
      grid-column: 1 / -1;
      font-size: 1.5rem;
      justify-content: space-between;
      padding: 0 8px;
    }
    .socialLinksContainer {
      grid-column: 2;
      padding: 0 5px 0 0;
    }
    .instagram {
      transform: translateY(1px);
    }
    .email {
      transform: none;
    }
  }
`;

export default function Nav() {
  const { otherImages } = useStaticQuery(graphql`
    query {
      otherImages: allSanityOtherImages {
        nodes {
          image {
            asset {
              fluid(maxHeight: 700) {
                ...GatsbySanityImageFluid
              }
              fixed(width: 30, height: 30) {
                ...GatsbySanityImageFixed
              }
            }
          }
          name
        }
      }
    }
  `);

  const instagramLogo = otherImages.nodes.filter(
    (image) => image.name === "Instagram"
  );
  const instagramFluid = instagramLogo[0].image.asset.fluid;

  const emailLogo = otherImages.nodes.filter((image) => image.name === "Email");
  const emailFluid = emailLogo[0].image.asset.fluid;

  return (
    <NavStyles>
      <div className="logo">
        <Link to="/">Rob Mowe Photography</Link>
      </div>
      <nav role="navigation" className="pageLinks">
        <Link to="/photos">Photos</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/blogs">Blog</Link>
      </nav>
      <div className="socialLinksContainer">
        <div className="socialLink instagram">
          <a
            href="https://www.instagram.com/robmowe/"
            target="_blank"
            rel="noreferrer"
          >
            <Img
              fluid={instagramFluid}
              alt={instagramLogo.name}
              className="instagram"
            />
          </a>
        </div>
        <div className="socialLink email">
          <a href="mailto:robmowe@hotmail.co.uk">
            <Img fluid={emailFluid} alt={emailLogo.name} className="email" />
          </a>
        </div>
      </div>
    </NavStyles>
  );
}
