import React from 'react';
import { inject, observer } from 'mobx-react';
import VehicleMakeEditViewStore from '../Stores/VehicleMakeEditViewStore'

@inject(i => ({
    rootStore: i.rootStore,
    vehicleMakeEditViewStore: new VehicleMakeEditViewStore(i.rootStore.vehicleMakeModuleStore)
}))

@observer
class VehicleMakeEdit extends React.Component {

    handleClick = (e) => {
        const { rootStore } = this.props;
        const value = e.target.value;
        rootStore.routerStore.goTo(value);
    }

    render() {

        const { form } = this.props.vehicleMakeEditViewStore;

        if (!form) return null;
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
                    <button type="button" value={'vehicleMakeList'} onClick={this.handleClick}>Go to Makes</button>

                    <p>{form.error}</p>
                </form>
            </React.Fragment>
        );
    }
}

export default VehicleMakeEdit;