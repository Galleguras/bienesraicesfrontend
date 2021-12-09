import { useStaticQuery, graphql } from "gatsby"
const useInicio = () => {
  const resultado = useStaticQuery(graphql`
    query {
      allStrapiPaginas(filter: { nombre: { eq: "Inicio" } }) {
        nodes {
          id
          nombre
          contenido
          imagen {
            localFile {
              publicURL
              childImageSharp {
                fluid(
                  maxWidth: 1800
                  duotone: {
                    highlight: "#222222"
                    shadow: "#192550"
                    opacity: 30
                  }
                ) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
  `)

  return resultado.allStrapiPaginas.nodes.map(inicio => {
    console.log("resultado.allStrapiPaginas.nodes.map(inicio", inicio)
    return {
      nombre: inicio.nombre,
      contenido: inicio.contenido,
      imagen: inicio.imagen,
    }
  })
}

export default useInicio
