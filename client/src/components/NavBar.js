import React, {useState, useContext, useEffect} from 'react';
import {Navbar, Container, Nav} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';
import logo from "../resources/logo512.png";
import {UserContext} from './context';

function NavBar(){
  const [cntx, setCntx] = useContext(UserContext);
  console.log(cntx);
  console.log(!cntx.loggedIn)


  return(
  <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="/">
        <img
          alt=""
          src={logo}
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '}
    
      BadBank
      </Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link disabled={cntx.loggedIn}>
          <NavLink style={{all:'inherit'}} to="/createAccount">Create Account</NavLink>
        </Nav.Link>
        <Nav.Link disabled={!cntx.loggedIn}>
          <NavLink style={{all:'inherit'}} to="/deposit">Deposit</NavLink>
        </Nav.Link>
        <Nav.Link disabled={!cntx.loggedIn}>
          <NavLink style={{all:'inherit'}} to="/withdraw">Withdraw</NavLink>
        </Nav.Link>
        <Nav.Link >
          <NavLink style={{all:'inherit'}} to="/alldata">All Data</NavLink>
        </Nav.Link>
      </Nav>
    </Container>
  </Navbar>
  )};

export default NavBar;
 