import React, { useState } from 'react'
import HeroImage from '../HeroImage/HeroImage'
import Button from '../Button/Button'
import BasicInfo from '../BasicInfo/BasicInfo'
import Work from '../Work/Work'
import Skills from '../Skills/Skills'
import Resources from '../Resources/Resources'
import DeveloperSetup from '../DeveloperSetup/DeveloperSetup'

const HeroSection: React.FC = () => {
  const backgroundImage = '/assets/bgportfoliox.png'

  // State to manage which modal is open
  const [openModal, setOpenModal] = useState<string | null>(null)

  // Mapping section names to components
  const renderModalContent = () => {
    switch (openModal) {
      case 'Contact':
        return <BasicInfo />
      case 'Work':
        return <Work onClose={() => setOpenModal(null)} />
      case 'Skills':
        return <Skills onClose={() => setOpenModal(null)} />
      case 'Resources':
        return <Resources onClose={() => setOpenModal(null)} />
      case 'Developer Setup':
        return <DeveloperSetup />
      default:
        return null
    }
  }

  return (
    <div className="text-center py-5">
      <HeroImage bgImage={backgroundImage}>
        <div style={{ display: 'block', textAlign: 'center' }}>
          <h1>Milan Cruz - Full Stack Web Developer</h1>
          <p>
            Passionate about creating interactive web applications and solving
            complex problems.
          </p>

          {/* Buttons for each section */}
          <div
            id="contactMe"
            className="mt-4"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)', // 3 columns in the first row
              gridGap: '30px', // Space between the buttons
              justifyContent: 'center',
              padding: '0 70px', // Padding on the left and right
            }}
          >
            <Button label="Contact" onClick={() => setOpenModal('Contact')} />
            <Button label="Work" onClick={() => setOpenModal('Work')} />
            <Button label="Skills" onClick={() => setOpenModal('Skills')} />
          </div>
          <div
            className="mt-4"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)', // 2 columns in the second row
              gridGap: '42px', // Space between the buttons
              justifyContent: 'center',
              padding: '0 120px', // Padding on the left and right for the second row
            }}
          >
            <Button
              label="Resources"
              onClick={() => setOpenModal('Resources')}
            />
            <Button
              label="Developer Setup"
              onClick={() => setOpenModal('Developer Setup')}
            />
          </div>
        </div>
      </HeroImage>

      {/* Modal */}
      {openModal && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            color: 'white',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000,
          }}
        >
          <div
            style={{
              backgroundColor: '#222',
              padding: '20px',
              borderRadius: '8px',
              width: '80%', // Takes 80% of the screen width
              maxWidth: '900px', // Maximum width increased for larger screens
              textAlign: 'center',
              overflowY: 'auto', // Ensures content scrolls if it exceeds the modal height
              maxHeight: '90vh', // Prevents the modal from exceeding 90% of the viewport height
              position: 'relative',
            }}
          >
            {/* Title and Close Icon */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <h2 style={{ margin: 0 }}>{openModal}</h2>
              <span
                onClick={() => setOpenModal(null)}
                style={{
                  cursor: 'pointer',
                  fontSize: '24px',
                  fontWeight: 'bold',
                  color: 'white',
                }}
              >
                &times;
              </span>
            </div>

            {/* Render the dynamic content */}
            <div style={{ marginTop: '20px' }}>{renderModalContent()}</div>
          </div>
        </div>
      )}
    </div>
  )
}

export default HeroSection
