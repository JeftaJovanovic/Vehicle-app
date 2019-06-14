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
                        <button value={'vehicleModelList'} onClick={this.handleClick}>
                            Go to Vehicle Models List
                        </button>
                        <button value={'vehicleMakeList'} onClick={this.handleClick}>
                            Go to Vehicle Makes List
                        </button>
                    </div>
                </React.Fragment>
            );
        }

        handleClick = (e) => {
            const { rootStore } = this.props;
            const value = e.target.value;
            rootStore.routerStore.goTo(value);
        };
    }
);

