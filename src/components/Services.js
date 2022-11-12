import React, { useRef, useEffect, useState } from "react"
import styled from "styled-components"
import ServicesList from "./ServicesList"
import { useInView } from "react-intersection-observer"

const Services = () => {
  const { ref, inView } = useInView()

  return (
    <Wrapper>
      <div className="text-container" id="Services">
        <h2 className={inView ? "appear" : ""} ref={ref}>
          Look at my <span className="text-gradient">services</span>
        </h2>
        <p className={inView ? "appear-delay-1" : ""}>
          If you are looking for someone who will help you to build your digital
          web presence than congratulations!
        </p>
      </div>
      <ServicesList />
    </Wrapper>
  )
}

const Wrapper = styled.section`
  background-color: black;
  overflow: hidden;

  padding: 5rem 2rem;

  color: white;

  .text-gradient {
    background: linear-gradient(to right, #bd10c3, #cd1590, #d2177e, #fff);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .text-container {
    h2 {
      font-size: 4rem;
      font-weight: 600;
      line-height: 1.2;
      margin-bottom: 2rem;
      transform: scaleY(0);
    }

    p {
      font-size: 1.6rem;
      color: var(--clr-grey-9);
      width: 95%;
      margin-bottom: 7rem;
      transform: scaleY(0);
    }
  }
  @media (min-width: 768px) {
    padding: 5rem 4rem;

    .text-container {
      h2 {
        font-size: 6rem;
        font-weight: 500;
      }
      p {
        max-width: 70%;
      }
    }
  }
  @media (min-width: 1164px) {
    .text-container {
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;

      h2 {
        font-size: 6.4rem;
      }

      p {
        font-size: 1.8rem;
        max-width: 50%;
      }
    }
  }
  @media (min-width: 1440px) {
    .text-container {
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;

      h2 {
        font-size: 6.4rem;
      }

      p {
        font-size: 1.8rem;
        max-width: 40%;
      }
    }
  }
  @media (min-width: 1920px) {
    padding-bottom: 12rem;
    .text-container {
      h2 {
      }

      p {
        max-width: 30%;
      }
    }
  }
`

export default Services
