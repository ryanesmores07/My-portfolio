import React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

const ShopifyProjects = () => {
  return (
    <Wrapper>
      <div className="container">
        <div className="project-1">
          <div className="image-container">
            <Link to="/stylemate">
              <StaticImage
                className="photo"
                src="../assets/images/Shopify-images/Stylemate/mac.png"
                alt="my-photo"
                layout="constrained"
                loading="eager"
                width={800}
              />
            </Link>
          </div>
        </div>
        <div className="project-2">
          <div className="image-container">
            <Link to="/galaxyways">
              <StaticImage
                className="photo"
                src="../assets/images/Shopify-images/Galaxyways/macbook.png"
                alt="my-photo"
                layout="constrained"
                loading="eager"
                width={800}
              />
            </Link>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.article`
  .container {
    display: flex;
    flex-direction: column;

    .project-1,
    .project-2 {
      padding: 2rem;
      background-color: #1f1f1f;
      margin-bottom: 5rem;
    }
  }
`

export default ShopifyProjects
