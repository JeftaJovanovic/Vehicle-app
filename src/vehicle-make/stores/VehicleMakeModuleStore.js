import VehicleMakeStore from './VehicleMakeStore';
import VehicleMakeListViewStore from './VehicleMakeListViewStore';
import VehicleMakeCreateViewStore from './VehicleMakeCreateViewStore';

class VehicleMakeModuleStore {
    constructor(rootStore) {
        this.rootStore = rootStore;
        this.vehicleMakeStore = new VehicleMakeStore(this);
        this.vehicleMakeListViewStore = new VehicleMakeListViewStore(this);
        this.vehicleMakeCreateViewStore = new VehicleMakeCreateViewStore(this);
    }
}

export default VehicleMakeModuleStore;