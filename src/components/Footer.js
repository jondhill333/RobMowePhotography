import React from "react";
import styled from "styled-components";

const FooterStyles = styled.div`
  height: 50px;
  width: 100%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-size: 1.3rem;
  font-family: "Noto Sans";
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
          <a
            href="https://jonhill.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Jon Hill
          </a>
        </div>
      </FooterStyles>
    </>
  );
}
