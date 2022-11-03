import React from "react"
import styled from "styled-components"
import ServicesList from "./ServicesList"

const Services = () => {
  return (
    <Wrapper>
      <div className="text-container" id="services">
        <h2>
          Look at my <span className="text-gradient">services</span>
        </h2>
        <p>
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
  /* height: 100vh; */
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
    }

    p {
      font-size: 1.6rem;
      color: var(--clr-grey-10);
      width: 95%;
      margin-bottom: 7rem;
    }
  }
`

export default Services
