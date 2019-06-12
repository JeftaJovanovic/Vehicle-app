import BaseForm from '../../Common/BaseForm';

class VehicleModelCreateForm extends BaseForm {
    constructor(hooks) {
        super([
            {
                name: "name",
                label: "Model name",
                placeholder: "Insert model's name"
            },
            {
                name: "makeId",
                label: "Make name",
                placeholder: "Insert model's name"
            }
        ], hooks)
    }
}

export default VehicleModelCreateForm;