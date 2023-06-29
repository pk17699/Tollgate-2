import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
const Header = () =>{
    return(
    <Navbar bg="dark" variant="dark">
        <Container>
            <Navbar.Brand>Player App</Navbar.Brand>
            <Nav className="me-auto">
            <Nav.Link><NavLink to='/showPlayer' style={{textDecoration: 'none'}}>Show Player</NavLink></Nav.Link>
            <Nav.Link><NavLink to='/addPlayer' style={{textDecoration: 'none'}}>Add Player</NavLink></Nav.Link>
            </Nav>
        </Container>
    </Navbar>
    )
}
export default Header;