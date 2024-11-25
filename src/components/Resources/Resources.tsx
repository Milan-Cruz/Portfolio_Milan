import React from 'react'

interface ResourcesProps {
  onClose: () => void // Function to close the modal
}

const Resources: React.FC<ResourcesProps> = ({ onClose }) => {
  const resources = [
    {
      title: 'Moodle Modernization Guide',
      summary:
        'A guide to updating Moodle LMS pages using modern web technologies.',
      link: 'https://docs.moodle.org/',
    },
    {
      title: 'React Basics for Beginners',
      summary: 'An introduction to building interactive UIs with React.',
      link: 'https://reactjs.org/docs/getting-started.html',
    },
    {
      title: 'Learn TypeScript',
      summary: 'Comprehensive resources for mastering TypeScript.',
      link: 'https://www.typescriptlang.org/docs/',
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
          <h2 className="mb-4">Resources</h2>
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
          {/* First two resources side by side */}
          {resources.slice(0, 2).map((resource, index) => (
            <div
              className="col-md-5 mx-3 mb-4"
              key={index}
              style={{
                backgroundColor: '#2a2a2a',
                color: 'white',
                padding: '20px',
                borderRadius: '8px',
                height: 'auto',
              }}
            >
              <h3>{resource.title}</h3>
              <p>{resource.summary}</p>
              <a
                href={resource.link}
                target="_blank"
                rel="noreferrer"
                style={{
                  color: '#4db8ff',
                  textDecoration: 'none',
                  fontWeight: 'bold',
                }}
              >
                View Resource
              </a>
            </div>
          ))}
        </div>

        {/* Third resource centered */}
        <div className="row justify-content-center">
          <div
            className="col-md-8"
            style={{
              backgroundColor: '#2a2a2a',
              color: 'white',
              padding: '20px',
              borderRadius: '8px',
            }}
          >
            <h3>{resources[2].title}</h3>
            <p>{resources[2].summary}</p>
            <a
              href={resources[2].link}
              target="_blank"
              rel="noreferrer"
              style={{
                color: '#4db8ff',
                textDecoration: 'none',
                fontWeight: 'bold',
              }}
            >
              View Resource
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Resources
