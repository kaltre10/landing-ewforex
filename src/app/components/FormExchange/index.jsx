'use client'

import React, { useEffect, useState } from 'react'
import styles from './FormExchange.module.css'
import Image from 'next/image'
import imgUSD from '../../../../public/usd.svg'
import imgPEN from '../../../../public/pen.svg'
import PropTypes from 'prop-types'

import 'primeicons/primeicons.css'

const FormExchange = ({ price }) => {
  const [buyAmount, setBuyAmount] = useState(100)
  const [sellAmount, setSellAmount] = useState(0)
  const [operation, setOperation] = useState('buy')
  const [priceBuy, setPriceBuy] = useState(0)
  const [priceSell, setPriceSell] = useState(0)

  const handleCalc = (operationCurrent) => {
    if (operationCurrent === 'buy') {
      setSellAmount((buyAmount * priceBuy).toFixed(2))
    } else {
      setSellAmount((buyAmount / priceSell).toFixed(2))
    }
    setOperation(operationCurrent)
  }

  const dolarTosol = (amount, price) => {
    if (operation === 'buy') {
      setSellAmount((amount * price).toFixed(2))
      setBuyAmount(amount)
    } else {
      setSellAmount((amount / price).toFixed(2))
      setBuyAmount(amount)
    }
  }

  const solToDolar = (amount, price) => {
    if (operation === 'buy') {
      setBuyAmount((amount / price).toFixed(2))
      setSellAmount(amount)
    } else {
      setBuyAmount((amount * price).toFixed(2))
      setSellAmount(amount)
    }
  }

  const changeOperation = () => {
    const operationCurrent = operation === 'buy' ? 'sell' : 'buy'
    setOperation(operationCurrent)
    handleCalc(operationCurrent)
  }

  useEffect(() => {
    setPriceBuy(price.buy)
    setPriceSell(price.sell)
    dolarTosol(buyAmount, Number(price.buy))
  }, [])

  return (
    <div className={styles.formSection}>
      <div className={styles.formSectionTitle}>
        <div onClick={() => handleCalc('buy')} className={operation === 'buy' ? `${styles.buyTitle} ${styles.titleActive}` : styles.buyTitle}>Compra: <br /> s/ {priceBuy}</div>
        <div onClick={() => handleCalc('sell')} className={operation === 'sell' ? `${styles.sellTitle} ${styles.titleActive}` : styles.sellTitle}>Venta: <br /> s/ {priceSell} </div>
      </div>
      <div className={styles.formInput}>
        <div className={styles.formImputAmount}>
          <span>Envias:</span>
          <input
            type="text"
            placeholder="0.00"
            value={buyAmount}
            onChange={(e) => dolarTosol(e.target.value, priceBuy)}
            className={styles.input}
          />
        </div>

        <div className={styles.inputText}>
          {operation === 'buy'
            ? (<>
              <Image src={imgUSD} className={'mr-2 flag'} alt='dolar' />
              <div>Dolares</div>
            </>)
            : (<>
              <Image src={imgPEN} className={'mr-2 flag'} alt='soles' />
              <div>Soles</div>
            </>)}

        </div>

      </div>

      <button className={styles.buttonArrow} onClick={() => changeOperation()}>
        <i className="pi pi-arrow-right-arrow-left" style={{ fontSize: '1rem' }}></i>
      </button>

      <div className={styles.formInput}>
        <div className={styles.formImputAmount}>
          <span>Recibes:</span>
          <input
            type="text"
            placeholder="0.00"
            value={sellAmount}
            onChange={(e) => solToDolar(e.target.value, priceSell)}
            className={styles.input}
          />
        </div>
        <div className={styles.inputText}>
          {operation === 'buy'
            ? (<>
              <Image src={imgPEN} className={'mr-2 flag'} alt='dolar' />
              <div>Soles</div>
            </>)
            : (<>
              <Image src={imgUSD} className={'mr-2 flag'} alt='soles' />
              <div>Dolares</div>
            </>)}
        </div>

      </div>
      <a href='https://ewforex.net/app/' className={styles.button}>
           Cambiar Ahora!
      </a>
    </div>
  )
}

FormExchange.propTypes = {
  price: PropTypes.object.isRequired
}

export default FormExchange
