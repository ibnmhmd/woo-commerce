import React from 'react';
import Link from 'next/link'
import {
      Grid,
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
                  <NavItem eventKey={1} href="#">
                      <Glyphicon glyph = "user" className ="__topbar_glyph_user"/> My Account
                  </NavItem>
                    < NavItem onClick={() => Router.push('/register', 'Register')} eventKey = { 2 }>
                        Sign In / Register 
                  </NavItem>
 
                  <NavDropdown eventKey={4} title="About Us" id="basic-nav-dropdown">
                        <MenuItem eventKey={4.1}>Action</MenuItem>
                        <MenuItem eventKey={4.2}>Another action</MenuItem>
                        <MenuItem eventKey={4.3}>Something else here</MenuItem>
                        <MenuItem divider />
                        <MenuItem eventKey={4.4}>Separated link</MenuItem>
                  </NavDropdown>

                  <NavItem eventKey={5}
                        href="#" >
                       Contact Us </NavItem>

                  <NavItem eventKey={6}
                        href="#" >
                        Support </NavItem>
            </Nav>
             { /* hide on xs, sm and md ends*/ }


              {/* show on xs, sm and md */}
            < Nav className = "pull-right hidden __topbar_ul" >
                  
                  <NavDropdown eventKey={4} title="Menu" id="basic-nav-dropdown">
                        <MenuItem eventKey={4.1}> <Glyphicon glyph = "user" className ="__topbar_glyph_user"/>
                         My Acount</MenuItem>
                        <MenuItem eventKey={4.2}> Sign In / Register</MenuItem>
                        <MenuItem eventKey={4.3}> About Us</MenuItem>                    
                        <MenuItem eventKey={4.4}>Contact Us</MenuItem>
                        <MenuItem eventKey={4.4}>Support</MenuItem>
                  </NavDropdown>
            </Nav>
             { /* show on xs, sm and md ends*/ }
      </Navbar>
      );

export default TopBarComponent;

