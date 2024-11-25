import React from 'react'

interface SkillsProps {
  onClose: () => void // Function to close the modal
}

const Skills: React.FC<SkillsProps> = ({ onClose }) => {
  return (
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
        overflow: 'auto',
        padding: '20px',
      }}
    >
      <div
        style={{
          backgroundColor: '#1a1a1a',
          color: 'white',
          padding: '20px',
          borderRadius: '8px',
          width: '80%',
          maxWidth: '900px',
          maxHeight: '90vh',
          overflowY: 'auto',
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
          <h2 className="mb-4">Skills</h2>
          <span
            onClick={onClose}
            style={{
              cursor: 'pointer',
              fontSize: '24px',
              fontWeight: 'bold',
              color: '#fff',
              marginRight: '10px',
            }}
          >
            &times;
          </span>
        </div>

        <div className="row justify-content-center">
          {/* Languages/Frameworks */}
          <div
            className="col-md-8 mx-3 mb-4"
            style={{
              backgroundColor: '#2a2a2a',
              color: 'white',
              padding: '20px',
              borderRadius: '8px',
              height: 'auto',
            }}
          >
            <h3 style={{ marginBottom: '15px' }}>Languages/Frameworks</h3>
            <p style={{ marginBottom: '10px' }}>JavaScript (React, Node.js)</p>
            <p style={{ marginBottom: '10px' }}>Python</p>
            <p style={{ marginBottom: '10px' }}>Java</p>
          </div>

          {/* Tools */}
          <div
            className="col-md-8 mx-3 mb-4"
            style={{
              backgroundColor: '#2a2a2a',
              color: 'white',
              padding: '20px',
              borderRadius: '8px',
              height: 'auto',
            }}
          >
            <h3 style={{ marginBottom: '15px' }}>Tools</h3>
            <p style={{ marginBottom: '10px' }}>Git</p>
            <p style={{ marginBottom: '10px' }}>Docker</p>
            <p style={{ marginBottom: '10px' }}>Postman</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
