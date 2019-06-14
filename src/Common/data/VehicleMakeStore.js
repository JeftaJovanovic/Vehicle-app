import { observable, action } from 'mobx';
import _ from 'lodash';

class VehicleMakeStore {

    @observable vehicleMakes = [
        {
            "id": 1,
            "name": "Auto Union Deutschland Ingolstadt",
            "abrv": "a-u-d-i"
        },
        {
            "id": 2,
            "name": "Bayerische Motoren Werke",
            "abrv": "b-m-w"
        },
        {
            "id": 3,
            "name": "Fabbrica Italiana Automobili Torino",
            "abrv": "f-i-a-t"
        },
        {
            "id": 4,
            "name": "Sociedad Espanola De Automoviles De Turismo",
            "abrv": "s-e-d-a-d-t"
        },
        {
            "id": 5,
            "name": "Groupe Renault",
            "abrv": "g-r"
        },
        {
            "id": 6,
            "name": "Mazda Motor Corporation",
            "abrv": "m-m-c"
        },
        {
            "id": 7,
            "name": "Opel Automobile GmbH",
            "abrv": "o-a-g"
        },
        {
            "id": 8,
            "name": "Citroen",
            "abrv": "c"
        },
        {
            "id": 9,
            "name": "Toyota Motor Corporation",
            "abrv": "t-m-c"
        }

    ];

    find(searchString, page, rpp, orderBy, orderDirection) {

        let makeData = this.vehicleMakes.slice();

        if (searchString != null && searchString !== '') {
            makeData = makeData.filter(make =>
                make.name.toLowerCase().indexOf(searchString.toLowerCase()) > -1);
        }

        makeData = _.orderBy(makeData, [orderBy], [orderDirection]);

        let itemsCount = makeData.length;

        makeData = _(makeData).drop((page - 1) * rpp).take(rpp).value();

        return {
            searchString: searchString,
            page: page,
            rpp: rpp,
            orderBy: orderBy,
            orderDirection: orderDirection,
            itemsCount: itemsCount,
            items: makeData
        };

    }

    @action.bound get(id) {
        let make = _.find(this.vehicleMakes, function (o) { return o.id === Number(id) })
        return make;
    }
    @action.bound add(make) {
        const calculateNewMakeId = _.maxBy(this.vehicleMakes, (o) => { return o.id });
        const newMakeId = Number(calculateNewMakeId.id) + 1;
        make.id = newMakeId;
        make.abrv = String(make.name.toLowerCase().trim().replace(/ /g, '-'));
        this.vehicleMakes.push(make);
    }
    @action.bound update(make) {
        _.find(this.vehicleMakes, (o) => {
            if (o.id === make.id) {
                o.name = make.name
            }
        });
    }
    @action.bound delete(id) {
        this.vehicleMakes.splice(this.vehicleMakes.findIndex((i) => { return i.id === Number(id); }), 1);
    }
}

export default VehicleMakeStore;