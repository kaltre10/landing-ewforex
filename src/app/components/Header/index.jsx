import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import imgSrc from '../../../../public/logo_white.svg'
import styles from './Header.module.css'

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <div className={styles.logo}>
          <Image src={imgSrc} width={200} alt="ewforex.net" />
        </div>
      </div>
      <div className={styles.right}>
        <ul className={styles.nav}>
          <li>
            <Link href="/">Inicio</Link>
          </li>
          <li>
            <Link href="#about">Nosotros</Link>
          </li>
          <li>
            <Link href="https://ewforex.net/blog/">Blog</Link>
          </li>
          <li className={styles.containerButton}>
            <a href='https://ewforex.net/app/' className={styles.loginButton}>Iniciar Sesión</a>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Header
