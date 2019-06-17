import React from 'react';
import { inject, observer } from 'mobx-react';

@inject(i => ({
    rootStore: i.rootStore,
    vehicleModelCreateViewStore: i.rootStore.vehicleModelModuleStore.vehicleModelCreateViewStore
}))

@observer
class VehicleModelCreate extends React.Component {

    render() {

        const { form, makes } = this.props.vehicleModelCreateViewStore

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
                    <button type="button" onClick={e => this.props.rootStore.routerStore.goTo('vehicleModelList')}>Go to Models</button>

                    <p>{form.error}</p>
                </form>

            </React.Fragment>
        );
    }

}

export default VehicleModelCreate;