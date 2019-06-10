import { observable, action } from 'mobx';
import _ from 'lodash';

class VehicleMakeStore {

    @observable vehicleMakes = [
        {
            "id": 1,
            "name": "Auto Union Deutschland Ingolstadt",
            "abrv": "AUDI"
        },
        {
            "Id": 2,
            "name": "Bayerische Motoren Werke",
            "abrv": "BMW"
        },
        {
            "id": 3,
            "name": "Fabbrica Italiana Automobili Torino",
            "abrv": "FIAT"
        },
        {
            "id": 4,
            "name": "Sociedad Espanola De Automoviles De Turismo",
            "abrv": "SEAT"
        },
        {
            "id": 5,
            "name": "Groupe Renault",
            "abrv": "RENAULT"
        },
        {
            "id": 6,
            "name": "Mazda Motor Corporation",
            "abrv": "MAZDA"
        },
        {
            "id": 7,
            "name": "Opel Automobile GmbH",
            "abrv": "OPEL"
        },
        {
            "id": 8,
            "name": "Citroen",
            "abrv": "CITROEN"
        },
        {
            "id": 9,
            "name": "Toyota Motor Corporation",
            "abrv": "TOYOTA"
        }

    ];

    find(searchString, page, rpp, orderBy, orderDirection) {

        let makeData = this.vehicleMakes.slice();
        let makeDataToCompare = this.vehicleMakes.slice();

        if (searchString != null && searchString !== '') {
            makeData = makeData.filter(make =>
                make.name.toLowerCase().indexOf(searchString.toLowerCase()) > -1);
        }

        makeData = _.orderBy(makeData, [orderBy], [orderDirection]);

        let itemsCount = makeData.length;

        makeData = _(makeData).drop((page - 1) * rpp).take(rpp).value();

        return {
            makeDataToCompare: makeDataToCompare,
            searchString: searchString,
            page: page,
            rpp: rpp,
            orderBy: orderBy,
            orderDirection: orderDirection,
            itemsCount: itemsCount,
            items: makeData
        };

    }


    // @computed get allModels() {

    //     return this.vehicleModels.map((model) => {
    //         let makeName = this.vehicleMakes.filter((make) =>
    //             make.id === model.makeId
    //         )
    //             .map(
    //                 // make => make.name
    //                 function (make) {
    //                     return make.name;
    //                 }
    //             )[0];
    //         return {
    //             ...model,
    //             makeName
    //         };
    //     });
    // }



    @action get(id) {

    }
    @action create(make) {

    }
    @action update(make) {

    }
    @action delete(id) {

    }
}


export default VehicleMakeStore;