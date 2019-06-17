import VehicleMakeForm from '../forms/VehicleMakeForm';

class VehicleMakeCreateViewStore {
    constructor(moduleStore) {
        this.moduleStore = moduleStore;
        this.vehicleMakeStore = moduleStore.vehicleMakeStore;
        this.form = new VehicleMakeForm({
            onSuccess: (form) => {
                return this.vehicleMakeStore.add(form.values());
            },
            onError: (form) => {
                alert(form.errors());
            }
        });
    }
}

export default VehicleMakeCreateViewStore;