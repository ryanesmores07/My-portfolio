import React from "react"
import styled from "styled-components"
import socials from "../constants/socials"

const Contact = () => {
  return (
    <Wrapper>
      <section className="container">
        <div className="title">
          <h2>Contact</h2>
          <h1>get in touch</h1>
        </div>
        <div className="content">
          <p>
            What is your challenge? I can help you with your website front-end
            development needs and make it fully responsive and customized with
            the design and style you like!
          </p>
        </div>
        <div className="socials">
          <a href="#">
            <h3>ryanesmores07@gmail.com</h3>
          </a>
          <a href="#">
            <h3 style={{ marginBottom: "6rem" }}>+81 80-7575-0507</h3>
          </a>
          {socials.map((social, index) => {
            return (
              <div className="social-container">
                <a href="#">{social.text}</a>
              </div>
            )
          })}
        </div>
      </section>
    </Wrapper>
  )
}

const Wrapper = styled.header`
  width: 100%;

  .container {
    padding: 3rem 5rem;

    h1 {
        font-size: 5.5rem;
        font-weight: 200;
        letter-spacing: -2px;
        margin-bottom: 10rem;
    }

    h2 {
        font-weight: 200;
        font-size: 1.7rem;
    }

    

    a, h3 {
        font-weight: 400;
        font-size: 2rem;
        color: var(--clr-black);
        margin-bottom: 2rem;
    }

    a { 
        font-style: var(--ff-primary);
        font-weight: 200;
    }

    p {
        font-size: 2rem;
        margin-bottom: 10rem;
    }

    
`

export default Contact
