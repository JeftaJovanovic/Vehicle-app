import React from 'react';
import { inject } from 'mobx-react';
import Header from '../../Components/Header';

export const HomePage = inject('rootStore')(
    class extends React.Component {
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
            );
        }

        handleClick = () => {
            const { rootStore } = this.props;
            rootStore.routerStore.goTo('vehicleModelList');
        };
    }
);

