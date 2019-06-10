import React from 'react';
import { inject } from 'mobx-react';
import { RouterView } from 'mobx-state-router';
import VehicleModelList from './components/VehicleModelList';
import HomePage from './components/HomePage';
import NotFoundPage from './components/NotFoundPage';
import CreateNewVehicleModel from './components/CreateNewVehicleModel';
import EditVehicleModel from './components/EditVehicleModel';

const viewMap = {
    vehicleModelList: <VehicleModelList />,
    home: <HomePage />,
    notFound: <NotFoundPage />,
    createVehicle: <CreateNewVehicleModel />,
    editVehicleModel: <EditVehicleModel />
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
