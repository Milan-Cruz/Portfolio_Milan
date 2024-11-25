import React from 'react'

interface WorkProps {
  onClose: () => void // Function to close the modal
}

const Work: React.FC<WorkProps> = ({ onClose }) => {
  const workItems = [
    {
      title: 'Distance Learning Assistant - FMU',
      description:
        'Modernized Moodle LMS pages using JavaScript, HTML, and CSS.',
      tech: ['JavaScript', 'HTML', 'CSS'],
      link: 'https://www.fmu.br',
    },
    {
      title: 'Civil Engineering Intern - Impacto Constructions',
      description:
        'Managed construction projects and ensured compliance with safety regulations.',
      tech: ['AutoCAD', 'Revit'],
      link: 'https://construtoraimpacto.com.br/',
    },
  ]

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
          <h2 className="mb-4">Work</h2>
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

        {/* Work Items */}
        <div className="row justify-content-center">
          {workItems.map((item, index) => (
            <div
              className="col-md-8 mb-3"
              key={index}
              style={{
                backgroundColor: '#2a2a2a',
                color: 'white',
                padding: '15px', // Reduced padding for a more compact card
                borderRadius: '8px',
                fontSize: '14px', // Reduced font size for better spacing
              }}
            >
              <h4 style={{ marginBottom: '10px', fontSize: '18px' }}>
                {item.title}
              </h4>
              <p style={{ marginBottom: '8px' }}>{item.description}</p>
              <p style={{ marginBottom: '8px' }}>
                <strong>Tech Used:</strong> {item.tech.join(', ')}
              </p>
              <a
                href={item.link}
                target="_blank"
                rel="noreferrer"
                style={{
                  color: '#4db8ff',
                  textDecoration: 'none',
                  fontWeight: 'bold',
                }}
              >
                View Company
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Work
