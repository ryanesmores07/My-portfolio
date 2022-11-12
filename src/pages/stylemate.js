import React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
import { AiOutlineLeft } from "react-icons/ai"
import { Link } from "gatsby"
const Stylemate = () => {
  return (
    <Wrapper>
      <div className="return-container">
        <AiOutlineLeft className="icon" />
        <Link className="return" to="/projects">
          Projects
        </Link>
      </div>

      <div className="container">
        <h2>Style Mate</h2>
        <StaticImage
          className="photo"
          src="../assets/images/Shopify-images/Stylemate/mac.png"
          alt="my-photo"
          layout="constrained"
          loading="eager"
          width={1000}
        />
        <div className="key-features">
          <ul className="list-items">
            <li>Fully functional eCommerce site</li>
            <li>Transitions and fade effects</li>
            <li>Shop the look feature on homepage</li>
            <li>Clear Order history on the backend</li>
            <li>Store Design built on a premium theme</li>
          </ul>
          <ul className="list-items">
            <li>Google Analytics and Facebook pixel</li>
            <li>Recently viewed products section on collection pages</li>
            <li>Product reviews on the product-page</li>
            <li>Custom Logo design</li>
            <li>
              Compatible with Shopify's online store 2.0 features (sections
              everywhere)
            </li>
          </ul>
        </div>
        <div className="image-container">
          <h3>Advanced Search and Filters</h3>
          <StaticImage
            className="photo"
            src="../assets/images/Shopify-images/Stylemate/filter.png"
            alt="my-photo"
            layout="constrained"
            loading="eager"
            width={800}
          />
          <h3>Mega Menu</h3>
          <StaticImage
            className="photo"
            src="../assets/images/Shopify-images/Stylemate/mega.png"
            alt="my-photo"
            layout="constrained"
            loading="eager"
            width={800}
          />
          <h3>Clean and Simple Product Page</h3>
          <StaticImage
            className="photo"
            src="../assets/images/Shopify-images/Stylemate/item.png"
            alt="my-photo"
            layout="constrained"
            loading="eager"
            width={800}
          />
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.article`
  padding: 8rem 2rem;
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h2 {
      font-weight: 900;
      font-size: 3rem;
    }

    .key-features {
      display: flex;
      gap: 2rem;
      margin-bottom: 3rem;

      & > * {
        flex: 1;
      }

      .list-items {
        list-style-type: circle;
        list-style-position: inside;
      }
    }

    .image-container {
      h3 {
        /* margin-left: 1rem; */
        font-weight: 500;
        font-size: 1.6rem;
        margin-bottom: 1rem;
      }
      .photo {
        margin-bottom: 2rem;
      }
    }
  }
  @media (min-width: 768px) {
    padding-inline: 5rem;
    .container {
      .key-features {
        margin-bottom: 8rem;
        ul {
          font-size: 1.4rem;
        }
      }
      .image-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        h3 {
          font-size: 2rem;
        }
        .photo {
          margin-bottom: 5rem;
        }
      }
    }
  }
  @media (min-width: 1164px) {
    .container {
      margin: 0 auto;
      max-width: 80rem;
      .key-features {
        ul {
          font-size: 1.6rem;
        }
      }
      .image-container {
        h3 {
          margin-bottom: 2rem;
          font-size: 2.2rem;
        }
      }
    }
  }
  @media (min-width: 1440px) {
    .container {
      max-width: 120rem;
      .key-features {
        ul {
        }
      }
      .image-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        h3 {
          font-size: 2.2rem;
        }
      }
    }
  }
`

export default Stylemate
