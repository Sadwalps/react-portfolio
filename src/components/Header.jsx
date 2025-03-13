import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
function Header() {
  return (
    <>
    {[false].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3">
          <Container fluid>
            <Navbar.Brand href="#">SADWAL</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="start"
              className="w-50 "        
            >
              <Offcanvas.Header closeButton className='bg-light p-4' >
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#maincontainerdiv"><div className='d-flex  algin-items-center' id='navmaindiv'> <div id='hoverdiv'></div><div id='nav'>Home</div></div></Nav.Link>
                  <Nav.Link href="#aboutdiv"><div className='d-flex  algin-items-center' id='navmaindiv'> <div id='hoverdiv'></div><div id='nav'>About</div></div></Nav.Link>
                  <Nav.Link href="#skillsdiv"><div className='d-flex  algin-items-center' id='navmaindiv'> <div id='hoverdiv'></div><div id='nav'>Skills</div></div></Nav.Link>
                  <Nav.Link href="#projectsdiv"><div className='d-flex  algin-items-center' id='navmaindiv'> <div id='hoverdiv'></div><div id='nav'>Projects</div></div></Nav.Link>
                  <Nav.Link href="#contactdiv"><div className='d-flex  algin-items-center' id='navmaindiv'> <div id='hoverdiv'></div><div id='nav'>Contact</div></div></Nav.Link>
                </Nav>   
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  )
}

export default Header