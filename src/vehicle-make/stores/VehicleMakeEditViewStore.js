import VehicleMakeForm from '../forms/VehicleMakeForm';
import { action } from 'mobx';

class VehicleMakeEditViewStore {
    constructor(moduleStore) {
        this.moduleStore = moduleStore;
        this.vehicleMakeStore = moduleStore.vehicleMakeStore;
        const { params } = moduleStore.rootStore.routerStore.routerState;
        this.form = this.getForm(params.id);
    }

    @action.bound getForm(id) {
        let vehicleMake = this.vehicleMakeStore.get(id);

        return new VehicleMakeForm({
            onSuccess: (form) => {
                return this.vehicleMakeStore.update(form.values());
            },
            onError: (form) => {
                alert(form.errors());
            }
        }, {
                id: vehicleMake.id,
                name: vehicleMake.name,
                makeId: vehicleMake.makeId,
                abrv: vehicleMake.abrv
            });
    }
}

export default VehicleMakeEditViewStore;