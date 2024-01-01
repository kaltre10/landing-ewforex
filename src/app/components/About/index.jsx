import React from 'react'
import styles from './about.module.css'
import Image from 'next/image'
import fachada from '../../../../public/fachada.svg'

const About = () => {
  return (
    <div id="about" className={styles.aboutSection}>
      <div className={styles.aboutContent}>
        <div className={styles.aboutText}>
          <h2>Sobre Nosotros</h2>
          <p>
          Bienvenido a ewforex.net, tu destino confiable para comprar y vender dólares online de manera rápida, fácil y segura en cualquier rincón de Perú.

Con una sólida trayectoria de más de 5 años en el mercado financiero.
          </p>
          <p>
            Nuestro establecimiento se encuentra en Lima, Distrito Miraflores - <a href='https://maps.app.goo.gl/AcyJp5DMdx1FmFYm7' target='blank'>Avenida del Ejercito 768</a>.
          </p>
          <p>Operamos bajo todas las licencias necesarias para llevar a cabo actividades de cambio de monedas. Tu confianza en nosotros se respalda con nuestro compromiso de cumplir con las normativas y estándares más rigurosos.</p>
          <p> también nos especializamos en transacciones de criptomonedas, brindando opciones versátiles para tus necesidades financieras.</p>
        </div>
        <div className={styles.aboutImage}>
          <Image src={fachada} alt="Acerca de Nosotros" />
        </div>
      </div>
    </div>
  )
}

export default About
