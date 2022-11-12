import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { HiOutlineArrowRight } from "react-icons/hi"
import ProjectList from "./ProjectList"

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

const SelectedProjects = () => {
  const data = useStaticQuery(query)
  const projects = data.info.nodes

  return (
    <Wrapper>
      <div className="container">
        <div className="text-container" id="projects">
          <h2>
            Selected <span className="text-gradient">Projects</span>
          </h2>
          <p>
            Over the years, I've partnered with startups of all sizes and
            various stages to create some truly unique products. Here are a few
            that I feel were the most challenging yet rewarding.
          </p>
        </div>
        <ProjectList projects={projects} />
        <div className="viewall-container">
          <Link to="/">View All Projects</Link>
          <div className="icon-bg">
            <HiOutlineArrowRight className="second-arrow" />
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.article`
  overflow: hidden;
  background-color: black;
  color: white;
  padding: 8rem 2rem;
  .container {
    position: relative;
    .text-gradient {
      background: linear-gradient(to right, #bd10c3, #cd1590, #d2177e, #eb9fed);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .text-container {
      h2 {
        font-size: 4rem;
        font-weight: 700;
        line-height: 1.2;
        margin-bottom: 2rem;
      }
      p {
        font-size: 1.8rem;
        color: var(--clr-grey-9);
        width: 95%;
        margin-bottom: 7rem;
      }
    }

    .viewall-container {
      display: flex;
      align-items: center;
      position: absolute;

      a {
        background: linear-gradient(
          to right,
          #bd10c3,
          #cd1590,
          #d2177e,
          #eb9fed
        );
        color: white;
        border-radius: 50rem;
        padding: 1.2rem 7rem 1.2rem 4rem;
        font-size: 1.8rem;
        font-weight: 400;
      }
      .icon-bg {
        background-color: white;
        /* border-radius: 50%; */
        padding: 1rem;
        width: 4.5rem;
        height: 4.5rem;
        border-radius: 50%;
        position: absolute;
        right: 0.3rem;
        .second-arrow {
          width: 2rem;
          height: 2rem;
          position: absolute;
          color: black;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
      }
    }
  }

  @media (min-width: 768px) {
    padding: 15rem 4rem;
    .container {
      .text-container {
        h2 {
          font-size: 6rem;
          font-weight: 500;
        }
        p {
          font-size: 1.8rem;
          max-width: 70%;
        }
      }
    }
  }

  @media (min-width: 1164px) {
    padding: 15rem 5rem 32rem;
    position: relative;
    .container {
      .text-container {
        padding-inline: 3rem;
        h2 {
        }
        p {
          max-width: 45%;
        }
      }
      .viewall-container {
        position: absolute;
        right: 14rem;
        bottom: 0;
        a {
        }
        .icon-bg {
          right: 0.3rem;

          .second-arrow {
          }
        }
      }
    }
  }
  @media (min-width: 1440px) {
    padding: 15rem 10rem 32rem;

    .container {
      margin: 0 auto;
      max-width: 120rem;
      .text-container {
        h2 {
        }
        p {
        }
      }
      .viewall-container {
        right: 18rem;

        a {
        }
        .icon-bg {
          .second-arrow {
          }
        }
      }
    }
  }
  /* @media (min-width: 1920px) {
    padding-inline: 38rem;
    .text-container {
      h2 {
      }
      p {
      }
    }
    .viewall-container {
      right: 53.5rem;

      a {
      }
      .icon-bg {
        .second-arrow {
        }
      }
    }
  } */
`

export default SelectedProjects
