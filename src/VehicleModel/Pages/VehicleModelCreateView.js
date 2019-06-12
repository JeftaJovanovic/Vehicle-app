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

        const { form, bla } = this.props.vehicleModelCreateViewStore;
        bla();
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
                        {[1, 2, 3, 4].map(i =>
                            <option key={i} value={i}>{i}</option>
                        )}
                    </select>
                    <br />
                    Select option value: {form.$('makeId').value}
                    <p>{form.$('name').error}</p>

                    <button type="submit" onClick={form.onSubmit}>Submit</button>
                    <button type="button" onClick={form.onClear}>Clear</button>
                    <button type="button" onClick={form.onReset}>Reset</button>
                    <button onClick={this.handleClick}>Go to models</button>

                    <p>{form.error}</p>
                </form>
            </React.Fragment>
        );
    }
}

export default VehicleModelCreateView;
