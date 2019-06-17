import BaseForm from '../../common/BaseForm';


const fields = ["name"];

const labels = {
    name: 'Make name'
};

const placeholders = {
    name: "Insert Make name"
};

const rules = {
    name: 'required|string|between:1,20'
}


class VehicleMakeForm extends BaseForm {
    constructor(hooks, values) {
        super({ fields, labels, placeholders, rules, values }, { hooks })
    }

}

export default VehicleMakeForm;