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

        const { form } = this.props.vehicleModelCreateViewStore;
        console.log(form.fields);
        return (
            <React.Fragment>
                <form>

                    <label htmlFor={form.$('Name').id}>
                        {form.$('Name').label}
                    </label>
                    <input {...form.$('Name').bind()} />

                    <label htmlFor={form.$('MakeId').id}>
                        {form.$('MakeId').label}
                    </label>
                    <select {...form.$('MakeId').bind()}>
                        {[1, 2, 3, 4].map(i =>
                            <option key={i} value={i}>{i}</option>
                        )}
                    </select>
                    <br />
                    Select option value: {form.$('MakeId').value}
                    <p>{form.$('Name').error}</p>

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
