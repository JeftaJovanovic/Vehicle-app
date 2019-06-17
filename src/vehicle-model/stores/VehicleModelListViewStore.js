import { observable, action, computed, } from 'mobx';

class VehicleModelListViewStore {
    @observable page = '1';
    @observable rpp = '5';
    @observable searchString = '';
    @observable orderBy = 'id';
    @observable orderDirection = 'asc';

    constructor(moduleStore) {
        this.moduleStore = moduleStore;
        this.vehicleModelStore = moduleStore.vehicleModelStore;
    }

    @computed get modelItems() {
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