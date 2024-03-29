import VehicleModelForm from '../forms/VehicleModelForm';
import { observable, computed } from 'mobx';

class VehicleModelCreateViewStore {
    constructor(moduleStore) {
        this.moduleStore = moduleStore;
        this.vehicleModelStore = moduleStore.vehicleModelStore;
        this.vehicleMakeStore = moduleStore.rootStore.vehicleMakeModuleStore.vehicleMakeStore;
        this.form = new VehicleModelForm({
            onSuccess: (form) => {
                return this.vehicleModelStore.add(form.values());
            },
            onError: (form) => {
                alert(form.errors());
            }
        });
    }

    @computed get makes() {
        return this.vehicleMakeStore.find('', 1, 100, 'name', 'asc');
    }

}

export default VehicleModelCreateViewStore;