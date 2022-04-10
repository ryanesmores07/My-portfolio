import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

const ProjectTemplate = ({ data }) => {
  console.log(data)
  return <div>project template</div>
}

export const query = graphql`
  query getSingleProject($title: String) {
    info: contentfulProject(title: { eq: $title }) {
      description {
        description
      }
      title
      slug
      url
      image {
        gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
      }
      content {
        stack
      }
    }
  }
`

export default ProjectTemplate
