const urlSlug = require("url-slug")

exports.createPages = async ({ actions, graphql, reporter }) => {
  const resultado = await graphql(`
    query {
      allStrapiPaginas {
        nodes {
          nombre
          id
        }
      }
      allStrapiPropiedades {
        nodes {
          nombre
          id
        }
      }
    }
  `)

  console.log(
    "resultado-gatsby-node-->>",
    JSON.stringify(resultado.data.allStrapiPropiedades)
  )
  //Si no hay resultados
  if (resultado.errors) {
    reporter.panic("No hubo resultados", resultado.errors)
  }
  //Si hay resultados generamos los archivos staticos
  const propiedades = resultado.data.allStrapiPropiedades.nodes
  const paginas = resultado.data.allStrapiPaginas.nodes
  console.log("gatsby-node-propiedades", propiedades)
  propiedades.forEach(propiedad => {
    actions.createPage({
      path: urlSlug(propiedad.nombre),
      component: require.resolve("./src/components/propiedades.js"),
      context: { id: propiedad.id },
    })
  })
  paginas.forEach(pagina => {
    actions.createPage({
      path: urlSlug(pagina.nombre),
      component: require.resolve("./src/components/paginas.js"),
      context: { id: pagina.id },
    })
  })
}
