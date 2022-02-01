import React from 'react';
import {Link} from "react-router-dom";
import {Nav} from "react-bootstrap";

function NavBar(props) {
    return (
        <Nav activeKey="/" >
            <Nav.Item>
                <Nav.Link as={Link} to="/categories">Categories</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link as={Link} to="/makers">Makers</Nav.Link>
            </Nav.Item>
        </Nav>
    );
}

export default NavBar;