import Header from './assets/components/Header/Header'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import './App.module.css'

function App() {

  return (
    <Router>
      <Header />


      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
      </Routes>
    </Router>
  )
}

export default App
