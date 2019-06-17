import React from 'react';
import { Table, Form, Col, Row, Container, Button } from 'react-bootstrap';
import { observer, inject } from 'mobx-react';
import Pagination from 'react-js-pagination';
import Header from '../../components/Header';

@inject(i => ({
    rootStore: i.rootStore,
    vehicleMakeListViewStore: i.rootStore.vehicleMakeModuleStore.vehicleMakeListViewStore
}))

@observer class VehicleMakeList extends React.Component {

    render() {

        const { makeItems: makeData, setOrderDirection, setOrderBy, setSearchString, setPage, setRpp, deleteVehicleMake } = this.props.vehicleMakeListViewStore;

        const { searchString, orderBy, items, page, rpp, itemsCount, orderDirection } = makeData;

        return (
            <React.Fragment>
                <Header />
                <Container>
                    <Form>
                        <Row>
                            <Col lg={true}>
                                <Form.Group>
                                    <Form.Label>Filter</Form.Label>
                                    <Form.Control type="input" value={searchString} onChange={e => setSearchString(e.target.value)} placeholder="Make Name filter..." />
                                </Form.Group>
                            </Col>
                            <Col lg={true}>
                                <Form.Group>
                                    <Form.Label>Sort</Form.Label>
                                    <Form.Control as="select" value={orderBy} onChange={e => setOrderBy(e.target.value)}>
                                        <option value='id'>Sort By ID</option>
                                        <option value='name'>Sort By Make Name</option>
                                        <option value='abrv'>Sort By Abrv.</option>
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
                                <Form.Label>Add Make</Form.Label> <br />
                                <Button variant="primary" size="md" onClick={e => this.props.rootStore.routerStore.goTo('createMake')}>
                                    ADD
                                </Button>
                            </Col>
                        </Row>
                    </Form>
                    <Table responsive striped bordered hover>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Make Name</th>
                                <th>Abrv</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {items.map((vehicleMake) => {
                                return (
                                    <tr key={vehicleMake.id}>
                                        <td>{vehicleMake.id}</td>
                                        <td>{vehicleMake.name}</td>
                                        <td>{vehicleMake.abrv}</td>
                                        <td><Button onClick={e => this.props.rootStore.routerStore.goTo('editMake', { id: vehicleMake.id })}>Edit</Button></td>
                                        <td><Button value={vehicleMake.id} onClick={deleteVehicleMake} >Delete</Button></td>
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
        );
    }
}

export default VehicleMakeList;