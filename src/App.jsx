import Header from './assets/components/Header/Header'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import './App.module.css'
import Footer from './assets/components/Footer/Footer'
import Contact from './assets/pages/Contact/Contact'
import Home from './assets/pages/Home/Home'
import About from './assets/pages/About/About'

function App() {

  return (
    <Router>
      <Header />


      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </Router>
  )
}

export default App
