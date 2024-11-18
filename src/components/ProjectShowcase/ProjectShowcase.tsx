import React from 'react'
import { Card, Row, Col } from 'react-bootstrap'
import Img from '../Img/Img'

interface Project {
  title: string
  image: string
  link: string
}

const projects: Project[] = [
  {
    title: 'Car Blog - Winnipeg Car Spot',
    image: '/assets/car-blog-2.png',
    link: '#',
  },
  {
    title: 'Used Cars eCommerce - WRS Garage',
    image: '/assets/used-cars.png',
    link: '#',
  },
  {
    title: 'JavaScript Calculator - One Calc',
    image: '/assets/js-calculator.png',
    link: '#',
  },
  {
    title: 'Guess Who Am I App - Star Wars Edition',
    image: '/assets/guess-who.png',
    link: '#',
  },
]

const ProjectShowcase: React.FC = () => {
  return (
    <div className="container py-5" id="projects">
      <h2 className="text-center mb-4">My Top Projects</h2>
      <Row>
        {projects.map((project, index) => (
          <Col md={6} key={index} className="mb-4">
            <Card className="bg-dark text-light">
              <div
                style={{
                  width: '100%',
                  maxHeight: '300px',
                  overflow: 'hidden',
                }}
              >
                <Img src={project.image} alt={project.title} />
              </div>
              <Card.Body>
                <Card.Title>{project.title}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default ProjectShowcase
