import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Main from './Main';

const Images = () => (
  <StaticQuery
    query={graphql`
      query {
        makeupImages: allFile(filter: {sourceInstanceName: { eq: "looks" }}) {
          edges {
            node {
              childImageSharp {
                fluid(maxWidth:2000) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `}
    render={data => <Main makeupImages={data.makeupImages.edges} />}
  />
);

export default Images;