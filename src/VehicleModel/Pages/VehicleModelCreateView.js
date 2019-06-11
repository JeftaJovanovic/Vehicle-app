import React from 'react';
import { inject, observer } from 'mobx-react';
import VehicleModelCreateForm from '../Components/VehicleModelCreateForm';

@inject(i => ({
    rootStore: i.rootStore,
    createNewVehicleModelStore: i.rootStore.createNewVehicleModelStore

}))

@observer
class VehicleModelCreateView extends React.Component {

    handleClick = () => {
        const { rootStore } = this.props;
        rootStore.routerStore.goTo('vehicleModelList');
    }

    render() {

        const { form } = this.props.createNewVehicleModelStore;

        return (
            <React.Fragment>
                <form>
                    <label htmlFor={form.$('fromValue').id}>
                        {form.$('fromValue').label}
                    </label>
                    <input {...form.$('fromValue').bind()} />
                    <p>{form.$('fromValue').error}</p>

                    <label htmlFor={form.$('toValue').id}>
                        {form.$('toValue').label}
                    </label>
                    <input {...form.$('toValue').bind()} />

                    <label htmlFor={form.$('test').id}>
                        {form.$('test').label}
                    </label>
                    <select {...form.$('test').bind()}>
                        {[1, 2, 3, 4].map(i =>
                            <option key={i} value={i}>{i}</option>
                        )}
                    </select>
                    <br />
                    Select option value: {form.$('test').value}
                    <p>{form.$('toValue').error}</p>

                    <button type="submit" onClick={form.onSubmit}>Submit</button>
                    <button type="button" onClick={form.onClear}>Clear</button>
                    <button type="button" onClick={form.onReset}>Reset</button>

                    <p>{form.error}</p>
                </form>
            </React.Fragment>
        );
    }
}

export default VehicleModelCreateView;
