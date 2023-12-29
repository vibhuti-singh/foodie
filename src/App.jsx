import React from 'react'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Menu from './pages/Menu'
import { CardProvider } from './context/CardContext'
import Cart from './pages/Cart'
import { CartProvider } from './context/CartContext'
import Userdetails from './pages/Userdetails'
const App = () => {
  return (
   <Router>
   <CardProvider>
  <CartProvider>
  <Navbar/>
 <Routes>
  <Route path='/' element={<HomePage/>}/>
<Route path ="/menu" element={<Menu/>}/>

<Route path ="/cart" element={<Cart/>}/>
<Route path ="/userdetails" element={<Userdetails/>}/>
 </Routes>
  </CartProvider>
   </CardProvider>
   </Router>
  )
}

export default App
