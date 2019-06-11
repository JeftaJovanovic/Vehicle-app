import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import { inject } from 'mobx-react';


@inject('rootStore')
class Header extends React.Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home" onClick={this.handleClick}>
                    {' Vehicle App'}
                </Navbar.Brand>
            </Navbar>
        );
    }

    handleClick = () => {
        const { rootStore } = this.props;
        rootStore.routerStore.goTo('home');
    };

}

export default Header;