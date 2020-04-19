import React from 'react'
import NavBar from './nav-bar'

export default function Layout({ children }) {
  return (
    <>
      <NavBar />
      {children}
    </>
  )
}