import { observable, action, computed } from 'mobx';

class VehicleMakeListViewStore {
    constructor(moduleStore) {
        this.moduleStore = moduleStore;
        this.vehicleMakeStore = moduleStore.vehicleMakeStore;
    }

    @observable page = '1';
    @observable rpp = '5';
    @observable searchString = '';
    @observable orderBy = 'id';
    @observable orderDirection = 'asc';

    @computed get makeItems() {
        return this.vehicleMakeStore.find(this.searchString, this.page, this.rpp, this.orderBy, this.orderDirection)
    }

    @action.bound setSearchString(newSearchString) {
        this.searchString = newSearchString;
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

    @action.bound setOrderBy(newOrderBy) {
        this.orderBy = newOrderBy;
    }

    @action.bound setOrderDirection(newOrderDirection) {
        this.orderDirection = newOrderDirection;
    }

    @action.bound deleteVehicleMake(e) {
        let id = e.target.value;
        return this.vehicleMakeStore.delete(id);
    }

}

export default VehicleMakeListViewStore;