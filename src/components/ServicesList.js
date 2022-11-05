import React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"

const ServicesList = () => {
  return (
    <Wrapper>
      <div className="container">
        <StaticImage
          className="photo"
          src="../assets/images/webdesign.png"
          alt="my-photo"
        />
        <h3>Website Design</h3>
        <p>
          Leverage agile frameworks to provide a robust synopsis for high level
          overviews. Iterative approaches to corporate
        </p>
      </div>
      <div className="container">
        <StaticImage
          className="photo"
          src="../assets/images/shopify.png"
          alt="my-photo"
        />
        <h3>Shopify Development</h3>
        <p>
          Leverage agile frameworks to provide a robust synopsis for high level
          overviews. Iterative approaches to corporate
        </p>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  color: white;

  .container {
    background-color: #1f1f1f;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 3rem 2rem;
    position: relative;
    &:nth-child(2) {
      margin-bottom: 4rem;
    }
    &::before {
      content: "";
      position: absolute;
      background: linear-gradient(
        to right,
        #bd10c3,
        #cd1590,
        #d2177e,
        #fff,
        #4682b4
      );
      -webkit-text-fill-color: transparent;
      width: 100%;
      height: 0.4rem;
      top: 0;
      left: 0;
    }
    .photo {
      width: 6rem;
      height: 6rem;
    }
    h3 {
      font-size: 2.2rem;
      font-weight: 600;
      margin-bottom: 0;
    }
    p {
      color: var(--clr-grey-10);
      font-size: 1.4rem;
    }
  }
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    .container {
      height: 20%;
    }
  }
  @media (min-width: 1164px) {
    .container {
      width: 30%;
    }
  }
`

export default ServicesList
