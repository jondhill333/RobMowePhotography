import React from "react";
import Img from "gatsby-image";
import styled from "styled-components";

const ImageDisplayStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 400px);
  gap: 2rem;
  width: 95%;
  justify-content: center;
  justify-items: center;
  margin: 2rem auto;
  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 280px);
    gap: 2rem;
  }
  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 280px);
  }
  @media (max-width: 560px) {
    grid-template-columns: 280px;
    gap: 0;
  }
  div {
    width: 400px;
    height: 400px;
  }
`;

const SingleImageStyles = styled.div`
  .image {
  }
`;

function SingleImage({ image }) {
  // console.log(image);

  // const fluidImage = image.image.asset.fluid;
  // console.log(fluidImage);
  return (
    <>
      <SingleImageStyles>
        <div>
          <Img
            fluid={image.image.asset.fluid}
            // fixed={image.image.asset.fixed}
            alt={image.name}
            className="image"
          />
        </div>
      </SingleImageStyles>
    </>
  );
}

export default function ImageDisplay({ images }) {
  return (
    <>
      <ImageDisplayStyles>
        {images.map((image) => (
          <SingleImage key={image.name} image={image} />
        ))}
      </ImageDisplayStyles>
    </>
  );
}
