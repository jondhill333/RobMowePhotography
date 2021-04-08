import { Link } from "gatsby";
import React from "react";
import Img from "gatsby-image";
import styled from "styled-components";

const SingleBlogStyles = styled.div`
  .link {
    display: flex;
    flex-direction: row;
    margin-bottom: 2%;
  }
  a {
    color: black;
    text-decoration: none;
  }
  .image {
    width: 400px;
    height: 300px;
    transition: all 0.3s ease-in-out;
  }
  .blogDetails {
    padding: 3% 2%;
    > * {
      margin: 2% 0;
    }

    .title {
      font-size: 3rem;
    }
    .excerpt {
      font-size: 2rem;
    }
    .publishedAt {
      font-size: 1.6rem;
    }
  }

  :hover .title {
    text-decoration: underline;
  }
  :hover .image {
    transform: scale(1.01);
  }
  @media (max-width: 1100px) {
    .image {
      width: 280px;
      height: 200px;
    }
  }
  @media (max-width: 900px) {
    .link {
      flex-direction: column;
      justify-content: center;
      width: 95%;
    }
    .image {
      width: auto;
      object-fit: contain;
      /* height: 300px; */
    }
  }
`;

const ProjectListStyles = styled.div``;

function SingleBlog({ blog }) {
  const excerpt = blog.excerpt[0].children[0].text;
  return (
    <>
      <SingleBlogStyles>
        <Link className="link" to={`/blogs/${blog.slug.current}`}>
          <Img
            fluid={blog.mainImage.asset.fluid}
            alt={blog.name}
            className="item image"
          />
          <div className="blogDetails">
            <h3 className="title">{blog.title}</h3>
            <p className="item excerpt">{excerpt}</p>
            <p className="item publishedAt">{blog.publishedAt}</p>
          </div>
        </Link>
      </SingleBlogStyles>
    </>
  );
}

export default function BlogPostList({ blogs }) {
  return (
    <>
      <ProjectListStyles>
        {blogs.map((blog) => (
          <SingleBlog key={blog.title} blog={blog} />
        ))}
      </ProjectListStyles>
    </>
  );
}
