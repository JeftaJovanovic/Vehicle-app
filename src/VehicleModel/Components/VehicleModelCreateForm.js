import BaseForm from '../../Common/BaseForm';

class VehicleModelCreateForm extends BaseForm {
    constructor(hooks) {
        super([
            {
                name: "Name",
                label: "Model name",
                placeholder: "Insert model's name"
            },
            {
                name: "MakeId",
                label: "Make name",
                placeholder: "Insert model's name"
            }
        ], { hooks })
    }
}

export default VehicleModelCreateForm;