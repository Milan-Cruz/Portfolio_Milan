import React from 'react'
import MyNavbar from './components/Navbar/Navbar'
import HeroSection from './components/HeroSection/HeroSection'
import ProjectShowcase from './components/ProjectShowcase/ProjectShowcase'
import Footer from './components/Footer/Footer'
import './App.css'

const App: React.FC = () => {
  return (
    <div className="bg-dark text-light">
      <MyNavbar />
      <div className="App-content">
        <div className="App-overlay">
          <HeroSection />
          <ProjectShowcase />
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default App
