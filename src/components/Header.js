import React from 'react';
import { Navbar, Nav } from 'react-bootstrap'
import { inject } from 'mobx-react';


@inject('rootStore')
class Header extends React.Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand onClick={e => this.props.rootStore.routerStore.goTo('home')}>Vehicle App</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link onClick={e => this.props.rootStore.routerStore.goTo('vehicleModelList')}>Model List</Nav.Link>
                    <Nav.Link onClick={e => this.props.rootStore.routerStore.goTo('vehicleMakeList')}>Make List</Nav.Link>
                </Nav>
            </Navbar>
        );
    }
}

export default Header;