// import './App.css'
import {BrowserRouter,Routes, Route} from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import { Hero } from './components/hero/Hero'
import { Cart } from './components/cart/Cart'
import { Card } from './components/cards/Card'
import { Footer } from './components/footer/Footer'
import { Landing } from './pages/Landing'

function App() {
  return (
   <div>
    <Landing />
      
      {/* <Navbar /> */}
      {/* <Hero /> */}
      {/* <Cart /> */}
      {/* <Card /> */}
      {/* <Footer /> */}
   </div>
  )
}

export default App
