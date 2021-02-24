import { graphql, Link, useStaticQuery } from "gatsby";
import React from "react";
import styled from "styled-components";
import Img from "gatsby-image";

const PhotoFilterStyles = styled.div``;

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
        <button>
          <Link to="/photos" className="category">
            <div className="name">All</div>
          </Link>
        </button>
        {category.nodes.map((category) => (
          <button key={category.id}>
            <Link
              to={`/category/${category.name}`}
              className="category"
              key={category.id}
            >
              <div className="name">{category.name}</div>
            </Link>
          </button>
        ))}
      </PhotoFilterStyles>
    </>
  );
}
