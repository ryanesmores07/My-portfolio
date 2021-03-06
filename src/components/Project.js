import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql, Link } from "gatsby"
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
      <article className="container">
        {projects.map((project, index) => {
          const { title, slug, description, image, github, url, content } =
            project
          return (
            <div className="container-item">
              <Link to={`/projects/${slug}`}>
                <GatsbyImage
                  image={getImage(image)}
                  alt={title}
                  className="image"
                />

                <h2 className="title">{title}</h2>
                <h3 className="description">{description.description}</h3>
              </Link>
            </div>
          )
        })}
      </article>
    </Wrapper>
  )
}

const Wrapper = styled.article`
  width: 100%;

  a {
    color: var(--clr-black);
  }

  .container {
    padding: 3rem;

    color: var(--clr-black);
    display: flex;
    width: 90%;
    margin: 0 auto;
    /* box-shadow: 0 0 1.5rem rgba(0, 0, 0, 0.2); */
    border-radius: 2rem;
    flex-direction: column;
    /* margin-bottom: 3rem; */

    .container-item {
      margin-bottom: 5rem;
    }
  }

  .image {
    /* object-fit: cover; */
    background-size: cover;
    border-radius: 2.5px;

    margin-bottom: 1rem;
    /* border: 1px solid black; */
    /* border-bottom: 0.5px solid black; */
    /* box-shadow: 0 0 1.5rem rgba(0, 0, 0, 0.2); */
  }

  .title {
    font-weight: 300;
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }

  .description {
    font-size: 1.8rem;
    line-height: 3rem;
    font-weight: 200;

    /* margin-bottom: 10rem; */
  }

  @media (min-width: 450px) {
    .container {
      .container-item {
        &:hover {
          cursor: pointer;
          .title {
            color: blueviolet;
          }
          .image {
            box-shadow: 0 0 1em rgba(0, 0, 0, 0.3);
            transition: all 0.1s ease-in-out;
          }
        }
      }

      .image {
        margin-bottom: 2rem;
      }

      .title {
        font-size: 3rem;
      }

      .description {
      }
    }
  }

  @media (min-width: 768px) {
    .container {
      max-width: 1400px;
      display: grid;
      position: relative;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: repeat(8, 15rem);
      padding-bottom: 0;

      .container-item {
        width: 90%;
      }

      .title {
        font-size: 2.5rem;
      }

      .description {
        max-width: 30ch;
        font-size: 1.9rem;
      }
    }
  }

  .container-item:nth-of-type(1) {
    grid-column: 1 / 2;
    grid-row: 1 / span 2;
  }

  .container-item:nth-of-type(2) {
    grid-column: 2 / 3;
    grid-row: 2 / span 2;
  }

  .container-item:nth-of-type(3) {
    grid-column: 1 / 2;
    grid-row: 5 / span 2;
  }

  .container-item:nth-of-type(4) {
    grid-column: 2 / 3;
    grid-row: 6 / span 2;
  }

  .container-item:nth-of-type(even) {
    justify-self: end;
  }

  @media (min-width: 1170px) {
    .container {
      width: 100%;

      .container-item {
        width: 85%;
      }
    }
  }
`

export default Project
