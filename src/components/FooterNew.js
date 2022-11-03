import React from "react"
import styled from "styled-components"
import { FiMail } from "react-icons/fi"
import { BsTelephone } from "react-icons/bs"

const FooterNew = () => {
  return (
    <Wrapper>
      <div className="contact-container">
        <div className="emailphone">
          <div className="icon-bg">
            <FiMail className="icon" />
          </div>
          <a href="mailto:mytokyowebdev@ernieryan.com">
            mytokyowebdev@ernieryan.com
          </a>
        </div>
        <div className="emailphone">
          <div className="icon-bg">
            <BsTelephone className="icon" />
          </div>
          <a href="tel:08075750507">+81 80-7575-0507</a>
        </div>
      </div>
      <div className="sublinks">
        <div className="pages">
          <h4>PAGES</h4>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#about">About Me</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
        <div className="social-media">
          <h4>SOCIAL MEDIA</h4>
          <ul>
            <li>
              <a href="https://twitter.com/">Twitter</a>
            </li>
            <li>
              <a href="https://www.linkedin.com/feed/">LinkedIn</a>
            </li>
            <li>
              <a href="https://github.com/ryanesmores07">Github</a>
            </li>
            <li>
              <a href="https://www.facebook.com/">Facebook</a>
            </li>
          </ul>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.footer`
  background-color: black;
  color: white;
  padding: 8rem 2rem;
  .contact-container {
    margin-bottom: 7rem;
    position: relative;
    &::before {
      content: "";
      top: -7.5rem;
      opacity: 0.3;
      width: 100%;
      height: 1px;
      background-color: white;
      position: absolute;
    }
    .emailphone {
      display: flex;
      align-items: center;
      position: relative;
      margin-bottom: 3rem;

      a {
        font-size: 1.6rem;
        font-weight: 400;
        border-radius: 50rem;
        color: white;
        padding-left: 4.5rem;
      }
      .icon-bg {
        background: linear-gradient(
          to right,
          #bd10c3,
          #cd1590,
          #d2177e,
          #eb9fed
        );
        /* border-radius: 50%; */
        padding: 1rem;
        width: 3.5rem;
        height: 3.5rem;
        border-radius: 50%;
        position: absolute;
        left: 0;
        .icon {
          color: white;
          width: 2rem;
          height: 2rem;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
      }
    }
  }
  .sublinks {
    display: flex;

    h4 {
      font-size: 1.6rem;
      font-weight: 500;
      margin-bottom: 1.5rem;
      letter-spacing: 1px;
    }
    .pages,
    .social-media {
      width: 50%;
      ul li {
        margin-bottom: 1rem;
      }
      a {
        font-size: 1.6rem;
        color: white;
      }
    }
  }
`

export default FooterNew
