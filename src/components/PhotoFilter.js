import { graphql, Link, useStaticQuery } from "gatsby";
import React from "react";
import styled from "styled-components";

const PhotoFilterStyles = styled.div`
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
  const { category } = useStaticQuery(graphql`
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
        <Link to="/photos">
          <div className="category">All</div>
        </Link>
        {category.nodes.map((category) => (
          <Link to={`/photos/${category.name}`} key={category.id}>
            <div className={`category ${category.name}`}>{category.name}</div>
          </Link>
        ))}
      </PhotoFilterStyles>
    </>
  );
}
