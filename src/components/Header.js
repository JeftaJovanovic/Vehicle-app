import React from 'react';

import logo from '../logo.svg';
import Navbar from 'react-bootstrap/Navbar'

function Header() {
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">
                <img
                    alt="logo"
                    src={logo}
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                />
                {' Vehicle App'}
            </Navbar.Brand>
        </Navbar>
    );
}


export default Header;