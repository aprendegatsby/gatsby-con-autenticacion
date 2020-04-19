import React from "react"
import { getUser } from "../services/auth"

export default function Perfil() {
  return (
    <>
      <h1>Tu perfil</h1>
      <ul>
        <li>Nombre: {getUser().name}</li>
        <li>Email: {getUser().email}</li>
      </ul>
    </>
  )
}
