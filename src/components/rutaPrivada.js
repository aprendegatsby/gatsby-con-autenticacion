import React from "react"
import { navigate } from "gatsby"
import { isLoggedIn } from "../services/auth"

export default function RutaPrivada({
  component: Component,
  location,
  ...rest
}) {
  console.log("en ruta privada!")
  if (!isLoggedIn() && location.pathName !== `/app/login`) {
    navigate(`app/login`)
    return null
  }

  return <Component {...rest} />
}
