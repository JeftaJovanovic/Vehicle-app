import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faCheck } from '@fortawesome/free-solid-svg-icons';

function Vehicles(props) {

    let inStock = '';
    if (props.vehicle.inStock) {
        inStock = <FontAwesomeIcon icon={faCheck} />
    } else {
        inStock = <FontAwesomeIcon icon={faTimes} />
    }

    return (
        <tr>
            <td>{props.vehicle.id}</td>
            <td><strong>{props.vehicle.make}</strong></td>
            <td>{props.vehicle.model}</td>
            <td>{inStock}</td>
        </tr>
    );
}

export default Vehicles;