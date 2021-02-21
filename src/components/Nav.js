import { graphql, Link, useStaticQuery } from "gatsby";
import React from "react";
import styled from "styled-components";
import Img from "gatsby-image";

const NavStyles = styled.div`
  font-family: "Noto Sans";
  height: 50px;
  margin: 0 auto;
  width: 100%;
  display: grid;
  grid-template-columns: 25% 50% 25%;
  align-items: center;
  background-color: var(--white);
  .logo {
    font-size: 1rem;
    padding: 0 0 0 10px;
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
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    font-size: 1.8rem;
  }

  a {
    text-decoration: none;
    color: black;
  }

  .shopLink {
    pointer-events: none;
  }
  .message {
    font-size: 1.3rem;
    display: none;
  }

  .socialLinksContainer {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    padding: 0 10px 0 0;
  }
  .instagram {
    width: 35px;
    height: 35px;
    transform: translateY(4px);
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
  @media (max-width: 500px) {
    grid-template-columns: 50% 50%;
    grid-template-rows: 50% 50%;
    height: 70px;
    gap: 0;
    .logo {
      font-size: 2.1rem;
      padding-left: 10px;
      grid-column: 1;
    }
    .pageLinks {
      grid-row: 2;
      grid-column: 1 / -1;
      font-size: 1.5rem;
      justify-content: space-between;
      padding: 0 10px;
    }
    .socialLinksContainer {
      grid-column: 2;
      padding: 0 10px 0 0;
    }
  }
`;

export default function Nav() {
  return (
    <NavStyles>
      <div className="logo">
        <Link to="/">Rob Mowe Photography</Link>
      </div>
      <nav role="navigation" className="pageLinks">
        <Link to="/">Gallery</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <a to="/" className="blogLink">
          Blog
          <span className="message"> - coming soon</span>
        </a>
      </nav>
      <div className="socialLinksContainer">
        <div className="socialLink instagram">
          <a
            href="https://www.instagram.com/maggiebettyhomestudio/"
            target="_blank"
            rel="noreferrer"
          >
            <Img
            //   fluid={instagramFluid}
            //   alt={instagramLogo.name}
            // className="instagram"
            />
          </a>
        </div>
        <div className="socialLink email">
          <a href="mailto:maggie@maggiebetty.co.uk">
            <Img
            //   fluid={emailFluid}
            //   alt={emailLogo.name}
            // className="email"
            />
          </a>
        </div>
      </div>
    </NavStyles>
  );
}

// const { logos } = useStaticQuery(graphql`
// query {
//   logos: allSanityLogoImages {
//     nodes {
//       image {
//         asset {
//           fluid(maxHeight: 700) {
//             ...GatsbySanityImageFluid
//           }
//           fixed(width: 30, height: 30) {
//             ...GatsbySanityImageFixed
//           }
//         }
//       }
//       name
//     }
//   }
// }
// `);
