import { RouterState, RouterStore } from 'mobx-state-router';
import { routes } from './routes';
import { VehicleModelModuleStore } from '../vehicle-model/stores';
import { VehicleMakeModuleStore } from '../vehicle-make/stores/';

const notFound = new RouterState('notFound');

class RootStore {

    routerStore = new RouterStore(this, routes, notFound);

    constructor() {
        this.vehicleMakeModuleStore = new VehicleMakeModuleStore(this);
        this.vehicleModelModuleStore = new VehicleModelModuleStore(this);
    }
}

export default RootStore;