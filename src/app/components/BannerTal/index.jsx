import React from 'react'
import styles from './bannerTal.module.css'
import Image from 'next/image'
import imgSrc from '../../../../public/app.svg'

const BannerTal = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.title}>
        <p>Cambia tus divisas en línea con confianza</p>
      </div>
      <div className={styles.bannerItems}>
        <div className={`${styles.bannerItem} ${styles.bannerItemLeft}`}>
          <div className={`${styles.bannerItemChild} ${styles.alignRight}`}>
            <p>Cambia divisas con confianza en nuestra plataforma de cambio en línea en Lima, Perú</p>
            {/* <span className="pi pi-search"></span> */}
            <span className={styles.icon}>🌐</span>
          </div>
          <div className={`${styles.bannerItemChild} ${styles.alignRight}`}>
            <p>Más de 5 años de experiencia en el mercado, respaldan nuestro compromiso</p>
            {/* <span className="pi pi-search"></span> */}
            <span className={styles.icon}>📈</span>
          </div>
          <div className={`${styles.bannerItemChild} ${styles.alignRight}`}>
            <p>Premios y sorpresas para clientes como agradecimiento por su confianza en nosotros</p>
            {/* <span className="pi pi-search"></span> */}
            <span className={styles.icon}>💎</span>
          </div>
        </div>
        <div className={styles.img}>
          <Image src={imgSrc} alt=''/>
        </div>
        <div className={styles.bannerItem}>
          <div className={`${styles.bannerItemChild} ${styles.alignLeft}`}>
            {/* <span className="pi pi-search"></span> */}
            <span className={styles.icon}>🏡</span>
            <p>Convierte tus divisas desde la comodidad de tu hogar, de manera segura y sencilla</p>
          </div>
          <div className={`${styles.bannerItemChild} ${styles.alignLeft}`}>
            {/* <span className="pi pi-search"></span> */}
            <span className={styles.icon}>🎉</span>
            <p>Nuestra casa de cambios en línea te brinda la conveniencia que necesitas para tus operaciones financieras</p>
          </div>
          <div className={`${styles.bannerItemChild} ${styles.alignLeft}`}>
            {/* <span className="pi pi-search"></span> */}
            <span className={styles.icon}>👥</span>
            <p>¡Únete a nuestros clientes satisfechos y descubre por qué somos la opción número uno en Lima para cambiar divisas en línea!</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BannerTal
