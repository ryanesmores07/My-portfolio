import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { HiOutlineArrowRight } from "react-icons/hi"

const ProjectList = ({ projects }) => {
  return (
    <Wrapper>
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
              {content.stack.map(i => {
                return <h4 className="stacks">{i}</h4>
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
    </Wrapper>
  )
}

const Wrapper = styled.article`
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
`

export default ProjectList
