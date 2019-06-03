import React from 'react';
import VehicleModelViewList from './components/VehicleModelViewList';
import { observer, inject } from 'mobx-react';

@inject('rootStore', 'vehicleMakeStore', 'vehicleModelStore')

@observer
class App extends React.Component {
  render() {
    return (
      <VehicleModelViewList />
    )
  }
}

export default App;
