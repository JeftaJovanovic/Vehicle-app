import VehicleModelCreateForm from '../Components/VehicleModelCreateForm';
import { action } from 'mobx';

class VehicleModelCreateViewStore {
    constructor(rootStore) {
        this.rootStore = rootStore;
        this.vehicleModelStore = rootStore.vehicleModelStore;
        this.vehicleMakeStore = rootStore.vehicleMakeStore;
        this.form = new VehicleModelCreateForm({
            onSuccess: (form) => {
                return this.vehicleModelStore.add(form.values());
            },
            onError: (form) => {
                console.log(form.errors());
            }
        });
    }

    @action.bound bla() {
        console.log(this.vehicleModelStore);
        console.log(this.vehicleMakeStore);
    }


}

export default VehicleModelCreateViewStore;