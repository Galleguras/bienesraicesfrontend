import React from "react"
import Iconos from "./iconos"
import styled from "@emotion/styled"
import Image from "gatsby-image"
import Layout from "./layout"
import { graphql } from "gatsby"

const Contenido = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 95%;
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 2fr 1fr;
    colum-gap: 5rem;
  }
`
const Sidebar = styled.aside`
  .precio {
    font-size: 2rem;
    color: #75ab00;
  }
  .agente {
    margin-top: 4rem;
    border-radius: 2rem;
    background-color: #75ab00;
    padding: 3rem;
    color: 3fff;
  }
  p {
    margin: 0;
  }
`
export const query = graphql`
  query ($id: String) {
    allStrapiPropiedades(filter: { id: { eq: $id } }) {
      nodes {
        nombre
        descripcion
        wc
        estacionamiento
        habitaciones

        precio
        imagen {
          localFile {
            childImageSharp {
              fluid(maxWidth: 1200) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
        agentes {
          id
          nombre
          email
          telefono
        }
      }
    }
  }
`

const Propiedades = ({
  data: {
    allStrapiPropiedades: { nodes },
  },
}) => {
  const {
    nombre,
    descripcion,
    wc,
    estacionamiento,
    habitaciones,
    agentes,
    imagen,
    precio,
  } = nodes[0]
  console.log("Propiedades-->>", nodes)
  return (
    <Layout>
      <h1>{nombre}</h1>
      <Contenido>
        <main>
          <Image fluid={imagen[0].localFile.childImageSharp.fluid} />
          <p>{descripcion}</p>
        </main>
        <Sidebar>
          <p className="precio">{precio}</p>
          <Iconos
            wx={wc}
            estacionamiento={estacionamiento}
            habitaciones={habitaciones}
          />
          <div className="agente">
            <h2>Vendedor:</h2>
            <p>{agentes.nombre}</p>
            <p>{agentes.telefono}</p>
            <p>{agentes.email}</p>
          </div>
        </Sidebar>
      </Contenido>
    </Layout>
  )
}

export default Propiedades
