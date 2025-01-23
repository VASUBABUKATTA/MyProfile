import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './Pages/Homepage';
import About from './Pages/AboutPage';
import Portfolio from './Pages/Portfolio';
import Services from './Pages/Services';
import Contact from './Pages/ContactPage';
import Header from './Components/Header';
import Footer from './Components/Footer';
import './App.css';

const App=()=>{
  return(
    <div className="app-container">
    <main>
     <Router>
       <Header />
       <Routes>
         <Route path="/" element={<Homepage />} />
         <Route path="/about" element={<About />} />
         <Route path="/portfolio" element={<Portfolio />} />
         <Route path="/services" element={<Services />} />
         <Route path="/contact" element={<Contact />} />
       </Routes>
       
     </Router>
    </main>
    <Footer />
  </div>
  )
}
export default App;