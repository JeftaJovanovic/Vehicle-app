import { Form } from 'mobx-react-form';
import dvr from 'mobx-react-form/lib/validators/DVR';
import validatorjs from "validatorjs";

class BaseForm extends Form {
    constructor(fields) {
        super({ fields }, {
            hooks: {
                onSuccess(form) {
                    alert('Form is valid! Send the request here.');
                    // get field values
                    console.log('Form Values!', form.values());
                },
                onError(form) {
                    alert('Form has errors!');
                    // get all form errors
                    console.log('All form errors', form.errors());
                }
            },

            customRules: {
                less_than: {
                    rule: (value, req, attr) => {
                        console.log("Value of this", this);
                        return (this.validator.input[attr] < this.validator.input[req]);
                    },
                    message: 'err'
                },
            },

            plugins: {
                dvr: dvr({
                    package: validatorjs,
                    extend: ({ validator, form }) => {
                        // add custom rules
                        Object.keys(customRules).forEach(key => {
                            validator.register(key, customRules[key].rule)
                        });
                    }
                }),
            }
        });
    }
}

export default BaseForm;