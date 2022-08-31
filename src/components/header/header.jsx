import React from "react";
import "./headerstyle.css"

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import {Link} from "react-router-dom";

function Name() {
  return(
    <div className="header_div">
      <Navbar variant="light" expand="lg">
      <Container>
        <Navbar.Brand className="py-0"><Link to="/Blog" className="header_brand">Blogger</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link><Link to="/Blog" className="header_link">Home</Link></Nav.Link>
            <Nav.Link><Link to="/Blog/create" className="header_link">Create</Link></Nav.Link>
            <Nav.Link><Link to="/Blog/about" className="header_link">About</Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Name;
