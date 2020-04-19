export function isBrowser() {
  return typeof window !== "undefined"
}

export function getUser() {
  return isBrowser() && window.localStorage.getItem("usuarioGatsby")
    ? JSON.parse(window.localStorage.getItem("usuarioGatsby"))
    : {}
}

export function setUser(user) {
  window.localStorage.setItem("usuarioGatsby", JSON.stringify(user))
}

export function handleLogin({ username, password }) {
  if (username === "aprendegatsby" && password === "123") {
    return setUser({
      username: `aprendegatsby`,
      name: `aprendegatsby`,
      email: `hola@aprendegatsby.com`,
    })
  }

  return false
}

export function isLoggedIn() {
  const user = getUser()

  return !!user.username
}

export function logout(callback) {
  setUser({})
  callback()
}
