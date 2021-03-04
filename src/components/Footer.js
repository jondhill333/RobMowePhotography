import React from "react";
import styled from "styled-components";

const FooterStyles = styled.div`
  height: 50px;
  width: 100%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1.3rem;
  font-family: "Noto Sans";
  .copywrite {
    padding-left: 20px;
  }
  .symbol {
    color: var(--maisieBrown);
  }
  .websiteBy {
    padding-right: 20px;
    a {
      text-decoration: none;
      color: var(--maisieBrown);
    }
  }
`;

export default function Footer() {
  return (
    <>
      <FooterStyles>
        <div className="copywrite">
          Rob Mowe<span className="symbol"> &#169;</span> 2021
        </div>
        <div className="websiteBy">
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
