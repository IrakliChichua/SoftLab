import React from 'react';
import {Nav} from "react-bootstrap";
import {Link} from "react-router-dom";

function Navigation() {
    return (
        <Nav
            activeKey="/"
        >
            <Nav.Item>
                <Nav.Link as={Link} to="/gallery">Gallery</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link as={Link} to="/timer">Timer</Nav.Link>
            </Nav.Item>
        </Nav>
    );
}


export default Navigation;