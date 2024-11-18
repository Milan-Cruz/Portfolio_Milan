import React from 'react'
import HeroImage from '../HeroImage/HeroImage'
import Button from '../Button/Button'

const HeroSection: React.FC = () => {
  const backgroundImage = '/assets/bgportfoliox.png'

  return (
    <div className="text-center py-5">
      <HeroImage bgImage={backgroundImage}>
        <div style={{ display: 'block', textAlign: 'center' }}>
          <h1>Milan Cruz - Full Stack Web Developer</h1>
          <p>
            Passionate about creating interactive web applications and solving
            complex problems.
          </p>

          {/* MERN Stack Bullet Points */}
          <ul className="list-unstyled mt-4">
            <li>🔹 MongoDB - NoSQL Database</li>
            <li>🔹 Express.js - Web Framework</li>
            <li>🔹 React - Frontend Library</li>
            <li>🔹 Node.js - Backend Runtime</li>
          </ul>

          {/* Contact Me Button */}
          <div className="mt-3" id="contact">
            <Button
              label="Contact Me!"
              onClick={() => (window.location.href = '#home')}
            />
          </div>
        </div>
      </HeroImage>
    </div>
  )
}

export default HeroSection
