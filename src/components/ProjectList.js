import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { HiOutlineArrowRight } from "react-icons/hi"

const ProjectList = ({ projects }) => {
  return (
    <Wrapper>
      <div className="container">
        {projects.map((project, index) => {
          const { title, slug, description, image, github, url, content } =
            project
          return (
            <div className="projects-container" key={index}>
              <Link to={`/projects/${slug}`}>
                <GatsbyImage
                  image={getImage(image)}
                  alt={title}
                  className="image"
                />
                {content.stack.map((i, index) => {
                  return (
                    <h4 key={index} className="stacks">
                      {i}
                    </h4>
                  )
                })}

                <h3 className="title">{title}</h3>

                <div className="button-container">
                  <a href="/" className="btn">
                    VIEW PROJECT
                  </a>
                  <HiOutlineArrowRight className="arrow" />
                </div>
              </Link>
            </div>
          )
        })}
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.article`
  .container {
    .projects-container {
      padding: 2rem;
      background-color: #1f1f1f;
      margin-bottom: 4rem;
      .image {
        margin-bottom: 2rem;
      }
      .stacks {
        display: inline-block;
        color: black;
        margin-right: 1rem;
        background-color: var(--clr-grey-10);
        font-size: 1.2rem;
        border-radius: 50rem;
        padding: 0.3rem 1rem;
        margin-bottom: 2rem;
      }

      .title {
        font-size: 2.4rem;
        font-weight: 600;
        color: white;
        margin-bottom: 2rem;
      }
      .button-container {
        display: flex;
        align-items: center;
        gap: 1rem;
        .btn {
          color: white;
          font-size: 1.4rem;
          letter-spacing: 1px;
          font-weight: 500;
        }
        .arrow {
          background: linear-gradient(
            to right,
            #bd10c3,
            #cd1590,
            #d2177e,
            #eb9fed
          );
          border-radius: 50%;
          color: white;
          padding: 0.5rem;
          width: 2.5rem;
          height: 2.5rem;
        }
      }
    }
  }

  @media (min-width: 768px) {
    .container {
      width: 80%;
    }
  }

  @media (min-width: 1164px) {
    .container {
      width: 100%;
      display: grid;
      gap: 4rem;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: repeat(10, 5rem);
      align-items: center;
      .projects-container {
        padding: 3rem;
        margin-bottom: 0;
      }

      .projects-container:nth-of-type(1) {
        grid-column: 2 / 3;
        grid-row: 2 / span 2;
      }
      .projects-container:nth-of-type(2) {
        grid-column: 1 / 2;
        grid-row: 3 / span 2;
      }
      .projects-container:nth-of-type(3) {
        grid-column: 2 / 3;
        grid-row: 8 / span 2;
      }
      .projects-container:nth-of-type(4) {
        grid-column: 1 / 2;
        grid-row: 9 / span 2;
      }
    }
  }

  @media (min-width: 1440px) {
    .container {
      gap: 5rem;
    }
  }
`

export default ProjectList
