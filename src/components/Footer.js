import { graphql, Link, useStaticQuery } from "gatsby";
import React from "react";
import styled from "styled-components";
import Img from "gatsby-image";

const FooterStyles = styled.div`
  height: 50px;
  width: 100%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-size: 1.5rem;
  div {
    padding-right: 20px;
    a {
      text-decoration: none;
    }
  }
`;

export default function Footer() {
  return (
    <>
      <FooterStyles>
        <div>
          Website by{" "}
          <a href="https://jonhill.netlify.app/" target="_blank">
            Jon Hill
          </a>
        </div>
      </FooterStyles>
    </>
  );
}
