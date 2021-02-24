import React from "react";
import Img from "gatsby-image";
import styled from "styled-components";

const PhotoDisplayStyles = styled.div`
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

const SinglePhotoStyles = styled.div`
  .image {
  }
`;

function SinglePhoto({ photo }) {
  // console.log(photo);

  // const fluidImage = image.image.asset.fluid;
  // console.log(fluidImage);
  return (
    <>
      <SinglePhotoStyles>
        <div>
          <Img
            fluid={photo.image.asset.fluid}
            // fixed={image.image.asset.fixed}
            // alt={photo.name}
            className="image"
          />
        </div>
      </SinglePhotoStyles>
    </>
  );
}

export default function PhotoDisplay({ photos }) {
  return (
    <>
      <PhotoDisplayStyles>
        {photos.map((photo) => (
          <SinglePhoto key={photo.name} photo={photo} />
        ))}
      </PhotoDisplayStyles>
    </>
  );
}
