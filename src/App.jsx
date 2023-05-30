import Header from './assets/components/Header/Header'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import './App.module.css'
import Footer from './assets/components/Footer/Footer'

function App() {

  return (
    <Router>
      <Header />


      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
      </Routes>

      <Footer />
    </Router>
  )
}

export default App
