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
            <div className="grid-item" key={index}>
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
    .grid-item {
      padding: 2rem;
      background-color: #1f1f1f;
      margin-bottom: 5rem;

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
        text-align: left;
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
      max-width: 100%;
      padding-right: 15rem;
      /* padding-left: 2rem; */
      .grid-item {
        margin-bottom: 3rem;
      }
    }
  }

  @media (min-width: 1164px) {
    transform: translateY(-10rem);
    margin-bottom: -15rem;
    .container {
      margin: 0 auto;
      display: grid;
      padding-inline: 3rem;
      gap: 5rem;
      grid-template-columns: 1fr 1fr;

      .grid-item {
        margin-bottom: 0;
        transition: transform 200ms ease-out;

        &:hover {
          transform: translateY(-1.5rem);
        }

        padding: 3rem;
        .title {
          max-width: 100%;
        }
      }
      .grid-item:nth-child(even) {
        transform: translateY(10rem);
        transition: transform 200ms ease-out;
        &:hover {
          transform: translateY(8.5rem);
        }
      }
      .grid-item:nth-of-type(1) {
        grid-column: 2 / 3;
        grid-row: 1 / span 1;
        /* background-color: red; */
      }
      .grid-item:nth-of-type(2) {
        grid-column: 1 / 2;
        grid-row: 1 / span 1;
        /* background-color: yellow; */
      }
      .grid-item:nth-of-type(3) {
        grid-column: 2 / 3;
        grid-row: 2 / span 1;
        /* background-color: green; */
      }
      .grid-item:nth-of-type(4) {
        grid-column: 1 / 2;
        grid-row: 2 / span 1;
        /* background-color: pink; */
      }
    }
  }

  @media (min-width: 1440px) {
    .container {
      /* gap: 5rem; */
      max-width: 125rem;
    }
  }
`

export default ProjectList
