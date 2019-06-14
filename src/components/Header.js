import React from 'react';
import { Navbar, Nav } from 'react-bootstrap'
import { inject } from 'mobx-react';


@inject('rootStore')
class Header extends React.Component {
    render() {

        const { routerStore } = this.props.rootStore;

        return (
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand onClick={e => routerStore.goTo('home')}>Vehicle App</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link onClick={e => routerStore.goTo('vehicleModelList')}>Model List</Nav.Link>
                    <Nav.Link onClick={e => routerStore.goTo('vehicleMakeList')}>Make List</Nav.Link>
                </Nav>
            </Navbar>
        );
    }
}

export default Header;