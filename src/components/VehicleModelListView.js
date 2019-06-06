import React from 'react';
import { Table, Form, Col, Row, Container } from 'react-bootstrap';
import { observer, inject } from "mobx-react";
import Vehicle from './Vehicle';
import Pagination from 'react-js-pagination';
import Header from './Header';




@inject(i => ({
    vehicleModelListViewStore: i.rootStore.vehicleModelListViewStore
}))

@observer
class VehicleModelListView extends React.Component {

    render() {
        const { items: data, setOrderDirection, setOrderBy, setSearchString, setPage, setRpp } = this.props.vehicleModelListViewStore;

        const { searchString, orderBy, items, page, rpp, itemsCount, orderDirection } = data;

        return (
            <React.Fragment>
                <Header />
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
                                        <option value='Id'>Sort By ID</option>
                                        <option value='Abrv'>Sort By Make Name</option>
                                        <option value='Name'>Sort By Model Name</option>
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
                            <Col b-2 lg={true}>
                                <Form.Group>
                                    <Form.Label>Results Per Page</Form.Label>
                                    <Form.Control as="select" value={rpp} onChange={e => setRpp(e.target.value)}>
                                        <option value='5'>5</option>
                                        <option value='10'>10</option>
                                        <option value='15'>15</option>
                                    </Form.Control>
                                </Form.Group>
                            </Col>
                        </Row>
                    </Form>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Vehicle ID</th>
                                <th>Make Name</th>
                                <th>Model Name</th>
                            </tr>
                        </thead>
                        <tbody>
                            {items.map((vehicleModel) => {
                                return (
                                    <Vehicle key={vehicleModel.Id} vehicleModel={vehicleModel} />
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