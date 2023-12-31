import React from 'react'
import styles from './Hero.module.css'
import FormExchange from '../FormExchange'
import PropTypes from 'prop-types'

const Hero = ({ price }) => {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.heroContent}>
          <h2 className={styles.h2}>Casa de cambios en línea Miraflores Lima Perú</h2>
          <p className={styles.p}>Cambio de divisas personales y para negocios, Experimenta la excelencia en nuestro servicio ahorrando tiempo y dinero.</p>
          <div className={styles.actionButtons}>
            <a href='https://ewforex.net/app/' className={styles.button}>Iniciar Sesión</a>
            <a href='https://api.whatsapp.com/send?phone=51955269142' target='blank' className={styles.button}>WhatsApp</a>
          </div>
        </div>
        <div className={styles.heroform}>
          <FormExchange price={price} />
        </div>
        <div className={styles.actionButtonsMobile}>
          <a href='https://ewforex.net/app/' className={styles.button}>Iniciar Sesión</a>
          <a href='https://api.whatsapp.com/send?phone=51955269142' target='blank' className={styles.button}>WhatsApp</a>
        </div>
      </div>
    </section>
  )
}

Hero.propTypes = {
  price: PropTypes.object.isRequired
}

export default Hero
