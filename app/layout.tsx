import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./styles/global.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Elgato Coding Challenge",
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}