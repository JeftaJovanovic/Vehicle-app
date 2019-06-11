import React from 'react';
import BaseForm from '../../Common/BaseForm';


class VehicleModelCreateForm extends BaseForm {
    constructor(fields) {
        super(fields)
    }

    render() {
        return (
            <div className="App">
                <form>
                    <label htmlFor={this.form.$('fromValue').id}>
                        {this.form.$('fromValue').label}
                    </label>
                    <input {...this.form.$('fromValue').bind()} />
                    <p>{this.form.$('fromValue').error}</p>

                    <label htmlFor={this.form.$('toValue').id}>
                        {this.form.$('toValue').label}
                    </label>
                    <input {...this.form.$('toValue').bind()} />

                    <label htmlFor={this.form.$('test').id}>
                        {this.form.$('test').label}
                    </label>
                    <select {...this.form.$('test').bind()}>
                        {[1, 2, 3, 4].map(i =>
                            <option key={i} value={i}>{i}</option>
                        )}
                    </select>
                    <br />
                    Select option value: {this.form.$('test').value}
                    <p>{this.form.$('toValue').error}</p>

                    <button type="submit" onClick={this.form.onSubmit}>Submit</button>
                    <button type="button" onClick={this.form.onClear}>Clear</button>
                    <button type="button" onClick={this.form.onReset}>Reset</button>

                    <p>{this.form.error}</p>
                </form>
            </div>
        );
    }
}

export default VehicleModelCreateForm;