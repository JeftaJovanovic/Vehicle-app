import { observable, action, computed, } from 'mobx';

class VehicleModelListViewStore {
    @observable page = '1';
    @observable rpp = '5';
    @observable searchString = '';
    @observable orderBy = 'id';
    @observable orderDirection = 'asc';

    constructor(rootStore) {
        this.rootStore = rootStore;
        this.vehicleModelStore = rootStore.vehicleModelStore;
        this.vehicleMakeStore = rootStore.vehicleMakeStore;
    }

    @computed get makeItems() {
        return this.vehicleMakeStore.find(this.searchString, this.page, this.rpp, this.orderBy, this.orderDirection);
    }

    @computed get modelItems() {
        console.log(this.vehicleModelStore);
        return this.vehicleModelStore.find(this.searchString, this.page, this.rpp, this.orderBy, this.orderDirection);
    }
    @action.bound setPage(newPage) {
        if (newPage < 1) {
            newPage = 1;
        }
        this.page = newPage;
    }

    @action.bound setRpp(newRpp) {
        if (newRpp < 5) {
            newRpp = 5;
        }
        this.rpp = newRpp;
    }

    @action.bound setSearchString(newSearchString) {
        this.searchString = newSearchString;
    }

    @action.bound setOrderBy(newOrderBy) {
        this.orderBy = newOrderBy;
    }

    @action.bound setOrderDirection(newOrderDirection) {
        this.orderDirection = newOrderDirection;
    }

    @action.bound deleteVehicleModel(e) {
        let id = e.target.value;
        return this.vehicleModelStore.delete(id);
    }

}

export default VehicleModelListViewStore;