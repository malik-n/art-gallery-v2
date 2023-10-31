import { Button, Container, Form, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link, NavLink, Route, Router } from 'react-router-dom'

function Navigation() {
  return (

      <Navbar expand="lg" className="bg-body-tertiary" data-bs-theme="dark">
      <Container fluid>
        <Navbar.Brand href="#">Art Gallery</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Donate</Nav.Link>
            <NavDropdown title="Links" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">About Us</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Contact Us
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Our Partners
              </NavDropdown.Item>
            </NavDropdown>
    
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    

  );
}

export default Navigation;