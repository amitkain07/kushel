import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AfHero from './components/AfHero'
import Services from './components/Services'
import Technology from './components/Technology'
import Ecommerece from './components/Ecommerce'
import ReadyPartner from './components/Partner'
import OurProcess from './components/Process'
import Discover from './components/Discover'
import FeaturedClients from './components/Feature'
import SatisfiedClients from './components/Satify'
import Footer from './components/Footer'
import Form from './components/Form'
const App = () => {
  return (
    <div>
      <Navbar />
      <section id="hero"><Hero /></section>
      <section id="afhero"><AfHero /></section>
      <section id="services"><Services /></section>
      <section id='ecommerce'><Ecommerece/></section>
      <section id="technology"><Technology /></section>
      <section id='partner'><ReadyPartner/></section>
      <section id='process'><OurProcess/></section>
      <section id='discover'><Discover/></section>
      <section id='Feature'><FeaturedClients/></section>
      <section id='statify'><SatisfiedClients/></section>
      <section id='form'><Form/></section>
      <Footer/>
    </div>
  )
}

export default App
