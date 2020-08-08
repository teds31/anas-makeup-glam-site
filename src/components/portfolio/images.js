import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Images = () => {
  const data = useStaticQuery(graphql`
    {
      makeupImages: allFile(filter: {sourceInstanceName: {eq: "looks"}}) {
        edges {
          node {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)
  return <pre>{JSON.stringify(data, null, 4)}</pre>
}

export default Images
