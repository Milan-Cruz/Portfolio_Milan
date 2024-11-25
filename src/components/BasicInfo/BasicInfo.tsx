import React from 'react'

const BasicInfo: React.FC = () => {
  return (
    <div id="about" className="container py-5 text-center">
      <h1>Milan Cruz</h1>
      <p>Frontend & Full Stack Web Developer</p>
      <p>Winnipeg, Manitoba</p>
      <p>
        📧 milanmoreira@gmail.com | 🌐{' '}
        <a
          href="https://www.linkedin.com/in/milan-cruz/"
          target="_blank"
          rel="noreferrer"
          style={{
            color: '#4db8ff',
            textDecoration: 'none',
            fontWeight: 'bold',
          }}
        >
          LinkedIn
        </a>
      </p>
    </div>
  )
}

export default BasicInfo
