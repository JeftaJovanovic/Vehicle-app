import { action } from 'mobx';
import _ from 'lodash';
import BaseDataStore from '../../common/data/BaseDataStore';

const data = [
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

class VehicleMakeStore extends BaseDataStore {

    constructor() {
        super(data);
    }

    @action.bound update(make) {
        _.find(this.data, (o) => {
            if (o.id === make.id) {
                o.name = make.name
            }
        });
    }

}

export default VehicleMakeStore;