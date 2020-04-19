import React from "react"
import { Link, navigate } from "gatsby"
import { getUser, isLoggedIn, logout } from "../services/auth"

export default function NavBar() {
  let mensaje = ""

  if (isLoggedIn()) {
    mensaje = `Hola ${getUser().name}!`
  } else {
    mensaje = `No estas logado`
  }

  return (
    <div
      style={{
        display: "flex",
        flex: "1",
        justifyContent: "space-between",
        borderBottom: "1px solid #d1c1e0",
      }}
    >
      <span>{mensaje}</span>
      <nav>
        <Link to="/">Home</Link>
        {` `}
        <Link to="/app/perfil">Perfil</Link>
        {` `}
        {isLoggedIn() ? (
          <a
            href="/"
            onClick={event => {
              event.preventDefault()
              logout(() => navigate("/app/login"))
            }}
          >
            Logout
          </a>
        ) : null}
      </nav>
    </div>
  )
}
