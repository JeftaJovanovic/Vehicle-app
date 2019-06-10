import VehicleMakeStore from './VehicleMakeStore';
import VehicleModelStore from './VehicleModelStore';
import VehicleModelListViewStore from './VehicleModelListViewStore';
import CreateNewVehicleModelStore from './CreateNewVehicleModelStore';
import { RouterState, RouterStore } from 'mobx-state-router';
import { routes } from '../shared/stores/routes';
const notFound = new RouterState('notFound');

class RootStore {

    constructor() {
        this.createNewVehicleModelStore = new CreateNewVehicleModelStore(this);
        this.vehicleMakeStore = new VehicleMakeStore(this);
        this.vehicleModelStore = new VehicleModelStore(this);
        this.vehicleModelListViewStore = new VehicleModelListViewStore(this);
        this.routerStore = new RouterStore(this, routes, notFound);
    }
}

export default RootStore;