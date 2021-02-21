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
  .messageContainer {
    width: 60%;
  }
`;

export default function ContactPage({ data }) {
  return (
    <>
      <SEO title="Contact" />
      <ContactPageStyles>
        <div className="messageContainer">This is the contact page</div>
        {/* <form>
          <label>
            Name:
            <input type="text" name="name" />
          </label>
          <input type="submit" value="Submit" />
        </form> */}
      </ContactPageStyles>
    </>
  );
}
