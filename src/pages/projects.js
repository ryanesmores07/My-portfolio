import React, { useState } from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import { Contact, ProjectList, ShopifyProjects } from "../components"
import { useInView } from "react-intersection-observer"

const Projects = ({
  data: {
    info: { nodes: datas },
  },
}) => {
  const { ref, inView, entry } = useInView({
    threshold: 0,
    triggerOnce: true,
  })

  const [shopify, setShopify] = useState(true)

  const showShopify = () => {
    setShopify(true)
  }
  const showFrontend = () => {
    setShopify(false)
  }

  return (
    <Wrapper>
      <div className="title-container">
        <h1 className={inView ? "title appear" : "title"} ref={ref}>
          Frontend designs and
          <span className="text-gradient"> Projects</span>
        </h1>
      </div>

      <div
        className={
          inView
            ? "toggle-button-container appear-delay-1"
            : "toggle-button-container"
        }
        ref={ref}
      >
        <button
          className={` ${shopify ? "shopify-btn active" : "shopify-btn"} `}
          onClick={showShopify}
        >
          Shopify Development
        </button>
        <button
          className={` ${shopify ? "frontend-btn" : "frontend-btn active"} `}
          onClick={showFrontend}
        >
          Web Development
        </button>
      </div>
      {shopify && <ShopifyProjects />}
      {!shopify && <ProjectList projects={datas} />}

      <div className="spacing"></div>
      <Contact />
    </Wrapper>
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
  padding: 8rem 2rem 0rem;
  overflow: hidden;

  .toggle-button-container {
    display: flex;
    flex-direction: column;
    background-color: #1f1f1f;
    border-radius: 20px;
    margin: 0 auto;
    max-width: 20rem;
    margin-bottom: 15rem;
    transform: scaleY(0);

    .active {
      background-color: var(--clr-grey-9);
      color: black;
    }

    & > * {
      flex: 1;
      background-color: #1f1f1f;
      width: 100%;
      font-weight: 500;
      padding: 1.5rem 1rem;
      border-radius: 50rem;
      border-style: none;
      color: white;
      cursor: pointer;
    }
  }

  .text-gradient {
    background: linear-gradient(to right, #bd10c3, #cd1590, #d2177e, #eb9fed);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .title-container {
    color: white;
    h1 {
      text-align: center;
      font-size: 5rem;
      line-height: 1.2;
      font-weight: 500;
      margin-bottom: 7rem;
      transform: scaleY(0);
    }
    p {
      color: white;
    }
  }
  @media (min-width: 768px) {
    .title-container {
      max-width: 60%;
      margin: 0 auto;
    }
    .toggle-button-container {
    }
  }
  @media (min-width: 1164px) {
    .title-container {
      margin: 0 auto;

      .title {
        font-size: 6rem;
        max-width: 70%;
        margin: 0 auto;
        margin-bottom: 5rem;
      }
    }
    .toggle-button-container {
    }

    .spacing {
      margin-bottom: 25rem;
    }
  }
  @media (min-width: 1440px) {
    padding-inline: 10rem;
    .container {
    }
    .toggle-button-container {
      max-width: 30rem;
    }
  }
  @media (min-width: 1920px) {
    padding-inline: 35rem;
    .title-container {
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
