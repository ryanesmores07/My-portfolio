import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const query = graphql`
  {
    info: allContentfulProject {
      nodes {
        github
        slug
        title
        url
        description {
          description
        }
        content {
          stack
        }
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
      }
    }
  }
`

const Project = () => {
  const data = useStaticQuery(query)
  const projects = data.info.nodes
  return (
    <Wrapper>
      {projects.map((project, index) => {
        const { title, slug, description, image, github, url, content } =
          project
        return (
          <section className="container">
            <div className="image-container">
              <GatsbyImage
                image={getImage(image)}
                alt={title}
                className="image"
              />
            </div>

            <h2 className="title">{title}</h2>
            <h3 className="description">{description.description}</h3>
          </section>
        )
      })}
    </Wrapper>
  )
}

const Wrapper = styled.article`
  width: 100%;

  .container {
    padding: 3rem;
    display: flex;
    width: 90%;
    margin: 0 auto;
    /* box-shadow: 0 0 1.5rem rgba(0, 0, 0, 0.2); */
    border-radius: 2rem;
    flex-direction: column;
    margin-bottom: 3rem;
  }

  .image-container {
    .image {
      /* object-fit: cover; */
      background-size: cover;
      border-radius: 2.5px;

      margin-bottom: 1rem;
      border: 1px solid black;
    }
  }

  .title {
    font-weight: 300;
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }

  .description {
    font-size: 2rem;
    line-height: 3rem;
    font-weight: 300;
    color: var(--clr-grey-5);
    /* margin-bottom: 10rem; */
  }
`

export default Project
