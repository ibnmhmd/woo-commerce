import React from 'react';
import Link from 'next/link'
import {
      Navbar, Nav, 
      NavItem, NavDropdown, MenuItem, Glyphicon
} from 'react-bootstrap';
import Router from 'next/router'

const TopBarComponent = () => (
      < Navbar className = "__topbar_nav_main hidden-xs hidden-sm" >
            {/* <Navbar.Header>
                  <Navbar.Brand>
                        <a href="#home">React-Bootstrap</a>
                  </Navbar.Brand>
            </Navbar.Header> */}

            {/* hide on xs, sm and md */}
            < Nav className = "pull-right hidden-xs hidden-sm" >
                  <NavItem eventkey={1} href="#">
                      {/*<Glyphicon glyph = "user" className ="__topbar_glyph_user"/> */} My Account
                  </NavItem>
                    < NavItem onClick={() => Router.push('/register', 'register')} eventkey = { 2 }>
                        Sign In / Register 
                  </NavItem>
 
                  <NavDropdown title="Dropdown" id="nav-dropdown">
                        <NavDropdown.Item eventkey="4.1">Action</NavDropdown.Item>
                        <NavDropdown.Item eventkey="4.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item eventkey="4.3">Something else here</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item eventkey="4.4">Separated link</NavDropdown.Item>
                  </NavDropdown>

                  <NavItem eventkey={5}
                        href="#" >
                       Contact Us </NavItem>

                  <NavItem eventkey={6}
                        href="#" >
                        Support </NavItem>
            </Nav>
             { /* hide on xs, sm and md ends*/ }


              {/* show on xs, sm and md */}
            < Nav className = "pull-right hidden __topbar_ul" >
                  
                 <NavDropdown title="Dropdown" id="nav-dropdown">
                        <NavDropdown.Item eventkey="4.1">Action</NavDropdown.Item>
                        <NavDropdown.Item eventkey="4.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item eventkey="4.3">Something else here</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item eventkey="4.4">Separated link</NavDropdown.Item>
                  </NavDropdown>
            </Nav>
             { /* show on xs, sm and md ends*/ }
      </Navbar>
      );

export default TopBarComponent;

