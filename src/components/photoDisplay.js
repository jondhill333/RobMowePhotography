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
  position: relative;
  .hoverOverlay {
    width: 100%;
    height: 100%;
    background-color: #cdcfcf;
    top: 0;
    left: 0;
    opacity: 0;
    position: absolute;
    transition: all 0.25s ease-in-out;
  }
  .hoverOverlay:hover {
    opacity: 0.6;
  }
  .hoverOverlay:hover .photoDescription {
    bottom: 5px;
    opacity: 1;
  }

  .photoDescription {
    position: absolute;
    font-size: 1.5rem;
    bottom: -15px;
    height: 20px;
    width: 200px;
    transition: all 0.25s ease-in-out;
    padding: 0 10px;
    font-family: "Noto sans";
    opacity: 0;
  }
`;

function SinglePhoto({ photo }) {
  return (
    <>
      <SinglePhotoStyles>
        <div>
          <Img fluid={photo.image.asset.fluid} className="image" />
        </div>
        <div className="hoverOverlay">
          {" "}
          <div className="photoDescription">{photo.description}</div>
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
