import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"
import { getUser, isLoggedIn } from "../services/auth"

export default function Inicio() {
  return (
    <Layout>
      <h1>Hola {isLoggedIn() ? getUser().name : "mundo"}!</h1>
      <p>
        {isLoggedIn() ? (
          <>
            Estas logado, asi que revisa tu <Link to="/app/perfil">Perfil</Link>
          </>
        ) : (
          <>
            Puedes hacer <Link to="/app/login">log in</Link> para ver contenido
            privado
          </>
        )}
      </p>
    </Layout>
  )
}
