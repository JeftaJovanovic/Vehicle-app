import BaseForm from '../../Common/BaseForm';


const fields = ["name", "makeId"];

const labels = {
    name: 'Model name',
    makeId: "Make name",
};

const placeholders = {
    name: "Insert model's name",
    makeId: "Insert model's name",
};



class VehicleModelForm extends BaseForm {
    constructor(hooks, values) {
        super({ fields, labels, placeholders, values }, { hooks })
    }

}

export default VehicleModelForm;