import React, { useState } from 'react';
import { useStaticQuery, graphql } from "gatsby"
import Image from 'gatsby-image';
import styled from "styled-components"
import { Dialog } from "@reach/dialog"
import '@reach/dialog/styles.css';
import { FaRegWindowClose } from "react-icons/fa"
import {darkBlue} from "../../styles"

const Main = () => {
  const data = useStaticQuery(graphql`
    {
      makeupImages: allFile(filter: {sourceInstanceName: {eq: "looks"}}) {
        edges {
          node {
            childImageSharp {
              fluid(maxWidth: 500) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

  const [showLightbox, setShowLightbox] = useState(false)
  const [selectedImg, setSelectedImg] = useState()

  return (
    <Wrapper>
      <h2 className="text-center">My Work</h2>
      <LightBoxContainer>
        {data.makeupImages.edges.map((img) => {
          return (
            <PreviewButton key={img.node.childImageSharp.fluid.src} type="button" onClick={() => {
              setSelectedImg(img);
              setShowLightbox(true);
            }}>
              <Image fluid={img.node.childImageSharp.fluid} key={img.node.childImageSharp.fluid.src} loading="auto"/>
            </PreviewButton>
          )
        })}
      </LightBoxContainer>
      {showLightbox && (
        <Dialog style={{backgroundColor: `${darkBlue}`, paddingRight: "0"}} aria-label="lightbox for portfolio">
          <button style={{backgroundColor: "transparent", border: "none", color: "white", fontSize: "25px", float: "right", outlineStyle: "none"}} type="button" onClick={() => setShowLightbox(false)}>
            <FaRegWindowClose />
          </button>
          <Image fluid={selectedImg.node.childImageSharp.fluid} />
        </Dialog>
      )}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  padding: 5px;

  h2 {
    margin: 22px;
    font-size: 3rem;
  }
`
const LightBoxContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 5px;
`
const PreviewButton = styled.button`
  display: contents;
  background-color: transparent;
  border: none;
  margin: 0;
  padding: 0;
`

export default Main