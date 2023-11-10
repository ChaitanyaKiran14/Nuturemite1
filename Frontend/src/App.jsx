import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './Components/Home';
import Header from './Components/Header';
import Products from './Components/Products';
import Vendors from './Components/Vendors';
import NotFound from './Components/NotFound';
import './App.css'

function App() {
  return (
    <>
    <Router>
      <Header/>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/products" element={<Products />} />
                <Route path="/vendors" element={<Vendors />} />
                <Route path = "*"  element={<NotFound />} />
            </Routes>
        </Router>
      
    </>
  )
}

export default App
