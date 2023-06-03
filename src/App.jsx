import Header from './assets/components/Header/Header'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import './App.module.css'
import Footer from './assets/components/Footer/Footer'
import Contact from './assets/pages/Contact/Contact'
import Home from './assets/pages/Home/Home'
import About from './assets/pages/About/About'
import Order from './assets/pages/Order/Order'

function App() {

  return (
    <Router>
      <Header />

      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path='/order' element={<Order />} />
        </Routes>
      </main>

      <Footer />
    </Router>
  )
}

export default App
