import VehicleModelEditForm from '../Components/VehicleModelEditForm';
import { action, observable } from 'mobx';

class VehicleModelEditViewStore {
	constructor(rootStore) {
		this.rootStore = rootStore;
		this.vehicleModelStore = rootStore.vehicleModelStore;
		this.vehicleMakeStore = rootStore.vehicleMakeStore;

		const modelForEditingId = 0;
		const vehicleModel = this.setModelId(modelForEditingId);
		const fields = this.constructFields(vehicleModel);


		this.form = new VehicleModelEditForm(fields, {
			onSuccess: (form) => {
				console.log(form.values());
			},
			onError: (form) => {
				console.log(form.errors());
			}
		});
	}
	@observable makes = this.vehicleMakeStore.vehicleMakes;

	@action.bound setModelId(ID) {
		console.log("Ja sam set i ovo mi je objekt u meni");
		let modelForEditingId = ID;
		console.log(this.vehicleModelStore.get(modelForEditingId));
		return this.vehicleModelStore.get(modelForEditingId);
	}

	@action.bound constructFields(vehicleModel) {
		console.log("Ja sam construct");
		console.log("vehicle model mi je");
		console.log(vehicleModel);
		let fields = [];
		fields.push({
			name: 'name',
			label: 'Model name',
			placeholder: "Insert model's name",
		});
		fields.push({
			name: 'makeId',
			label: 'Make name',
			placeholder: "Insert make's id",
		});
		return fields;
	}
}

export default VehicleModelEditViewStore;


/* class VehicleModelEditViewStore {
	// validEditKeys = ['name', 'makeId'];

	constructor() {
		// get vehicleModel somehow
		const vehicleModel = {};

		const fields = constructFields(vehicleModel);

		this.form = new VehicleModelEditForm(fields);
	}

	constructFields(model) {
		let fields = [];


		_.forEach(this.validEditKeys, editKey => {
			fields.push({
				name: editKey,
				value: vehicleModel[editKey]
			});
		});


		fields.push({
				name: 'name',
				label: 'Name',
				placeholder: 'Enter name',
				value: vehicleModel.name
		});
		fields.push({
				name: 'makeId',
				label: 'Make',
				placeholder: 'Make',
				value: vehicleModel.makeId
		});

		return fields;
	}
} */

/*  */