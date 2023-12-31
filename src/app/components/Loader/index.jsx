'use client'
import React, { useState, useEffect } from 'react'
import styles from './Load.module.css'
import Image from 'next/image'
import imgSrc from '../../../../public/logo_white.svg'

const Loader = () => {
  const [isUnmounting, setIsUnmounting] = useState(false)

  useEffect(() => {
    return () => {
      setIsUnmounting(true)
    }
  }, [])

  return (
    <div className={`${styles.container} ${isUnmounting ? styles.fadeOut : ''}`}>
      <div className={styles['lds-dual-ring']}>
        <Image className={styles.img} src={imgSrc} width={200} alt="ewforex.net" />
      </div>
    </div>
  )
}

export default Loader
