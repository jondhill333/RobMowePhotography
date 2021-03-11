import * as React from "react";
import styled from "styled-components";
import SEO from "../components/SEO";

const ContactPageStyles = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  font-size: 2rem;
  font-family: "Noto Sans";
  .messageContainer {
    width: 35%;
    text-align: center;
  }
  @media (max-width: 400px) {
    .messageContainer {
      width: 90%;
    }
  }
`;

export default function ContactPage({ data }) {
  return (
    <>
      <SEO title="Contact" />
      <ContactPageStyles>
        <div className="messageContainer">
          <p>
            Please check me out on instagram or send me an email if you wish to
            get in contact.{" "}
          </p>
        </div>
      </ContactPageStyles>
    </>
  );
}
