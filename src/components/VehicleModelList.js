import React from 'react';
import { Table, Form, Col, Row, Container, Button } from 'react-bootstrap';
import { observer, inject } from "mobx-react";
import Pagination from 'react-js-pagination';
import Header from './Header';




@inject(i => ({
    vehicleModelListViewStore: i.rootStore.vehicleModelListViewStore,
    rootStore: i.rootStore
}))

@observer
class VehicleModelListView extends React.Component {


    render() {

        const { modelItems: modelData, setOrderDirection, setOrderBy, setSearchString, setPage, setRpp, deleteVehicleModel } = this.props.vehicleModelListViewStore;

        const { searchString, orderBy, items, page, rpp, itemsCount, orderDirection, NewId } = modelData;

        const { routerStore } = this.props.rootStore;

        console.log(NewId);
        return (

            <React.Fragment>
                <Header />
                <div >
                    <h1>Welcome to </h1>
                    <Button onClick={e => routerStore.goTo('home')}>Go Home!</Button>
                </div>
                <Container>
                    <Form>
                        <Row>
                            <Col lg={true}>
                                <Form.Group>
                                    <Form.Label>Filter</Form.Label>
                                    <Form.Control type="input" value={searchString} onChange={e => setSearchString(e.target.value)} placeholder="Model Name filter..." />
                                </Form.Group>
                            </Col>
                            <Col lg={true}>
                                <Form.Group>
                                    <Form.Label>Sort</Form.Label>
                                    <Form.Control as="select" value={orderBy} onChange={e => setOrderBy(e.target.value)}>
                                        <option value='id'>Sort By ID</option>
                                        <option value='abrv'>Sort By Make Name</option>
                                        <option value='name'>Sort By Model Name</option>
                                    </Form.Control>
                                </Form.Group>
                            </Col>
                            <Col lg={true}>
                                <Form.Group>
                                    <Form.Label>Sort Direction</Form.Label>
                                    <Form.Control as="select" value={orderDirection} onChange={e => setOrderDirection(e.target.value)}>
                                        <option value='asc'>ASC</option>
                                        <option value='desc'>DESC</option>
                                    </Form.Control>
                                </Form.Group>
                            </Col>
                            <Col lg={true}>
                                <Form.Group>
                                    <Form.Label>Results Per Page</Form.Label>
                                    <Form.Control as="select" value={rpp} onChange={e => setRpp(e.target.value)}>
                                        <option value='5'>5</option>
                                        <option value='10'>10</option>
                                        <option value='15'>15</option>
                                    </Form.Control>
                                </Form.Group>
                            </Col>
                            <Col lg={true}>
                                <Form.Label>Add Model</Form.Label> <br />
                                <Button variant="primary" size="md" active onClick={e => routerStore.goTo('createVehicle')}>
                                    ADD
                                </Button>
                            </Col>
                        </Row>
                    </Form>
                    <Table responsive striped bordered hover>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Abrv</th>
                                <th>Model Name</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {items.map((vehicleModel) => {
                                return (
                                    <tr key={vehicleModel.id}>
                                        <td>{vehicleModel.id}</td>
                                        <td>{vehicleModel.abrv}</td>
                                        <td>{vehicleModel.name}</td>
                                        <td><Button onClick={e => routerStore.goTo('editVehicle', { id: vehicleModel.id })}>Edit</Button></td>
                                        <td><Button value={vehicleModel.id} onClick={deleteVehicleModel} >Delete</Button></td>
                                    </tr>
                                );
                            })}

                        </tbody>
                    </Table>
                    <Row className="justify-content-md-center">
                        <Pagination
                            activePage={page}
                            itemsCountPerPage={rpp}
                            totalItemsCount={itemsCount}
                            pageRangeDisplayed={5}
                            onChange={setPage}
                            itemClass="page-item"
                            linkClass="page-link"
                        />
                    </Row>
                </Container>
            </React.Fragment>
        )
    }
}

export default VehicleModelListView;