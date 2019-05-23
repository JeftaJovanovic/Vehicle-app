import React from 'react';

import { Card, Col, Row, Form, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretSquareUp, faCaretSquareDown, faPlusSquare } from '@fortawesome/free-solid-svg-icons';

function Filter(props) {

    const filterByIdIcon = props.filterByIdAscDesc ? faCaretSquareDown : faCaretSquareUp;

    return (
        <Card style={{ margin: '1em 0' }}>
            <Card.Header>Filters</Card.Header>
            <Card.Body>
                <Row>
                    <Col lg={true}>
                        <Form.Group>
                            <Form.Control value={props.filterByMakeValue} onChange={props.filterByMakeOnChange} placeholder="By Make" />
                        </Form.Group>
                    </Col>
                    <Col lg={true}>
                        <Form.Group>
                            <Form.Control as="select" value={props.filterByStockValue} onChange={props.filterByStockOnChange}>
                                <option value=''>By Stock</option>
                                <option value='in'>In Stock</option>
                                <option value='out'>Out of Stock</option>
                            </Form.Control>
                        </Form.Group>
                    </Col>
                    <Col lg={true}>
                        <Form.Group>
                            <Button variant="outline-secondary" size="md" className="sort-by-id" onClick={props.filterByIdAscDescOnChange} block>
                                By Id <FontAwesomeIcon icon={filterByIdIcon} />
                            </Button>
                        </Form.Group>
                    </Col>
                    <Col lg={true}>
                        <Form.Group>
                            <Button variant="outline-secondary" size="md" className="sort-by-id" onClick={props.toggleModal} block>
                                Add New Vehicle <FontAwesomeIcon icon={faPlusSquare} />
                            </Button>
                        </Form.Group>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
}

export default Filter;