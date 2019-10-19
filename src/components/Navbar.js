import React from 'react'

import { Navbar, Nav, NavDropdown, Form, FormControl } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

export default function NavigationBar() {
    return (
        <Navbar bg="light" expand="lg" className="container-fluid px-5">
        <Navbar.Brand href="#home">Movie Lounge</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Filter" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                by Genres
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                by Popularity 
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                by Released Day
                </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                by Collection
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2 rounded-pill" />
            <FontAwesomeIcon className="searchIcon" icon={faSearch} />
          </Form>
        </Navbar.Collapse>
      </Navbar>
    )
}
