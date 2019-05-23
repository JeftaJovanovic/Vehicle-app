import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar } from '@fortawesome/free-solid-svg-icons';
import { Navbar } from 'react-bootstrap';

function Header() {

    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand>
                < FontAwesomeIcon icon={faCar} />
                {' Vehicle App'}
            </Navbar.Brand>
        </Navbar>
    );
}

export default Header;