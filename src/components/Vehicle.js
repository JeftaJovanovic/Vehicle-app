import React from 'react';

function Vehicle(props) {
    return (
        <tr>
            <td>{props.vehicleModel.Id}</td>
            <td>{props.vehicleModel.Abrv}</td>
            <td>{props.vehicleModel.Name}</td>
        </tr>
    );

}

export default Vehicle;