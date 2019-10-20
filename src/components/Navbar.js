import React from "react";
import {Link} from 'react-router-dom';

import { Navbar, Nav, Form, FormControl, Image} from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function NavigationBar(props) {
  return (
    <Navbar expand="lg" className="navBar container-fluid sticky-top">
      <Navbar.Brand href="#home"><Image src={require('../assets/movieloungelogo-01.png')} alt='MOVIE LOUNGE LOGO' id="navLogo" /></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link className="mr-4 text-light" onClick={() => {
            props.setMode('trending')
            props.setCurrentPageNumber(1)}}>
                Home
          </Nav.Link>
          <Nav.Link className="mr-4 text-light" onClick={() => {
            props.setMode('toprated')
            props.setCurrentPageNumber(1)
          }}>
                Top Rated
            </Nav.Link>
          <Nav.Link href="#home" className="mr-4 text-light" onClick={() => {
            props.setMode('upcoming')
            props.setCurrentPageNumber(1)
          }}>Up Coming</Nav.Link>
          <Nav.Link href="#home" className="mr-4 text-light" onClick={() => {
            props.setMode('tvpopular')
            props.setCurrentPageNumber(1)
          }}>TV Series</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl
            type="text"
            placeholder="Search"
            className="mr-sm-2 rounded-pill searchBar"
            maxLength="20"
            onChange={e => {
              props.setQuery(e.target.value)
            }}
          />
          <FontAwesomeIcon className="searchIcon" icon={faSearch} onClick={() => props.searchMovies(props.query)} />
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
}
