//import VehicleMakeListViewStore from './VehicleMakeListViewStore';
import VehicleMakeStore from '../../Common/data/VehicleMakeStore';

class VehicleMakeModuleStore {
    constructor(rootStore) {
        this.rootStore = rootStore;
        this.vehicleMakeStore = new VehicleMakeStore(this);
        //this.vehicleMakeListViewStore = new VehicleMakeListViewStore(this);
    }
}

export default VehicleMakeModuleStore;