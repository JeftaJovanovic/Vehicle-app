import React from 'react';
import { inject, observer } from 'mobx-react';
import VehicleModelCreateForm from '../Components/VehicleModelCreateForm';

@inject(i => ({
    rootStore: i.rootStore,
    createNewVehicleModelStore: i.rootStore.createNewVehicleModelStore

}))

@observer
class VehicleModelCreateView extends React.Component {
    constructor(props) {
        super(props);
        this.form = new VehicleModelCreateForm(/* { fields }, { hooks, plugins } */)
    }
    handleClick = () => {
        const { rootStore } = this.props;
        rootStore.routerStore.goTo('vehicleModelList');
    }



    render() {

        const { hooks, fields, plugins } = this.props.createNewVehicleModelStore;

        return (
            <React.Fragment>
                <VehicleModelCreateForm form={this.form} />
            </React.Fragment>
        );
    }
}

export default VehicleModelCreateView;


