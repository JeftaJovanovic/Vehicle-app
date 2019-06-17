import { observable, action } from 'mobx';
import _ from 'lodash';
import BaseDataStore from './BaseDataStore';


const data = [
    {
        "id": 1,
        "name": "Q7",
        "makeId": 1,
        "abrv": "q7"
    },
    {
        "id": 2,
        "name": "A 3",
        "makeId": 1,
        "abrv": "a-3"
    },
    {
        "id": 3,
        "name": "TT",
        "makeId": 1,
        "abrv": "tt"
    },
    {
        "id": 4,
        "name": "M3",
        "makeId": 2,
        "abrv": "m3"
    },
    {
        "id": 5,
        "name": "X3",
        "makeId": 2,
        "abrv": "x3"
    },
    {
        "id": 6,
        "name": "X5",
        "makeId": 2,
        "abrv": "x5"
    },
    {
        "id": 7,
        "name": "Tipo",
        "makeId": 3,
        "abrv": "tipo"
    },
    {
        "id": 8,
        "name": "Uno",
        "makeId": 3,
        "abrv": "uno"
    },
    {
        "id": 9,
        "name": "Punto",
        "makeId": 3,
        "abrv": "punto"
    },
    {
        "id": 10,
        "name": "Ibiza",
        "makeId": 4,
        "abrv": "ibiza"
    },
    {
        "id": 11,
        "name": "Leon",
        "makeId": 4,
        "abrv": "leon"
    },
    {
        "id": 12,
        "name": "Cupra",
        "makeId": 4,
        "abrv": "cupra"
    },
    {
        "id": 13,
        "name": "Megane",
        "makeId": 5,
        "abrv": "megane"
    },
    {
        "id": 14,
        "name": "Laguna",
        "makeId": 5,
        "abrv": "laguna"
    },
    {
        "id": 15,
        "name": "Clio",
        "makeId": 5,
        "abrv": "clio"
    },
    {
        "id": 16,
        "name": "RX 8",
        "makeId": 6,
        "abrv": "rx-8"
    },
    {
        "id": 17,
        "name": "Miata",
        "makeId": 6,
        "abrv": "miata"
    },
    {
        "id": 18,
        "name": "323 f",
        "makeId": 6,
        "abrv": "323-f"
    },
    {
        "id": 19,
        "name": "Astra",
        "makeId": 7,
        "abrv": "astra"
    },
    {
        "id": 20,
        "name": "Vectra",
        "makeId": 7,
        "abrv": "vectra"
    },
    {
        "id": 21,
        "name": "Corsa",
        "makeId": 7,
        "abrv": "corsa"
    },
    {
        "id": 22,
        "name": "BX",
        "makeId": 8,
        "abrv": "bx"
    },
    {
        "id": 23,
        "name": "Saxo",
        "makeId": 8,
        "abrv": "saxo"
    },
    {
        "id": 24,
        "name": "C4",
        "makeId": 8,
        "abrv": "c4"
    },
    {
        "id": 25,
        "name": "Celica",
        "makeId": 9,
        "abrv": "celica"
    },
    {
        "id": 26,
        "name": "Hilux",
        "makeId": 9,
        "abrv": "hilux"
    },
    {
        "id": 27,
        "name": "AE86",
        "makeId": 9,
        "abrv": "ae86"
    },
    {
        "id": 28,
        "name": "Land Cruiser",
        "makeId": 9,
        "abrv": "land-cruiser"
    }
];


class VehicleModelStore extends BaseDataStore {

    constructor() {
        super(data);
    }

    @action update(model) {
        _.find(this.data, (o) => {
            if (o.id === model.id) {
                o.name = model.name;
                o.makeId = model.makeId;
            }
        });
    }

}

export default VehicleModelStore;