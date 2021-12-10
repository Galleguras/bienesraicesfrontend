import React, { useState, useRef } from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "@emotion/styled"

const Formulario = styled.form`
  width: 100%;
  margin-top: 2rem;
  display: flex;
  border: 1px solid #e1e1e1 !important;
  max-width: 1200px;
  margin: 2em auto 0 auto;
`
const Select = styled.select`
  flex: 1;
  padding: 1rem;
  appearance: none;
  border: none;
  font-family: "Lato", sans-serif;
`

const useFiltro = () => {
  const selectRef = useRef()

  const resultado = useStaticQuery(graphql`
    query {
      allStrapiCategorias {
        nodes {
          id
          nombre
        }
      }
    }
  `)
  console.log(" res-useFiltro-->>", resultado)
  const [categoria, setCategoria] = useState("")
  const categorias = resultado.allStrapiCategorias.nodes
  console.log(" categorias-->>", categorias)
  const FiltroUI = () => (
    <Formulario>
      <Select
        onChange={e => {
          setCategoria(e.target.value)
        }}
      >
        <option value="">Filtrar</option>
        {categorias.map(categoria => (
          <option key={categoria.id} value={categoria.nombre}>
            {categoria.nombre}
          </option>
        ))}
      </Select>
      {/*      <p>ss {categoria}</p> */}
    </Formulario>
  )

  return { categoria, FiltroUI }
}

export default useFiltro
