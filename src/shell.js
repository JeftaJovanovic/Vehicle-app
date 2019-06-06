import React from 'react';
import { inject } from 'mobx-react';
import { RouterView } from 'mobx-state-router';
import VehicleModelListView from './components/VehicleModelListView';
import HomePage from './components/HomePage';
import NotFoundPage from './components/NotFoundPage';

const viewMap = {
    vehicleModelListView: <VehicleModelListView />,
    home: <HomePage />,
    notFound: <NotFoundPage />
};
@inject('rootStore')
class Shell extends React.Component {
    render() {
        const { rootStore } = this.props;
        const { routerStore } = rootStore;

        return <RouterView routerStore={routerStore} viewMap={viewMap} />;
    }
}
export default Shell;
