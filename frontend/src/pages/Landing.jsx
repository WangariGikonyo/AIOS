import React from 'react'
import Navbar from '../components/navbar/Navbar'
import { Hero } from '../components/hero/Hero'
import {Card} from '../components/cards/Card'
import { Footer } from '../components/footer/Footer'

export const Landing = () => {
  return (
    <div>
        <Navbar />
         <Hero />
         <Card />
         <Footer />
    
    </div>
  )
}
    
