import BaseForm from '../../Common/BaseForm';

class VehicleModelCreateForm extends BaseForm {
    constructor(fields, hooks) {
        super({
            fields: [
                {
                    name: "Name",
                    label: "model name",
                    placeholder: "Insert model's name",
                },
                {
                    name: 'MakeId',
                    label: 'Make Name',
                    type: 'text',
                    placeholder: 'Dropdown',
                }
            ]
        }, hooks)
    }
}

export default VehicleModelCreateForm;