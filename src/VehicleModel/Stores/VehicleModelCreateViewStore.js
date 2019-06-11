import { observable, action } from 'mobx';
import VehicleModelCreateForm from '../Components/VehicleModelCreateForm';

class VehicleModelCreateViewStore {
    constructor(rootStore) {
        this.rootStore = rootStore;
        this.vehicleModelStore = rootStore.vehicleModelStore;
        this.vehicleMakeStore = rootStore.vehicleMakeStore;
        // get vehicleModel somehow
        const vehicleModel = {};
        const fields = this.constructFields(vehicleModel);
        this.form = new VehicleModelCreateForm({ fields }/* , { hooks, plugins } */);
    }

    constructFields(model) {
        let fields = [];

        fields.push({
            name: 'name',
            label: 'Name',
            placeholder: 'Enter name',
            value: model.name
        });
        fields.push({
            name: 'makeId',
            label: 'Make',
            placeholder: 'Make',
            value: model.makeId
        });

        return fields;
    }
}

export default VehicleModelCreateViewStore;