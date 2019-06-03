import { observable, action } from 'mobx';

class VehicleModelStore {

    @observable vehicleModels = [
        {
            "Id": 1,
            "Name": "Q7",
            "MakeId": 1,
            "Abrv": "Audi"
        },
        {
            "Id": 2,
            "Name": "A3",
            "MakeId": 1,
            "Abrv": "Audi"
        },
        {
            "Id": 3,
            "Name": "TT",
            "MakeId": 1,
            "Abrv": "Audi"
        },
        {
            "Id": 4,
            "Name": "M3",
            "MakeId": 2,
            "Abrv": "BMW"
        },
        {
            "Id": 5,
            "Name": "X3",
            "MakeId": 2,
            "Abrv": "BMW"
        },
        {
            "Id": 6,
            "Name": "X5",
            "MakeId": 2,
            "Abrv": "BMW"
        },
        {
            "Id": 7,
            "Name": "Tipo",
            "MakeId": 3,
            "Abrv": "Fiat"
        },
        {
            "Id": 8,
            "Name": "Uno",
            "MakeId": 3,
            "Abrv": "Fiat"
        },
        {
            "Id": 9,
            "Name": "Punto",
            "MakeId": 3,
            "Abrv": "Fiat"
        },
        {
            "Id": 10,
            "Name": "Ibiza",
            "MakeId": 4,
            "Abrv": "Seat"
        },
        {
            "Id": 11,
            "Name": "Leon",
            "MakeId": 4,
            "Abrv": "Seat"
        },
        {
            "Id": 12,
            "Name": "Cupra",
            "MakeId": 4,
            "Abrv": "Seat"
        },
        {
            "Id": 13,
            "Name": "Megane",
            "MakeId": 5,
            "Abrv": "Renault"
        },
        {
            "Id": 14,
            "Name": "Laguna",
            "MakeId": 5,
            "Abrv": "Renault"
        },
        {
            "Id": 15,
            "Name": "Clio",
            "MakeId": 5,
            "Abrv": "Renault"
        }
    ];

    @observable modelNameFilter = '';
    @observable sortByIdAscDesc = true;

    find = () => {
        return this.vehicleModels.filter(model =>
            !this.modelNameFilter || model.Name.toLowerCase().indexOf(this.modelNameFilter.toLowerCase()) > -1).sort((a, b) => {
                return this.sortByIdAscDesc ? a.Id - b.Id : b.Id - a.Id;
            });
    }

    @action get(id) {

    }

    @action create(make) {

    }

    @action update(make) {

    }

    @action delete(id) {

    }
}

export default VehicleModelStore;