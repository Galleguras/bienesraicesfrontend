import { useStaticQuery, graphql } from "gatsby"
const usePropiedades = () => {
  const datos = useStaticQuery(graphql`
    query {
      allStrapiPropiedades {
        edges {
          node {
            id
            nombre
            precio
            wc
            estacionamiento
            descripcion
            habitaciones
            categorias {
              nombre
            }
            agentes {
              nombre
              email
              telefono
            }
            imagen {
              size

              localFile {
                childImageSharp {
                  fluid(maxWidth: 600, maxHeight: 400) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
          }
        }
      }
    }
  `)
  console.log("usePropiedades-->>", datos)
  return datos.allStrapiPropiedades.edges.map(propiedad => ({
    nombre: propiedad.node.nombre,
    descripcion: propiedad.node.description,
    imagen: propiedad.node.imagen,
    id: propiedad.node.id,
    habitaciones: propiedad.node.habitaciones,
    estacionamiento: propiedad.node.estacionamiento,
    agentes: propiedad.node.agentes,
    wc: propiedad.node.wc,
    precio: propiedad.node.precio,
    categoria: propiedad.node.categorias,
  }))
}
export default usePropiedades
