import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import { Contact, ProjectList, SelectedProjects } from "../components"

const Projects = ({
  data: {
    info: { nodes: datas },
  },
}) => {
  console.log(datas)
  return (
    <>
      <Wrapper>
        <div className="container">
          <h1>
            Frontend designs and
            <span className="text-gradient"> Projects</span>
          </h1>
        </div>
        <ProjectList projects={datas} />
        <div className="spacing"></div>
        <Contact />
      </Wrapper>
    </>
  )
}

export const query = graphql`
  {
    info: allContentfulProject {
      nodes {
        title
        slug
        url
        github
        content {
          stack
        }
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
        description {
          description
        }
      }
    }
  }
`

const Wrapper = styled.section`
  background-color: black;
  padding: 2rem 2rem 0rem;

  .text-gradient {
    background: linear-gradient(to right, #bd10c3, #cd1590, #d2177e, #eb9fed);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .container {
    color: white;
    h1 {
      text-align: center;
      font-size: 5rem;
      line-height: 1.2;
      font-weight: 500;
      margin-bottom: 7rem;
    }
    p {
      color: white;
    }
  }
  @media (min-width: 1164px) {
    display: flex;
    flex-direction: column;
    align-items: center;

    .container {
      margin: 0 auto;
      h1 {
        font-size: 6rem;
        max-width: 14ch;
      }
      margin-bottom: 13rem;
    }

    .spacing {
      margin-bottom: 10rem;
    }
  }
  @media (min-width: 1440px) {
    padding-inline: 10rem;
    .container {
      h1 {
      }
    }
  }
  @media (min-width: 1920px) {
    padding-inline: 35rem;
    .container {
      h1 {
      }
    }
  }
`

// const Wrapper = styled.main`
//   .container {
//     max-width: 80%;
//     margin: 0 auto 5rem;

//     h2 {
//       font-weight: 200;
//       font-size: 1.7rem;
//       /* margin-left: 0; */
//     }

//     .title {
//       display: flex;
//       justify-content: center;
//       letter-spacing: -3px;

//       .header {
//         animation: left-to-right calc(var(--transition-duration) + 400ms)
//           ease-out forwards;
//       }

//       h1 {
//         font-size: 5.5rem;
//         font-weight: 300;
//       }
//       span {
//         color: var(--clr-white);
//         -webkit-text-stroke: 1.2px black;
//         font-weight: 700;
//       }
//     }

//     .content {
//       text-align: center;
//       max-width: 50ch;
//       margin: 0 auto;

//       .info {
//         transform: translateX(1000%);
//         animation: right-to-left calc(var(--transition-duration) + 400ms)
//           ease-out forwards;
//       }
//     }
//   }

//   @media (min-width: 450px) {
//     .container {
//       .title {
//         h1 {
//           font-size: 7rem;
//         }
//       }
//     }
//   }

//   @media (min-width: 768px) {
//     .container {
//       .title {
//         h1 {
//           font-size: 12rem;
//         }
//       }
//     }
//   }

//   @media (min-width: 1170px) {
//     .container {
//       .title {
//         h1 {
//           font-size: 16rem;
//         }
//       }
//     }
//   }
// `

export default Projects
