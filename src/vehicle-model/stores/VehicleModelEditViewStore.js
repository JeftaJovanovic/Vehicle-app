import VehicleModelForm from '../forms/VehicleModelForm';
import { computed, action } from 'mobx';

class VehicleModelEditViewStore {
	constructor(moduleStore) {
		this.moduleStore = moduleStore;
		this.vehicleModelStore = moduleStore.vehicleModelStore;
		this.vehicleMakeStore = moduleStore.rootStore.vehicleMakeModuleStore.vehicleMakeStore;
		const { params } = moduleStore.rootStore.routerStore.routerState;
		this.form = this.getForm(params.id);
	}

	@computed get makes() {
		return this.vehicleMakeStore.find('', 1, 100, 'name', 'asc');
	}

	@action.bound getForm(id) {
		let vehicleModel = this.vehicleModelStore.get(id);

		return new VehicleModelForm({
			onSuccess: (form) => {
				return this.vehicleModelStore.update(form.values());
			},
			onError: (form) => {
				alert(form.errors());
			}
		},
			{
				id: vehicleModel.id,
				name: vehicleModel.name,
				makeId: vehicleModel.makeId,
				abrv: vehicleModel.abrv
			});
	}
}

export default VehicleModelEditViewStore;