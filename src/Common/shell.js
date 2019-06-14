import React from 'react';
import { inject } from 'mobx-react';
import { RouterView } from 'mobx-state-router';
import { HomePage } from '../HomePage/Pages/HomePage';
import { NotFoundPage } from '../Common/NotFoundPage';
import VehicleModelList from '../VehicleModel/Pages/VehicleModelList';
import VehicleModelCreate from '../VehicleModel/Pages/VehicleModelCreate';
import VehicleModelEdit from '../VehicleModel/Pages/VehicleModelEdit';
import VehicleMakeList from '../VehicleMake/Pages/VehicleMakeList'
import VehicleMakeCreate from '../VehicleMake/Pages/VehicleMakeCreate';
import VehicleMakeEdit from '../VehicleMake/Pages/VehicleMakeEdit';

const viewMap = {
    home: <HomePage />,
    notFound: <NotFoundPage />,
    vehicleModelList: <VehicleModelList />,
    createModel: <VehicleModelCreate />,
    editModel: <VehicleModelEdit />,
    vehicleMakeList: <VehicleMakeList />,
    createMake: <VehicleMakeCreate />,
    editMake: <VehicleMakeEdit />
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
