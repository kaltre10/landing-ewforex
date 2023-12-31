import React from 'react'
import './globals.css'
import { Poppins } from 'next/font/google'
import PropTypes from 'prop-types'
const nunito = Poppins({ subsets: ['latin'], weight: ['400', '700'] })

export const metadata = {
  title: 'Casa de cambios Miraflores | ewforex.net',
  description: 'Casa de Cambios Online En lima perú, Miraflores, Compra y Venta de Dolares, Cambio de Divisas al Mejor Precio. Mejor precio del dolar en perú, Euros, Pesos chilenos, Pesos Colombianos.'
}

export default function RootLayout ({ children }) {
  return (
    <html lang="en" className={nunito.className}>
      <body>
        { children }
      </body>
    </html>
  )
}

RootLayout.propTypes = {
  children: PropTypes.any
}
