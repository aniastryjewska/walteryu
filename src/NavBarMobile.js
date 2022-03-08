import React from 'react';
import { Container, Offcanvas, Nav } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar'

export function NavBarMobile () {

    return (
        
        <div className="d-sm-block d-md-none">
          <Navbar bg="light" expand={false} variant="light">
  <Container fluid>
    <Navbar.Brand href="https://www.instagram.com/lf_walter_yu/"><img className="inst-icon" src="instagram_logo.png" alt="inst"/></Navbar.Brand>
    <Navbar.Toggle aria-controls="offcanvasNavbar" />
    <Navbar.Offcanvas
      id="offcanvasNavbar"
      aria-labelledby="offcanvasNavbarLabel"
      placement="end"
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title id="offcanvasNavbarLabel">Walter Yu</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Nav className="flex-grow-1">
        <Navbar.Brand href="/works" className="mobile-navbar-maincat" >Works</Navbar.Brand>
            <Navbar.Brand href="/works/paintings" className="mobile-navbar-subcat">Paintings</Navbar.Brand>
            <Navbar.Brand href="/works/drawings" className="mobile-navbar-subcat">Drawings</Navbar.Brand>
            <Navbar.Brand href="/works/scrolls" className="mobile-navbar-subcat">Scrolls</Navbar.Brand>
            <Navbar.Brand href="/works/sculptures" className="mobile-navbar-subcat">Sculptures</Navbar.Brand>
          <Navbar.Brand href="/words" className="mobile-navbar-maincat">Words</Navbar.Brand>
          <Navbar.Brand href="/present" className="mobile-navbar-maincat">Present</Navbar.Brand>
          <Navbar.Brand href="/past" className="mobile-navbar-maincat">Past</Navbar.Brand>
        </Nav>
      </Offcanvas.Body>
    </Navbar.Offcanvas>
  </Container>
</Navbar>
  
        </div>
   
    );
  }
  
  export default NavBarMobile;