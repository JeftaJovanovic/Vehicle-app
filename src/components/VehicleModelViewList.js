import React from 'react';
import { Table } from 'react-bootstrap';
import { observer, inject } from "mobx-react";
import Vehicle from './Vehicle';

@inject('vehicleModelStore')
@observer
class VehicleModelViewList extends React.Component {

    onModelNameFilterChange = (e) => {
        const { vehicleModelStore } = this.props;
        vehicleModelStore.modelNameFilter = e.target.value;
    }

    onVehicleIdClick = () => {
        const { vehicleModelStore } = this.props;
        vehicleModelStore.sortByIdAscDesc = !vehicleModelStore.sortByIdAscDesc;
    }

    render() {

        const { modelNameFilter, find } = this.props.vehicleModelStore;

        return (
            <React.Fragment>
                <input type="text" value={modelNameFilter} onChange={this.onModelNameFilterChange} placeholder="Model Name filter" />
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th type="button" onClick={this.onVehicleIdClick}>Vehicle ID</th>
                            <th>Make Name</th>
                            <th>Model Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {find().map((vehicleModel) => {
                            return (
                                <Vehicle key={vehicleModel.Id} vehicleModel={vehicleModel} />
                            );
                        })}

                    </tbody>
                </Table>
            </React.Fragment >
        )
    }

}

export default VehicleModelViewList;