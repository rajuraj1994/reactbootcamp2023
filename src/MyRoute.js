import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Layouts from './components/Layouts'
import HomePage from './pages/HomePage'
import ProductDetails from './pages/ProductDetails'

const MyRoute = () => {
  return (
    <Router>
        <Routes>
          <Route path='/' element={<Layouts/>}>
            <Route index element={<HomePage/>}/>
            <Route path='productdetails/:productId' element={<ProductDetails/>}/>
          </Route>
        </Routes>
    </Router>
  )
}

export default MyRoute