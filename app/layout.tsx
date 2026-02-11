import React from "react"
import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { AOSProvider } from "../components/AOSProvider";

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-jetbrains-mono' })
const isGithubPagesBuild = process.env.GITHUB_PAGES === 'true' || process.env.GITHUB_ACTIONS === 'true'
const repository = process.env.GITHUB_REPOSITORY || ''
const repoName = repository.split('/')[1] || 'PortfolioDev'
const basePath = isGithubPagesBuild ? `/${repoName}` : ''

export const metadata: Metadata = {
  title: 'Pablo Lopez Lozano | Desarrollador de Software',
  description: 'Portfolio de Pablo Lopez Lozano - Desarrollador Full-Stack Junior con experiencia en Symfony, React Native, React y mas.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href={`${basePath}/favicon/favicon.ico`} />
        <link rel="apple-touch-icon" sizes="180x180" href={`${basePath}/favicon/apple-touch-icon.png`} />
        <link rel="icon" type="image/png" sizes="32x32" href={`${basePath}/favicon/favicon-32x32.png`} />
        <link rel="icon" type="image/png" sizes="16x16" href={`${basePath}/favicon/favicon-16x16.png`} />
        <link rel="manifest" href={`${basePath}/favicon/site.webmanifest`} />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        <AOSProvider>{children}</AOSProvider>
      </body>
    </html>
  )
}
