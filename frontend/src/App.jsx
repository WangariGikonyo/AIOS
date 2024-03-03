// import './App.css'
import {BrowserRouter} from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import { Hero } from './components/hero/Hero'
import { Cart } from './components/cart/Cart'
import { Card } from './components/cards/Card'
import { Footer } from './components/footer/Footer'

function App() {
  return (
   <div>
      <Navbar />
      <Hero />
      <Cart />
      <Card />
      <Footer />
   </div>
  )
}

export default App
