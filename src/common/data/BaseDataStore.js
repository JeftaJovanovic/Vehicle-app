import { observable, action } from 'mobx';
import _ from 'lodash';

class BaseDataStore {


    @observable data = null;

    constructor(data) {
        if (!data) {
            throw new Error("No data");
        } else {
            this.data = data;
        }
    }



    find(searchString, page, rpp, orderBy, orderDirection) {

        let vehicleData = this.data.slice();

        if (searchString != null && searchString !== '') {
            vehicleData = vehicleData.filter(vehicle =>
                vehicle.name.toLowerCase().indexOf(searchString.toLowerCase()) > -1);
        }

        vehicleData = _.orderBy(vehicleData, [orderBy], [orderDirection]);

        let itemsCount = vehicleData.length;

        vehicleData = _(vehicleData).drop((page - 1) * rpp).take(rpp).value();

        return {
            searchString: searchString,
            page: page,
            rpp: rpp,
            orderBy: orderBy,
            orderDirection: orderDirection,
            itemsCount: itemsCount,
            items: vehicleData,

        };

    }

    @action.bound get(id) {
        let vehicle = _.find(this.data, function (o) { return o.id === Number(id) });
        return vehicle;
    }

    @action.bound add(vehicle) {

        const calculateNewVehicleId = _.maxBy(this.data, (o) => { return o.id; });
        const newVehicleId = Number(calculateNewVehicleId.id) + 1;
        vehicle.id = newVehicleId;
        vehicle.abrv = String(vehicle.name.toLowerCase().trim().replace(/ /g, "-"));
        this.data.push(vehicle);

    }

    @action.bound delete(id) {
        this.data.splice(this.data.findIndex((i) => { return i.id === Number(id) }), 1);
    }




}

export default BaseDataStore;