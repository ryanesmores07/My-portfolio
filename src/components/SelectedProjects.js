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
      <div className="text-container" id="projects">
        <h2>
          Selected <span className="text-gradient">Projects</span>
        </h2>
        <p>
          Over the years, I've partnered with startups of all sizes and various
          stages to create some truly unique products. Here are a few that I
          feel were the most challenging yet rewarding.
        </p>
      </div>
      <ProjectList projects={projects} />
      <div className="viewall-container">
        <Link to="/">View All Projects</Link>
        <div className="icon-bg">
          <HiOutlineArrowRight className="second-arrow" />
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.article`
  background-color: var(--clr-grey-10);
  color: black;
  padding: 8rem 2rem;

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
      color: var(--clr-black);
      width: 95%;
      margin-bottom: 7rem;
    }
  }

  .viewall-container {
    display: flex;
    align-items: center;
    position: relative;

    a {
      background: linear-gradient(to right, #bd10c3, #cd1590, #d2177e, #eb9fed);
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
      right: 9.7rem;
      .second-arrow {
        width: 2rem;
        height: 2rem;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }
  }
  .projects-container {
    padding: 2rem;
    background-color: #fff;
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
      color: black;
      margin-bottom: 2rem;
    }
    .button-container {
      display: flex;
      align-items: center;
      gap: 1rem;
      .btn {
        color: black;
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

export default SelectedProjects
