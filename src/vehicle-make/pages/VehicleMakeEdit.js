import React from 'react';
import { inject, observer } from 'mobx-react';
import VehicleMakeEditViewStore from '../stores/VehicleMakeEditViewStore'

@inject(i => ({
    rootStore: i.rootStore,
    vehicleMakeEditViewStore: new VehicleMakeEditViewStore(i.rootStore.vehicleMakeModuleStore)
}))

@observer
class VehicleMakeEdit extends React.Component {

    render() {

        const { form } = this.props.vehicleMakeEditViewStore;

        return (
            <React.Fragment>
                <form>
                    <label htmlFor={form.$('name')}>
                        {form.$('name').label}
                    </label>
                    <input {...form.$('name').bind()} />
                    <p>{form.$('name').error}</p>
                    <br />

                    <button type="submit" onClick={form.onSubmit}>Submit</button>
                    <button type="button" onClick={form.onClear}>Clear</button>
                    <button type="button" onClick={form.onReset}>Reset</button>
                    <button type="button" onClick={e => this.props.rootStore.routerStore.goTo('vehicleMakeList')}>Go to Makes</button>

                    <p>{form.error}</p>
                </form>
            </React.Fragment>
        );
    }
}

export default VehicleMakeEdit;