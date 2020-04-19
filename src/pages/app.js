import React from "react"
import { Router } from "@reach/router"
import Layout from "../components/layout"
import Perfil from "../components/perfil"
import Login from "../components/login"
import RutaPrivada from "../components/rutaPrivada"

export default function App() {
  return (
    <Layout>
      <Router>
        <RutaPrivada path="/app/perfil" component={Perfil} />
        <Login path="/app/login" />
      </Router>
    </Layout>
  )
}
