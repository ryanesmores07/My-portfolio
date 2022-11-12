import React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import { HiOutlineArrowRight } from "react-icons/hi"

const ShopifyProjects = () => {
  return (
    <Wrapper>
      <div className="container">
        <div className="project">
          <Link to="/stylemate">
            <StaticImage
              className="photo"
              src="../assets/images/Shopify-images/Stylemate/hero.png"
              alt="my-photo"
              layout="constrained"
              loading="eager"
              width={800}
            />
            <h4 className="stacks">Shopify Liquid</h4>
            <h3 className="title">Style Mate</h3>

            <div className="button-container">
              <a href="/" className="btn">
                VIEW PROJECT
              </a>
              <HiOutlineArrowRight className="arrow" />
            </div>
          </Link>
        </div>
        <div className="project">
          <Link to="/galaxyways">
            <StaticImage
              className="photo"
              src="../assets/images/Shopify-images/Galaxyways/hero.png"
              alt="my-photo"
              layout="constrained"
              loading="eager"
              width={800}
            />
            <h4 className="stacks">Shopify Liquid</h4>
            <h3 className="title">Galaxy Ways</h3>

            <div className="button-container">
              <a href="/" className="btn">
                VIEW PROJECT
              </a>
              <HiOutlineArrowRight className="arrow" />
            </div>
          </Link>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.article`
  .container {
    display: flex;
    flex-direction: column;

    .title {
      font-size: 2.4rem;
      font-weight: 600;
      color: white;
      margin-bottom: 2rem;
    }
    .photo {
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
    .stacks {
      display: inline-block;
      color: black;
      margin-right: 1rem;
      background-color: var(--clr-grey-10);
      font-size: 1.2rem;
      border-radius: 50rem;
      padding: 0.5rem 2rem;
      margin-bottom: 2rem;
    }
    .project {
      padding: 2rem;
      background-color: #1f1f1f;
      margin-bottom: 5rem;
    }
  }

  @media (min-width: 768px) {
    .container {
      padding-right: 15rem;
      padding-left: 2rem;
      max-width: 80rem;
      .project {
        margin-bottom: 3rem;
      }
    }
  }
  @media (min-width: 1164px) {
    .container {
      max-width: 110rem;
      padding-inline: 3rem;
      margin: 0 auto;
      display: grid;
      gap: 5rem;
      grid-template-columns: 1fr 1fr;
      .project {
        margin-bottom: 3rem;

        .title {
          max-width: 100%;
        }
      }
    }
  }

  @media (min-width: 1440px) {
    .container {
      max-width: 120rem;
    }
  }
`

export default ShopifyProjects
