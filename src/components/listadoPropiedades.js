import React, { useState, useEffect } from "react"
import { css } from "@emotion/core"
import usePropiedades from "../hooks/usePropiedades"
import PropiedadPreview from "../components/propiedadPreview"
import listadoPropiedadesCSS from "../css/listadoPropiedades.module.css"
import useFiltro from "../hooks/useFiltro"
const ListadoPropiedades = () => {
  const resultado = usePropiedades()
  console.log("resultado useList->>", resultado)
  const [propiedades, guardarPropiedades] = useState(resultado)
  const [filtradas, setfiltradas] = useState([])
  //filtrado de propiedades
  const { categoria, FiltroUI } = useFiltro()

  useEffect(() => {
    if (categoria) {
      console.log("useeff-categ--->>", categoria)
      console.log("useeff-categ2--->>", propiedades)
      const filtro = propiedades.filter(
        propiedad => propiedad.categoria?.nombre === categoria
      )
      setfiltradas(filtro)
    } else {
      setfiltradas(propiedades)
    }
  }, [categoria])
  return (
    <>
      <h2
        css={css`
          margin-top: 5rem;
        `}
      >
        Nuestras Propiedades
      </h2>
      {FiltroUI()}
      <ul className={listadoPropiedadesCSS.propiedades}>
        {filtradas.map(propiedad => (
          <PropiedadPreview key={propiedad.id} propiedad={propiedad} x="asd" />
        ))}
      </ul>
    </>
  )
}

export default ListadoPropiedades
