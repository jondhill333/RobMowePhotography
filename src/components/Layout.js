import React from "react";
import styled from "styled-components";
import Nav from "./Nav";
import Footer from "./Footer";
// import "normalize.css";
import GlobalStyles from "../styles/GlobalStyles";
import Typography from "../styles/Typography";

const ContentStyles = styled.div`
  width: 100vw;
  margin: 0 auto;
  background-color: var(--backgroundGrey);
  height: 100vh;
  overflow-x: hidden;

  @media (max-width: 1000px) {
    width: 95%;
  }
`;

export default function Layout({ children }) {
  return (
    <>
      <GlobalStyles />
      <Typography />
      <ContentStyles>
        <Nav />
        {children}
        <Footer />
      </ContentStyles>
    </>
  );
}
