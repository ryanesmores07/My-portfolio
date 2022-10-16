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
      <article className=" container">
        {projects.map((project, index) => {
          const { title, slug, description, image, github, url, content } =
            project
          return (
            <div className="container-item" key={index}>
              <Link to={`/projects/${slug}`}>
                <GatsbyImage
                  image={getImage(image)}
                  alt={title}
                  className="image content"
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
  overflow: hidden;

  a {
    color: var(--clr-black);
  }

  .content {
    box-shadow: 0 0.125rem 1.25rem 0 rgba(0, 0, 0, 0.3);
    transition: transform 150ms ease;
  }

  .container {
    padding: 3rem;
    display: flex;
    width: 90%;
    margin: 0 auto;
    flex-direction: column;
    /* margin-bottom: 3rem; */

    .container-item {
      margin-bottom: 5rem;

      &:hover {
        .title {
          color: blueviolet;
        }
      }

      .image {
        border-radius: 2.5px;
        background-size: cover;
        max-width: 100%;
        margin-bottom: 1rem;
        /* height: 38rem; */
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
      }

      &:hover .image {
        cursor: pointer;
        transform: translateY(-0.35em) scale(1.01);
      }
    }
  }

  @media (min-width: 450px) {
    .container {
      .container-item {
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

  .container-item:nth-of-type(5) {
    grid-column: 1 / 2;
    grid-row: 9 / span 2;
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
