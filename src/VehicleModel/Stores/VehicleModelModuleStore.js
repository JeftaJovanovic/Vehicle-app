import VehicleModelListViewStore from './VehicleModelListViewStore';
import VehicleModelStore from '../../Common/data/VehicleModelStore';
import VehicleMakeStore from '../../Common/data/VehicleMakeStore';
import VehicleModelCreateViewStore from './VehicleModelCreateViewStore';
import VehicleModelEditViewStore from './VehicleModelEditViewStore';

class VehicleModelModuleStore {
    constructor(rootStore) {
        this.rootStore = rootStore;
        this.vehicleModelStore = new VehicleModelStore(this);
        this.vehicleMakeStore = new VehicleMakeStore(this);
        this.vehicleModelListViewStore = new VehicleModelListViewStore(this);
        this.vehicleModelCreateViewStore = new VehicleModelCreateViewStore(this);
        this.vehicleModelEditViewStore = new VehicleModelEditViewStore(this);
    }
}

export default VehicleModelModuleStore;