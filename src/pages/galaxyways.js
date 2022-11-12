import React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
import { AiOutlineLeft } from "react-icons/ai"
import { Link } from "gatsby"

const Galaxyways = () => {
  return (
    <Wrapper>
      <div className="return-container">
        <AiOutlineLeft className="icon" />
        <Link className="return" to="/projects">
          Projects
        </Link>
      </div>

      <div className="container">
        <h2>Galaxy Ways</h2>
        <StaticImage
          className="photo"
          src="../assets/images/Shopify-images/Galaxyways/macbook.png"
          alt="my-photo"
          layout="constrained"
          loading="eager"
          width={1000}
        />
        <div className="key-features">
          <ul className="list-items">
            <li>Fully functional eCommerce site</li>
            <li>Product reviews on the product-page</li>
            <li>Custom Logo design</li>
            <li>Automated email notifications for customers</li>
          </ul>
          <ul className="list-items">
            <li>Automated order notification for fulfillment</li>
            <li>Fully functional Contact Form Page</li>
            <li>
              SEO-friendly configuration (think general store settings / social
              sharing image etc.)
            </li>
            <li>FAQ Page</li>
          </ul>
        </div>
        <div className="image-container">
          {/* <h3>Clean homepage design</h3> */}
          <StaticImage
            className="photo"
            src="../assets/images/Shopify-images/Galaxyways/hero.png"
            alt="my-photo"
            layout="constrained"
            loading="eager"
            width={800}
          />
          {/* <h3>Single Product Page</h3> */}
          <StaticImage
            className="photo"
            src="../assets/images/Shopify-images/Galaxyways/product.png"
            alt="my-photo"
            layout="constrained"
            loading="eager"
            width={800}
          />
          {/* <h3>All Products page</h3> */}
          <StaticImage
            className="photo"
            src="../assets/images/Shopify-images/Galaxyways/products.png"
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

    .photo {
      transform: translateY(-5rem);
    }
    h2 {
      font-weight: 900;
      font-size: 3rem;
    }

    .key-features {
      transform: translateY(-10rem);

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
      .photo {
        transform: translateY(-8rem);
      }
      .key-features {
        transform: translateY(-17rem);

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
      .photo {
        transform: translateY(-12rem);
      }
      .key-features {
        transform: translateY(-25rem);

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

export default Galaxyways
