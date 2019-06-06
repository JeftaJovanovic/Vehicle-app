import React from 'react';
import VehicleModelListView from './components/VehicleModelListView';
import { observer, inject } from 'mobx-react';
import './App.css';

@inject('rootStore')

@observer
class App extends React.Component {
  render() {
    return (
      <VehicleModelListView />
    )
  }
}

export default App;
