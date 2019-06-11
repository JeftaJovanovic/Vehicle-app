import VehicleModelListViewStore from './VehicleModelListViewStore';
import VehicleModelStore from '../../Common/data/VehicleModelStore';
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