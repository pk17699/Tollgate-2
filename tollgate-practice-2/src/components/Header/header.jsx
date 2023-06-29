import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
const Header = () =>{
    return(
    <Navbar bg="primary" variant="dark">
        <Container>
            <Navbar.Brand>Student Management App</Navbar.Brand>
            <Nav className="me-auto">
            <Nav.Link><NavLink to='/showStudent' style={{textDecoration: 'none', color: 'black'}}>ShowStudent</NavLink></Nav.Link>
            <Nav.Link><NavLink to='/add-students' style={{textDecoration: 'none', color: 'black'}}>Add Student</NavLink></Nav.Link>
            </Nav>
        </Container>
    </Navbar>
    )
}
export default Header;