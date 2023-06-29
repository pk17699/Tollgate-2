import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
const Header = () =>{
    return(
    <Navbar bg="dark" variant="dark">
        <Container>
            <Navbar.Brand>Book App</Navbar.Brand>
            <Nav className="me-auto">
            <Nav.Link><NavLink to='/dashboard' style={{textDecoration: 'none'}}>Dashboard</NavLink></Nav.Link>
            <Nav.Link><NavLink to='/add-books' style={{textDecoration: 'none'}}>Add Books</NavLink></Nav.Link>
            <Nav.Link><NavLink to='/favorite' style={{textDecoration: 'none'}}>Favorite</NavLink></Nav.Link>
            </Nav>
        </Container>
    </Navbar>
    )
}
export default Header;