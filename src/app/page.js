'use client'
import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Banner from './components/BannerTal'
import About from './components/About'
import Fac from './components/Fac'
import Footer from './components/Footer'
import Load from './components/Loader'

export default function Home () {
  const [load, setLoad] = useState(true)
  const [price, setPrice] = useState({
    buy: 0,
    sell: 0
  })

  useEffect(() => {
    fetch('https://ewforex.net/app/divisas')
      .then(res => res.json())
      .then(res => {
        setPrice({
          buy: res[0].com_divisa,
          sell: res[0].ven_divisa
        })
        setLoad(false)
      })
  }, [])

  return (<>
    {
      load
        ? <Load />
        : (<div className='header-container'>
          <div className='over'>
            <Header />
            <Hero setLoad={setLoad} price={price} />
            <Banner />
            <About />
            <Fac />
            <Footer />
          </div>
        </div>)
    }

  </>)
}
