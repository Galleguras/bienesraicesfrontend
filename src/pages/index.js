import React from "react"
import Layout from "../components/layout"
import useInicio from "../hooks/useInicio"
import { css } from "@emotion/core"
import styled from "@emotion/styled"
import BackgroundImage from "gatsby-background-image"
import heroCSS from "../css/hero.module.css"
import Encuentra from "../components/encuentra"
import ListadoPropiedades from "../components/listadoPropiedades"

const ImagenBackgroung = styled(BackgroundImage)`
  height: 600px;
`
const Index = () => {
  const resultado = useInicio()
  const { nombre, contenido, imagen } = resultado[0]
  console.log("useInicio xx  -->>", imagen)
  return (
    <Layout>
      <ImagenBackgroung
        tag="section"
        fluid={imagen[0].localFile.childImageSharp.fluid}
        fadeIn="soft"
      >
        <div className={heroCSS.imagenbg}>
          <h1 className={heroCSS.titulo}>
            Venta de casas y departamentos exclusivos
          </h1>
        </div>
      </ImagenBackgroung>
      <main>
        <div
          css={css`
            max-width: 800px;
            margin: 0 auto;
          `}
        >
          <h1>{nombre}</h1>
          <p
            css={css`
              text-align: center;
            `}
          >
            {contenido}
          </p>
        </div>
      </main>
      <Encuentra />
      <ListadoPropiedades />
    </Layout>
  )
}

export default Index
