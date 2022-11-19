import React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
import { useInView } from "react-intersection-observer"

const ServicesList = () => {
  const { ref, inView, entry } = useInView({
    threshold: 0,
    triggerOnce: true,
  })
  return (
    <Wrapper>
      <div className={inView ? "container appear" : "container"} ref={ref}>
        <StaticImage
          className="photo"
          src="../assets/images/shopify.png"
          alt="my-photo"
        />
        <h3>Shopify Store Setups</h3>
        <p>
          Build you a brand new fully functional Shopify store from scratch and
          help you navigate through it.
        </p>
      </div>
      <div className={inView ? "container appear" : "container"} ref={ref}>
        <StaticImage
          className="photo"
          src="../assets/images/migrate.png"
          alt="my-photo"
        />
        <h3>Shopify Store Migrations</h3>
        <p>
          Migrate your existing store from other platform and importing all your
          products into Shopify making it a seamless migration.
        </p>
      </div>
      <div className={inView ? "container appear" : "container"} ref={ref}>
        <StaticImage
          className="photo"
          src="../assets/images/webdesign.png"
          alt="my-photo"
        />
        <h3>Shopify Theme Customization</h3>
        <p>
          Will customize any Shopify theme of your choice and make it exactly
          how you want it to look and feel.
        </p>
      </div>
      <div className={inView ? "container appear" : "container"} ref={ref}>
        <StaticImage
          className="photo"
          src="../assets/images/app.png"
          alt="my-photo"
        />
        <h3>Shopify App Integration</h3>
        <p>
          Integrate any Shopify Apps of your liking to your store while
          maintaining loading speed.
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
    transition: transform 200ms ease-out;
    transform: scaleY(0);
    max-width: 35rem;
    height: 30rem;

    &:hover {
      transform: translateY(-1.5rem);
    }
    &:nth-child(4) {
      /* margin-bottom: 4rem; */
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
      height: 4rem;
    }
    p {
      color: var(--clr-grey-9);
      font-size: 1.4rem;
    }
  }
  @media (min-width: 768px) {
    /* justify-content: center; */
    flex-direction: row;
    flex-wrap: wrap;

    & > * {
      flex-basis: 100%;
    }

    .container {
      flex-wrap: wrap;
      /* width: 50rem; */
    }
  }
  @media (min-width: 1164px) {
    flex-wrap: nowrap;
    .container {
      width: 40rem;
      height: 32rem;
    }
  }
  @media (min-width: 1440px) {
    .container {
      max-width: 35rem;
    }
  }
  @media (min-width: 1920px) {
    gap: 5rem;

    .container {
    }
  }
`

export default ServicesList
