import { Link } from "gatsby";
import React from "react";
import Img from "gatsby-image";
import styled from "styled-components";

const SingleBlogStyles = styled.div`
  .image {
    width: 200px;
    height: 200px;
  }
`;

const ProjectListStyles = styled.div``;

function SingleBlog({ blog }) {
  const excerpt = blog.excerpt[0].children[0].text;
  console.log(excerpt);
  return (
    <>
      <SingleBlogStyles>
        {/* <Link className="link" href={`/blogs/${blog.slug.current}`}> */}
        {blog.title}
        <Img
          fluid={blog.mainImage.asset.fluid}
          alt={blog.name}
          className="item image"
        />
        <h3 className="item excerpt">{excerpt}</h3>
        <p className="item publishedAt">{blog.publishedAt}</p>
        {/* </Link> */}
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
