import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { FaGithubSquare, FaShareSquare } from "react-icons/fa"

const ProjectTemplate = ({
  pageContext: { title: projectTitle },
  data: { info: datas },
}) => {
  const { title, github, slug, url, image, content, description } = datas

  return (
    <Wrapper>
      <div className="container">
        <div className="project-title">
          <h2>{projectTitle}</h2>
        </div>

        <div className="project-container">
          <GatsbyImage
            image={getImage(datas.image.gatsbyImageData)}
            alt="project-photo"
          />
          <section className="content">
            <h3>{title}</h3>
            <p>{description.description}</p>
            <div className="stack">
              <span>{content.stack}</span>
            </div>
            <div className="project-links">
              <a href={github}>
                <FaGithubSquare />
              </a>
              <a href={url}>
                <FaShareSquare />
              </a>
            </div>
          </section>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.main`
  background-color: var(--clr-grey-9);
  .container {
    padding: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 0 auto;
    max-width: 90%;

    .project-title {
      h2 {
        font-weight: 400;
      }
    }

    .project-container {
      background-color: var(--clr-white);
      width: 80%;
      /* border: 1px solid black; */

      .content {
        padding: 2rem 1rem;
        h3 {
          text-transform: uppercase;
          letter-spacing: 0.1rem;
          margin-bottom: 0;
        }

        a {
          margin-right: 1rem;
          font-size: 1.5rem;
        }

        .stack {
          display: inline-block;
          font-size: 1.2rem;
          margin: 0 0 0.5rem;

          padding: 0rem 0.5rem;
          letter-spacing: 0.1rem;
          text-transform: uppercase;
          border-radius: 1.25px;
          background-color: var(--clr-grey-8);
        }
      }
    }
  }
`

export const query = graphql`
  query getSingleProject($title: String) {
    info: contentfulProject(title: { eq: $title }) {
      description {
        description
      }
      title
      slug
      url
      github
      image {
        gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
      }
      content {
        stack
      }
    }
  }
`

export default ProjectTemplate
