import React from 'react';
import { inject, observer } from 'mobx-react';
import VehicleModelEditViewStore from '../Stores/VehicleModelEditViewStore'

@inject(i => ({
    rootStore: i.rootStore,
    vehicleModelEditViewStore: new VehicleModelEditViewStore(i.rootStore.vehicleModelModuleStore)
}))

@observer
class VehicleModelEdit extends React.Component {

    handleClick = () => {
        const { rootStore } = this.props;
        rootStore.routerStore.goTo('vehicleModelList');
    }

    render() {
        // const { rootStore } = this.props;
        // const { params } = rootStore.routerStore.routerState;
        const { makes, form } = this.props.vehicleModelEditViewStore;
        //const form = getForm(params.id);
        //console.log(params.id);
        if (!form) return null;
        return (
            <React.Fragment>
                <form>
                    <label htmlFor={form.$('name')}>
                        {form.$('name').label}
                    </label>
                    <input {...form.$('name').bind()} />
                    <p>{form.$('name').error}</p>

                    <label htmlFor={form.$('makeId').id}>
                        {form.$('makeId').label}
                    </label>
                    <select {...form.$('makeId').bind()}>
                        {makes.items.map(make =>
                            <option key={make.id} value={make.id}>{make.name}</option>
                        )}
                    </select>
                    <p>{form.$('makeId').error}</p>
                    <br />

                    <button type="submit" onClick={form.onSubmit}>Submit</button>
                    <button type="button" onClick={form.onClear}>Clear</button>
                    <button type="button" onClick={form.onReset}>Reset</button>
                    <button type="button" onClick={this.handleClick}>Go to models</button>

                    <p>{form.error}</p>
                </form>
            </React.Fragment>
        );
    }
}

export default VehicleModelEdit;