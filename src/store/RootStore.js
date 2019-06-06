import VehicleMakeStore from './VehicleMakeStore';
import VehicleModelStore from './VehicleModelStore';
import VehicleModelListViewStore from './VehicleModelListViewStore';

class RootStore {
    constructor() {
        this.vehicleMakeStore = new VehicleMakeStore(this);
        this.vehicleModelStore = new VehicleModelStore(this);
        this.vehicleModelListViewStore = new VehicleModelListViewStore(this);
    }
}

export default RootStore;