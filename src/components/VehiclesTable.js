import React from 'react';

import { Table } from 'react-bootstrap';

import Vehicles from './Vehicle';
import AddVehicleModal from './AddVehicleModal';


function VehiclesTable(props) {

    const vehiclesData = props.vehiclesData.sort((a, b) => {
        return props.filterByIdAscDesc ? a.id - b.id : b.id - a.id;
    });

    return (
        <React.Fragment>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Vehicle Id</th>
                        <th>Make name</th>
                        <th>Model name</th>
                        <th>In Stock</th>
                    </tr>
                </thead>
                <tbody>
                    {vehiclesData.map((vehicle) => {
                        return (
                            <Vehicles key={vehicle.id} vehicle={vehicle} />
                        );
                    })}
                </tbody>
            </Table>
            <AddVehicleModal
                modalVisible={props.modalVisible}
                toggleModal={props.toggleModal}
                newVehicleOnChange={props.newVehicleOnChange}
                newMakeName={props.newMakeName}
                newModelName={props.newModelName}
                newInStockValue={props.newInStockValue}
                addNewVehicle={props.addNewVehicle}
            />
        </React.Fragment>
    );

}

export default VehiclesTable;