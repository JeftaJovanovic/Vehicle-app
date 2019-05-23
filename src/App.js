import React from 'react';

import vehiclesData from './store/vehiclesData';

import './App.css';
import { Container } from 'react-bootstrap';

import Header from './components/Header';
import VehiclesTable from './components/VehiclesTable';
import Filters from './components/Filters';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      vehiclesData: vehiclesData,
      allVehicles: vehiclesData,
      filterByMakeValue: '',
      filterByMakeValueActive: false,
      filterByStockValue: '',
      filterByStockValueActive: false,
      filterByIdAscDesc: true,
      modalVisible: false,
      newMakeName: '',
      newModelName: '',
      newInStockValue: ''
    }
  }

  newVehicleOnChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    this.setState({
      [name]: value
    })
  }

  addNewVehicle = (e) => {
    let newId = 0;
    this.state.vehiclesData.forEach((vehicle) => {
      if (vehicle.id > newId) {
        newId = vehicle.id
      }
    })

    const vehicle = {
      id: newId + 1,
      make: this.state.newMakeName.toUpperCase(),
      model: this.state.newModelName,
      inStock: this.state.newInStockValue
    };

    this.setState((state) => ({
      vehiclesData: [...state.vehiclesData, vehicle]
    }), () => {
      this.toggleModal();
    })
  }

  toggleModal = (e) => {
    this.setState((state) => ({
      modalVisible: !state.modalVisible,
      newMakeName: '',
      newModelName: '',
      newInStockValue: ''
    }))
  }

  filterByIdAscDescOnChange = () => {
    this.setState((state) => ({
      filterByIdAscDesc: !state.filterByIdAscDesc
    }))
  }

  filterByMakeOnChange = (e) => {
    const value = e.target.value;
    const filterByMakeValueActive = value === '' ? false : true;

    this.setState({
      filterByMakeValue: value,
      filterByMakeValueActive: filterByMakeValueActive
    }, () => {
      this.filtersGroup()
    })
  }

  filterByStockOnChange = (e) => {
    const value = e.target.value;
    const filterByStockValueActive = value === '' ? false : true;

    this.setState({
      filterByStockValue: value,
      filterByStockValueActive: filterByStockValueActive
    }, () => {
      this.filtersGroup()
    });
  }

  filtersGroup = () => {
    let filterByStockValue = this.state.filterByStockValue === 'in' ? true : false;

    if (this.state.filterByMakeValueActive && this.state.filterByStockValueActive) {
      this.setState((state) => ({
        vehiclesData: state.allVehicles.filter(vehicle =>
          vehicle.make.toLowerCase().indexOf(this.state.filterByMakeValue.toLocaleLowerCase()) > -1 && vehicle.inStock === filterByStockValue)
      }));
    } else if (this.state.filterByMakeValueActive) {
      this.setState((state) => ({
        vehiclesData: state.allVehicles.filter(vehicle =>
          vehicle.make.toLowerCase().indexOf(this.state.filterByMakeValue.toLocaleLowerCase()) > -1)
      }));
    } else if (this.state.filterByStockValueActive) {
      this.setState((state) => ({
        vehiclesData: state.allVehicles.filter(vehicle =>
          vehicle.inStock === filterByStockValue)
      }));
    } else {
      this.setState((state) => ({
        vehiclesData: state.allVehicles
      }));
    }
  }

  render() {
    return (
      <Container>
        <Header />
        <Filters
          vehiclesData={this.state.vehiclesData}
          filterByMakeOnChange={this.filterByMakeOnChange}
          filterByMakeValue={this.state.filterByMakeValue}
          filterByStockOnChange={this.filterByStockOnChange}
          filterByStockValue={this.state.filterByStockValue}
          filterByIdAscDesc={this.state.filterByIdAscDesc}
          filterByIdAscDescOnChange={this.filterByIdAscDescOnChange}
          modalVisible={this.state.modalVisible}
          toggleModal={this.toggleModal}
        />
        <VehiclesTable
          vehiclesData={this.state.vehiclesData}
          filterByIdAscDesc={this.state.filterByIdAscDesc}
          modalVisible={this.state.modalVisible}
          toggleModal={this.toggleModal}
          newVehicleOnChange={this.newVehicleOnChange}
          newMakeName={this.state.newMakeName}
          newModelName={this.state.newModelName}
          newInStockValue={this.state.newInStockValue}
          addNewVehicle={this.addNewVehicle}
        />
      </Container>
    );
  }

}

export default App;
