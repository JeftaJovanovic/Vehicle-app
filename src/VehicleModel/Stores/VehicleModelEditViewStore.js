import VehicleModelForm from '../Forms/VehicleModelForm';
import { action, computed, /* reaction */ } from 'mobx';

class VehicleModelEditViewStore {
	constructor(moduleStore) {
		this.moduleStore = moduleStore;
		this.vehicleModelStore = moduleStore.vehicleModelStore;
		this.vehicleMakeStore = moduleStore.rootStore.vehicleMakeModuleStore.vehicleMakeStore;
		const { params } = moduleStore.rootStore.routerStore.routerState;
		// reaction(() => params.id, (id) => { this.form = this.getForm(id) }, {
		// 	fireImmediately: true
		// })
		this.form = this.getForm(params.id);
	}

	@computed get makes() {
		return this.vehicleMakeStore.find('', 1, 100, 'name', 'asc');
	}

	@action.bound getForm(id) {
		let vehicleModel = this.vehicleModelStore.get(id);

		return new VehicleModelForm({
			onSuccess: (form) => {
				console.log(form.values());
			},
			onError: (form) => {
				console.log(form.errors());
			}
		}, {
				name: vehicleModel.name,
				makeId: vehicleModel.makeId
			});
	}
}

export default VehicleModelEditViewStore;