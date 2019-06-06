import { observable, action } from 'mobx';
import _ from 'lodash';

class VehicleModelStore {

    @observable vehicleModels = [
        {
            "Id": 1,
            "Name": "Q7",
            "MakeId": 1,
            "Abrv": "AUDI"
        },
        {
            "Id": 2,
            "Name": "A3",
            "MakeId": 1,
            "Abrv": "AUDI"
        },
        {
            "Id": 3,
            "Name": "TT",
            "MakeId": 1,
            "Abrv": "AUDI"
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
            "Abrv": "FIAT"
        },
        {
            "Id": 8,
            "Name": "Uno",
            "MakeId": 3,
            "Abrv": "FIAT"
        },
        {
            "Id": 9,
            "Name": "Punto",
            "MakeId": 3,
            "Abrv": "FIAT"
        },
        {
            "Id": 10,
            "Name": "Ibiza",
            "MakeId": 4,
            "Abrv": "SEAT"
        },
        {
            "Id": 11,
            "Name": "Leon",
            "MakeId": 4,
            "Abrv": "SEAT"
        },
        {
            "Id": 12,
            "Name": "Cupra",
            "MakeId": 4,
            "Abrv": "SEAT"
        },
        {
            "Id": 13,
            "Name": "Megane",
            "MakeId": 5,
            "Abrv": "RENAULT"
        },
        {
            "Id": 14,
            "Name": "Laguna",
            "MakeId": 5,
            "Abrv": "RENAULT"
        },
        {
            "Id": 15,
            "Name": "Clio",
            "MakeId": 5,
            "Abrv": "RENAULT"
        },
        {
            "Id": 16,
            "Name": "RX 8",
            "MakeId": 6,
            "Abrv": "MAZDA"
        },
        {
            "Id": 17,
            "Name": "Miata",
            "MakeId": 6,
            "Abrv": "MAZDA"
        },
        {
            "Id": 18,
            "Name": "323f",
            "MakeId": 6,
            "Abrv": "MAZDA"
        },
        {
            "Id": 19,
            "Name": "Astra",
            "MakeId": 7,
            "Abrv": "OPEL"
        },
        {
            "Id": 20,
            "Name": "Vectra",
            "MakeId": 7,
            "Abrv": "OPEL"
        },
        {
            "Id": 21,
            "Name": "Corsa",
            "MakeId": 7,
            "Abrv": "OPEL"
        },
        {
            "Id": 22,
            "Name": "BX",
            "MakeId": 8,
            "Abrv": "CITROEN"
        },
        {
            "Id": 23,
            "Name": "Saxo",
            "MakeId": 8,
            "Abrv": "CITROEN"
        },
        {
            "Id": 24,
            "Name": "C4",
            "MakeId": 8,
            "Abrv": "CITROEN"
        },
        {
            "Id": 25,
            "Name": "Celica",
            "MakeId": 9,
            "Abrv": "TOYOTA"
        },
        {
            "Id": 26,
            "Name": "Hilux",
            "MakeId": 9,
            "Abrv": "TOYOTA"
        },
        {
            "Id": 27,
            "Name": "AE86",
            "MakeId": 9,
            "Abrv": "TOYOTA"
        }
    ];

    find(searchString, page, rpp, orderBy, orderDirection) {

        let outData = this.vehicleModels.slice();

        if (searchString != null && searchString !== '') {
            outData = outData.filter(model =>
                model.Name.toLowerCase().indexOf(searchString.toLowerCase()) > -1);
        }

        // if (orderBy === 'Id') {
        //     outData.sort((a, b) => {
        //         return orderDirection === 'asc' ? a.Id - b.Id : b.Id - a.Id;
        //     });
        // } else if (orderBy === 'Abrv') {
        //     outData.sort((a, b) => {
        //         console.log(a.Abrv < b.Abrv)
        //         return orderDirection === 'asc' ? (a.Abrv.toUpperCase() > b.Abrv.toUpperCase()) ? 1 : -1 : (a.Abrv.toUpperCase() < b.Abrv.toUpperCase()) ? 1 : -1;
        //     });
        // } else if (orderBy === 'Name') {
        //     outData.sort((a, b) => {
        //         return orderDirection === 'asc' ? (a.Name.toUpperCase() > b.Name.toUpperCase()) ? 1 : -1 : (a.Name.toUpperCase() < b.Name.toUpperCase()) ? 1 : -1;
        //     });
        // }

        outData = _.orderBy(outData, [orderBy], [orderDirection]);

        let itemsCount = outData.length;

        outData = _(outData).drop((page - 1) * rpp).take(rpp).value();

        return {
            searchString: searchString,
            page: page,
            rpp: rpp,
            orderBy: orderBy,
            orderDirection: orderDirection,
            itemsCount: itemsCount,
            items: outData
        };

    }

    @action get(id) {

    }

    @action create(model) {

    }

    @action update(model) {

    }

    @action delete(id) {

    }


}

export default VehicleModelStore;