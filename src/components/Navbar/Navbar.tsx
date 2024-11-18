import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'

const MyNavbar: React.FC = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Milan Cruz Portfolio</Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link href="#projects">Projects</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default MyNavbar
