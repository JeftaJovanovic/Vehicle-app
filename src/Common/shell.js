import React from 'react';
import { inject } from 'mobx-react';
import { RouterView } from 'mobx-state-router';
import { HomePage } from '../HomePage/Pages/HomePage';
import { NotFoundPage } from '../Common/NotFoundPage';
import VehicleModelList from '../VehicleModel/Pages/VehicleModelList';
import VehicleModelCreate from '../VehicleModel/Pages/VehicleModelCreate';
import VehicleModelEdit from '../VehicleModel/Pages/VehicleModelEdit';

const viewMap = {
    vehicleModelList: <VehicleModelList />,
    home: <HomePage />,
    notFound: <NotFoundPage />,
    createVehicle: <VehicleModelCreate />,
    editVehicle: <VehicleModelEdit />
};

export const Shell = inject('rootStore')(
    class extends React.Component {
        render() {
            const { rootStore } = this.props;
            const { routerStore } = rootStore;

            return <RouterView routerStore={routerStore} viewMap={viewMap} />;
        }
    }
);
