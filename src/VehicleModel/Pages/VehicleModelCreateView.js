import React from 'react';
import { inject, observer } from 'mobx-react';

@inject(i => ({
    rootStore: i.rootStore,
    vehicleModelCreateViewStore: i.rootStore.vehicleModelModuleStore.vehicleModelCreateViewStore
}))

@observer
class VehicleModelCreateView extends React.Component {

    handleClick = () => {
        const { rootStore } = this.props;
        rootStore.routerStore.goTo('vehicleModelList');
    }

    render() {

        const { form, makes } = this.props.vehicleModelCreateViewStore;
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
                        {makes.map(make =>
                            <option key={make.id} value={make.id}>{make.name}</option>
                        )}
                    </select>
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

export default VehicleModelCreateView;