import React from 'react';
import { Form, Button, Card, Container, Col, Row } from 'react-bootstrap';
import { inject, observer } from 'mobx-react';

@inject(i => ({
    vehicleModelListViewStore: i.rootStore.vehicleModelListViewStore,
    createNewVehicleModelStore: i.rootStore.createNewVehicleModelStore,
    rootStore: i.rootStore
}))

@observer
class CreateNewVehicleModel extends React.Component {

    handleClick = () => {
        const { rootStore } = this.props;
        rootStore.routerStore.goTo('vehicleModelList');
    };

    render() {

        const { setId, newModelName, newModelMakeId, setNewModelNameAbrv, newModelAbrv, setNewModelMakeId, newModelValues, resetFields } = this.props.createNewVehicleModelStore;
        const { modelItems: modelData, makeItems: makeData } = this.props.vehicleModelListViewStore;
        const { newId } = modelData;
        const { makeDataToCompare } = makeData;
        setId(newId);

        return (
            <Container>
                <Card>
                    <Row>
                        <Col><Card.Header> ADD NEW MODEL <Button onClick={this.handleClick}>BACK TO MODEL LIST</Button></Card.Header></Col>
                    </Row>
                    <Card.Body>
                        <Form>
                            <Form.Group>
                                <Form.Label>New Model Id</Form.Label>
                                <Form.Control type="text" disabled value={newId} />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Model Name</Form.Label>
                                <Form.Control type="text" value={newModelName} onChange={setNewModelNameAbrv} name="newModelName" placeholder="Model Name..." />
                            </Form.Group>
                            <Form.Label>Select Model Make</Form.Label>
                            <Form.Control as="select" value={newModelMakeId} onChange={setNewModelMakeId}>
                                {makeDataToCompare.map((vehicle) => {
                                    return (
                                        <option key={vehicle.id} value={vehicle.id}> {vehicle.name} </option>
                                    );
                                })}
                            </Form.Control>
                            <Form.Group>
                                <Form.Label>Abrv.</Form.Label>
                                <Form.Control type="text" disabled value={newModelAbrv} />
                            </Form.Group>
                        </Form>
                    </Card.Body>
                    <Row>
                        <Col>
                            <Card.Footer>
                                <Button onClick={newModelValues}>Submit</Button>
                                <Button onClick={resetFields}>Reset</Button>
                            </Card.Footer>
                        </Col>
                    </Row>
                </Card>
            </Container>
        )
    }
}

export default CreateNewVehicleModel;
