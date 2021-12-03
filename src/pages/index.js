import React from "react"
import Layout from "../components/layout"
import useInicio from "../hooks/useInicio"
const Index = () => {
  const resultado = useInicio()
  const { nombre, contenido, imagen } = resultado[0]
  console.log("useInicio  -->>", resultado)
  return (
    <Layout>
      <h1>{nombre}</h1>
      <p>{contenido}</p>
    </Layout>
  )
}

export default Index
