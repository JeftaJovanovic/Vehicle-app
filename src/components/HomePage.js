import React from 'react';
import Header from './Header';
import { inject } from 'mobx-react';
@inject('rootStore')
class HomePage extends React.Component {

    render() {
        return (
            <React.Fragment>
                <Header />
                <div>
                    <h1>Home</h1>
                    <button onClick={this.handleClick}>
                        Go to Vehicle Models List
                    </button>
                </div>
            </React.Fragment>
        )
    }

    handleClick = () => {
        const { rootStore } = this.props;
        rootStore.routerStore.goTo('vehicleModelListView');
    };

}

export default HomePage;