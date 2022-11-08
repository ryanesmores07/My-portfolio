import React from "react"
import { graphql, Link } from "gatsby"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { FaGithubSquare, FaShareSquare } from "react-icons/fa"
import { AiOutlineLeft } from "react-icons/ai"

import Contact from "../../components/Contact"
const ProjectTemplate = ({
  pageContext: { title: projectTitle },
  data: { info: datas },
}) => {
  const { title, github, url, content, description } = datas

  return (
    <Wrapper>
      <div className="return-container">
        <AiOutlineLeft className="icon" />
        <Link className="return" to="/projects">
          Projects
        </Link>
      </div>

      <div className="container">
        <div className="project-title">
          <h2>{projectTitle}</h2>
        </div>

        <div className="project-container">
          <GatsbyImage
            className="image"
            image={getImage(datas.image.gatsbyImageData)}
            alt="project-photo"
          />
          <section className="content">
            <h3 className="title">{title}</h3>
            <p className="description">{description.description}</p>
            <div className="stack">
              {content.stack.map((item, index) => {
                return <span>{item}</span>
              })}
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
      <Contact />
    </Wrapper>
  )
}

const Wrapper = styled.main`
  background-color: var(--clr-grey-10);

  .return-container {
    .icon {
      font-size: 2rem;
      margin-right: 1rem;
    }
    padding: 3rem 5rem 0;
    display: flex;
    align-items: center;
    .return {
      font-size: 2rem;
      letter-spacing: 0.1rem;
      font-weight: 200;
      color: var(--clr-black);
    }
    &:hover {
      transform: translateY(-0.2rem);
      transition: 250ms ease;
    }
  }
  .container {
    padding: 5rem 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 0 auto;

    .project-title {
      h2 {
        font-weight: 600;
        font-size: 3rem;
        margin-bottom: 3rem;
      }
    }

    .project-container {
      /* background-color: var(--clr-white); */
      width: 80%;
      /* border: 1px solid black; */

      .image {
        box-shadow: var(--dark-shadow);
      }

      .image::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(
          to bottom right,
          var(--clr-primary-5),
          #222
        );
        opacity: 0.85;
        transition: var(--transition);
      }

      .image:hover::after {
        opacity: 0;
      }

      .content {
        padding: 3rem 2rem;
        background-color: var(--clr-white);
        box-shadow: var(--dark-shadow);
        z-index: 5;

        .title {
          text-transform: uppercase;
          letter-spacing: 0.1rem;
          margin-bottom: 1rem;
          font-size: 2rem;
          font-weight: 700;
        }

        .description {
          margin-bottom: 0.7rem;
          color: black;
          font-size: 1.6rem;
        }

        a {
          margin-right: 0.5rem;
          color: black;
          font-size: 1.3rem;
        }

        .stack span {
          display: inline-block;
          font-size: 1rem;
          margin: 0 0.5rem 0.5rem 0;
          padding: 0.5rem 1rem;
          letter-spacing: 0.1rem;
          text-transform: uppercase;
          border-radius: 50rem;
          color: black;
          background-color: var(--clr-grey-10);
        }
      }
    }
  }

  @media (min-width: 768px) {
    .container {
      .project-container {
        width: 100%;
        display: grid;

        grid-template-columns: repeat(12, 1fr);

        .image {
          grid-column: 2 / span 8;
          grid-row: 1 / 1;
        }

        .content {
          grid-column: 6 / -2;
          grid-row: 1 / 1;
          /* height: 20rem; */
          align-self: center;
          display: flex;
          flex-direction: column;
          justify-content: center;

          .title {
            font-size: 2.2rem;
          }
          .description {
            font-size: 1.5rem;
          }
        }
      }
    }
  }

  @media (min-width: 1170px) {
    .container {
      .project-container {
        .content {
          a {
            font-size: 2rem;
          }
          .title {
            font-size: 3rem;
          }
          .description {
            font-size: 2rem;
          }

          .stack span {
            font-size: 1.3rem;
            margin-bottom: 1rem;
          }
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
