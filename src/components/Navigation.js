import React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"

const Navigation = () => {
  return (
    <Wrapper>
      <div className="logo">
        <StaticImage
          className="logo"
          src="../../static/LogoMakr.png"
          alt="logo"
        />
      </div>
      <div className="navigation">
        <input
          type="checkbox"
          className="navigation__checkbox"
          id="navi-toggle"
        />

        <label for="navi-toggle" className="navigation__button">
          <span className="navigation__icon">&nbsp;</span>
        </label>

        <div className="navigation__background">&nbsp;</div>

        <nav className="navigation__nav">
          <ul className="navigation__list">
            <li className="navigation__item">
              <a href="#" className="navigation__link">
                <span>01</span>About Natours
              </a>
            </li>
            <li className="navigation__item">
              <a href="#" className="navigation__link">
                <span>02</span>Your benefits
              </a>
            </li>
            <li className="navigation__item">
              <a href="#" className="navigation__link">
                <span>03</span>Popular tours
              </a>
            </li>
            <li className="navigation__item">
              <a href="#" className="navigation__link">
                <span>04</span>Stories
              </a>
            </li>
            <li className="navigation__item">
              <a href="#" className="navigation__link">
                <span>05</span>Book now
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.nav`
  position: sticky;
  width: 100%;
  z-index: 10;
  top: 0px;
  transition: top 0.6s ease 0s;

  .logo {
    max-width: 10rem;
  }

  .navigation {
    &__checkbox {
      display: none;
    }

    &__button {
      background-color: $color-white;
      height: 7rem;
      width: 7rem;
      position: fixed;
      top: 6rem;
      right: 6rem;
      border-radius: 50%;
      z-index: 200;
      box-shadow: 0 1rem 3rem rgba($color-black, 0.1);
      text-align: center;
      cursor: pointer;

      @include respond(tab-port) {
        top: 4rem;
        right: 4rem;
      }

      @include respond(phone) {
        top: 3rem;
        right: 3rem;
      }
    }

    &__background {
      height: 6rem;
      width: 6rem;
      border-radius: 50%;
      position: fixed;
      top: 6.5rem;
      right: 6.5rem;
      background-image: radial-gradient(
        $color-primary-light,
        $color-primary-dark
      );
      z-index: 100;
      transition: transform 0.8s cubic-bezier(0.86, 0, 0.7, 1);

      @include respond(tab-port) {
        top: 4.5rem;
        right: 4.5rem;
      }

      @include respond(phone) {
        top: 3.5rem;
        right: 3.5rem;
      }
    }

    &__nav {
      height: 100vh;
      position: fixed;
      top: 0;
      left: 0;
      z-index: 150;

      opacity: 0;
      width: 0;
      transition: all 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    }

    &__list {
      @include centerall;
      list-style: none;
      text-align: center;
      width: 100%;
    }

    &__item {
      margin: 1rem;
    }

    &__link {
      &:link,
      &:visited {
        display: inline-block;
        font-size: 3rem;
        font-weight: 300;
        padding: 1rem 2rem;
        color: $color-white;
        text-decoration: none;
        text-transform: uppercase;
        background-image: linear-gradient(
          120deg,
          transparent 0%,
          transparent 50%,
          $color-white 50%
        );
        background-size: 220%;
        transition: all 0.4s;

        span {
          margin-right: 1.5rem;
          display: inline-block;
        }
      }

      &:hover,
      &:active {
        background-position: 100%;
        color: $color-primary;
        transform: translateX(1rem);
      }
    }

    //FUNCTIONALITY
    &__checkbox:checked ~ &__background {
      transform: scale(80);
    }

    &__checkbox:checked ~ &__nav {
      opacity: 1;
      width: 100%;
    }

    //ICON
    &__icon {
      position: relative;
      margin-top: 3.5rem;

      &,
      &::before,
      &::after {
        width: 3rem;
        height: 2px;
        background-color: $color-grey-dark-3;
        display: inline-block;
      }

      &::before,
      &::after {
        content: "";
        position: absolute;
        left: 0;
        transition: all 0.2s;
      }

      &::before {
        top: -0.8rem;
      }
      &::after {
        top: 0.8rem;
      }
    }

    &__button:hover &__icon::before {
      top: -1rem;
    }

    &__button:hover &__icon::after {
      top: 1rem;
    }

    &__checkbox:checked + &__button &__icon {
      background-color: transparent;
    }

    &__checkbox:checked + &__button &__icon::before {
      top: 0;
      transform: rotate(135deg);
    }

    &__checkbox:checked + &__button &__icon::after {
      top: 0;
      transform: rotate(-135deg);
    }
  }
`

export default Navigation
