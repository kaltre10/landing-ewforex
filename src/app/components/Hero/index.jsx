import React from 'react'
import styles from './Hero.module.css'
import FormExchange from '../FormExchange'
import PropTypes from 'prop-types'

const Hero = ({ price }) => {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.heroContent}>
          <h1 className={styles.h1}>Cambio de Dólares, Soles y Criptomonedas</h1>
          <p className={styles.p}>Descubre una experiencia única en cambio de divisas en Miraflores, Lima, Peru. Optimiza tu tiempo y ahorra dinero con nuestra atención personalizada. ¡Haz tus transacciones de forma segura y sin complicaciones!</p>
          <div className={styles.actionButtons}>
            <a href='https://ewforex.net/app/' className={styles.button}>Iniciar Sesión</a>
            <a href='https://api.whatsapp.com/send?phone=51955269142' target='blank' className={styles.button}>WhatsApp</a>
            {/* <a href='https://bitmarketperu.com/' target='blank' className={styles.button}>Cripto</a> */}
          </div>
        </div>
        <div className={styles.heroform}>
          <FormExchange price={price} />
        </div>
        <div className={styles.actionButtonsMobile}>
          <a href='https://ewforex.net/app/' className={styles.button}>Iniciar Sesión</a>
          <a href='https://api.whatsapp.com/send?phone=51955269142' target='blank' className={styles.button}>WhatsApp</a>
          {/* <a href='https://bitmarketperu.com/' target='blank' className={styles.button}>Cripto</a> */}
        </div>
      </div>
    </section>
  )
}

Hero.propTypes = {
  price: PropTypes.object.isRequired
}

export default Hero
