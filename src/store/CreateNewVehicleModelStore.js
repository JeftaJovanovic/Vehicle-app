import { observable, action } from 'mobx';

class CreateNewVehicleModelStore {
    constructor(rootStore) {
        this.rootStore = rootStore;
        this.vehicleModelStore = rootStore.vehicleModelStore;
    }

    @observable newModelName = '';
    @observable newModelMakeId = 0;
    @observable newModelAbrv = '';
    @observable newId = 0;
    @observable newModel = {};



    @action.bound setNewModelNameAbrv(e) {
        this.newModelName = e.target.value;
        this.newModelAbrv = this.newModelName.toLowerCase().replace(/\s+/g, '-').replace(/-$/, "").trim();
    }

    @action.bound newModelValues() {
        console.log(this.vehicleModelStore);
        this.newModel.name = this.newModelName;
        this.newModel.makeId = this.newModelMakeId;
        this.newModel.abrv = this.newModelAbrv;
        this.newModel.id = this.newId;
        return this.vehicleModelStore.add(this.newModel);
    }

    @action.bound setNewModelMakeId(e) {
        this.newModelMakeId = e.target.value;
    }

    @action.bound resetFields() {

    }

    @action.bound setId(id) {
        this.newId = id;
    }

}

export default CreateNewVehicleModelStore;