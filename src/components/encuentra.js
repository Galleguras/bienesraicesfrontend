import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import { css } from "@emotion/core"
import styled from "@emotion/styled"
import heroCSS from "../css/hero.module.css"
const ImageBackground = styled(BackgroundImage)`
  height: 300px;
`

const Encuentra = () => {
  const { imagen } = useStaticQuery(graphql`
    query MyQuery {
      imagen: file(relativePath: { eq: "encuentra.jpg" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 1500) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  console.log(imagen)
  return (
    <div>
      <ImageBackground tag="section" fluid={imagen.sharp.fluid} fadeIn="soft">
        <div className={heroCSS.imagenbg}>
          <h3 className={heroCSS.titulo}>Encuentra la casa de tus sueños</h3>
          <p>15 años de experiencia</p>
        </div>
      </ImageBackground>
    </div>
  )
}

export default Encuentra
