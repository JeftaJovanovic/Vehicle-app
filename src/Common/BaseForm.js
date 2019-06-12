import { Form } from 'mobx-react-form';
// import dvr from 'mobx-react-form/lib/validators/DVR';
// import validatorjs from "validatorjs";

class BaseForm extends Form {
    constructor(fields, hooks) {
        console.log(fields);
        super({ fields }, { hooks })
    }
}

export default BaseForm;
