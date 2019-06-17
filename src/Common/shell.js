import React from 'react';
import { inject } from 'mobx-react';
import { RouterView } from 'mobx-state-router';
import { HomePage } from '../home-page/pages/HomePage';
import { NotFoundPage } from './NotFoundPage';
import VehicleModelList from '../vehicle-model/pages/VehicleModelList';
import VehicleModelCreate from '../vehicle-model/pages/VehicleModelCreate';
import VehicleModelEdit from '../vehicle-model/pages/VehicleModelEdit';
import VehicleMakeList from '../vehicle-make/pages/VehicleMakeList'
import VehicleMakeCreate from '../vehicle-make/pages/VehicleMakeCreate';
import VehicleMakeEdit from '../vehicle-make/pages/VehicleMakeEdit';

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
