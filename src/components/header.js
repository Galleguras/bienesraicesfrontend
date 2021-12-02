import { css } from "@emotion/core"
import { Link } from "gatsby"
import React from "react"
import Navegacion from "./navegacion"
const Header = () => {
  return (
    <header
      css={css`
        background-color: #e20074;
        padding: 1rem;
      `}
    >
      <div
        css={css`
          max-width: 120rem;
          margin: 0 auto;
          text-align: center;
          @media (min-width: 768px) {
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
        `}
      >
        <Link to="/">Bienes Raices</Link>
        <Navegacion />
      </div>
    </header>
  )
}

export default Header
