import React from "react"
import { navigate } from "gatsby"
import { handleLogin, inLoggedIn, isLoggedIn } from "../services/auth"

export default function Login() {
  const [username, setUsername] = React.useState("")
  const [password, setPassword] = React.useState("")

  function handleSubmit(event) {
    event.preventDefault()
    handleLogin({ username, password })
  }

  // if (isLoggedIn()) {
  //   navigate(`/app/perfil`)
  // }

  return (
    <>
      <h1>Log in</h1>
      <form
        method="post"
        onSubmit={event => {
          handleSubmit(event)
          navigate(`app/perfil`)
        }}
      >
        <label>
          Usuario
          <input
            type="text"
            name="username"
            onChange={e => setUsername(e.target.value)}
          />
        </label>
        <label>
          Password
          <input
            type="password"
            name="password"
            onChange={e => setPassword(e.target.value)}
          />
        </label>
        <input type="submit" value="Log in" />
      </form>
    </>
  )
}
