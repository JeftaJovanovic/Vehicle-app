import { observable, action } from 'mobx';

class VehicleMakeStore {

    @observable vehicleMakes = [
        {
            "Id": 1,
            "Name": "Auto Union Deutschland Ingolstadt",
            "Abrv": "AUDI"
        },
        {
            "Id": 2,
            "Name": "Bayerische Motoren Werke",
            "Abrv": "BMW"
        },
        {
            "id": 3,
            "name": "Fabbrica Italiana Automobili Torino",
            "Abrv": "FIAT"
        },
        {
            "id": 4,
            "name": "Sociedad Espanola De Automoviles De Turismo",
            "Abrv": "SEAT"
        },
        {
            "id": 5,
            "name": "Groupe Renault",
            "Abrv": "RENAULT"
        },
        {
            "id": 6,
            "name": "Mazda Motor Corporation",
            "Abrv": "MAZDA"
        },
        {
            "id": 7,
            "name": "Opel Automobile GmbH",
            "Abrv": "OPEL"
        },
        {
            "id": 8,
            "name": "Citroen",
            "Abrv": "CITROEN"
        },
        {
            "id": 9,
            "name": "Toyota Motor Corporation",
            "Abrv": "TOYOTA"
        }

    ];

    find() {
        //(sorting,paging,filtering)
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


export default VehicleMakeStore;