import { graphql, Link, useStaticQuery } from "gatsby";
import React, { useState } from "react";
import styled from "styled-components";
import Img from "gatsby-image";

const PhotoFilterStyles = styled.div`
  /* border: solid red 1px; */
  display: flex;
  flex-direction: row;
  font-size: 1.5rem;
  font-family: "Noto sans";
  align-items: center;
  .category {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 110px;
    height: 40px;
    border: solid black 1px;
    background-color: var(--white);
  }
  .Travel {
    border-right: none;
    border-left: none;
  }
  a {
    font-family: "Noto sans";
    color: black;
    text-decoration: none;
    display: block;
  }
  [aria-current] {
    color: grey;
  }
`;

export default function PhotoFilter() {
  const { category, projects } = useStaticQuery(graphql`
    query {
      category: allSanityCategory {
        nodes {
          name
          id
        }
      }
    }
  `);

  return (
    <>
      <PhotoFilterStyles>
        {/* {/* <h3>Click on a button to filter the grid!</h3> */}
        <Link to="/photos">
          <div className="category">All</div>
        </Link>
        {category.nodes.map((category) => (
          <Link to={`/category/${category.name}`} key={category.id}>
            <div className={`category ${category.name}`}>{category.name}</div>
          </Link>
        ))}
      </PhotoFilterStyles>
    </>
  );
}
