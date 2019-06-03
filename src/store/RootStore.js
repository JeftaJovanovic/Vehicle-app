import VehicleMakeStore from './VehicleMakeStore';
import VehicleModelStore from './VehicleModelStore';

class RootStore {
    constructor() {
        this.vehicleMakeStore = new VehicleMakeStore(this);
        this.vehicleModelStore = new VehicleModelStore(this);
    }
}

export default RootStore;