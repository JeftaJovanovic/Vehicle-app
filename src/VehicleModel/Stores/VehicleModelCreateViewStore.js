//import { observable, action } from 'mobx';
import VehicleModelCreateForm from '../Components/VehicleModelCreateForm';

class VehicleModelCreateViewStore {
    constructor(rootStore) {
        this.rootStore = rootStore;
        this.vehicleModelStore = rootStore.vehicleModelStore;
        this.vehicleMakeStore = rootStore.vehicleMakeStore;
        this.form = new VehicleModelCreateForm({
            onSuccess: () => {
                console.log(this.form.values());
            },
            onError: () => {
                console.log(this.form.errors());
            }
        });
    }
}

export default VehicleModelCreateViewStore;