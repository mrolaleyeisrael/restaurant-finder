'use client'

import React from "react"
import { SessionProvider } from "next-auth/react"
import { Chicle } from "next/font/google"

const Provider = ({ children }) => {
  return (
    <SessionProvider>
      {children}
    </SessionProvider>
  )
}

export default Provider;