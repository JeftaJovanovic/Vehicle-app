import VehicleModelListViewStore from './VehicleModelListViewStore';
import VehicleModelStore from './VehicleModelStore';
import VehicleModelCreateViewStore from './VehicleModelCreateViewStore';


class VehicleModelModuleStore {
    constructor(rootStore) {
        this.rootStore = rootStore;
        this.vehicleModelStore = new VehicleModelStore(this);
        this.vehicleModelListViewStore = new VehicleModelListViewStore(this);
        this.vehicleModelCreateViewStore = new VehicleModelCreateViewStore(this);
    }
}

export default VehicleModelModuleStore;