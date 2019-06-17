import BaseForm from '../../common/BaseForm';


const fields = ["name", "makeId"];

const labels = {
    name: 'Model name',
    makeId: "Make name"
};

const placeholders = {
    name: "Insert model's name",
    makeId: "Insert model's name"
};

const rules = {
    name: 'required|string|between:1,15',
    makeId: 'required'
}


class VehicleModelForm extends BaseForm {
    constructor(hooks, values) {
        super({ fields, labels, placeholders, rules, values }, { hooks })
    }

}

export default VehicleModelForm;