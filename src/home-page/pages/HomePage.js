import React from 'react';
import { inject } from 'mobx-react';
import { Col, Row, Container, Button } from 'react-bootstrap';
import Header from '../../components/Header';

export const HomePage = inject('rootStore')(
    class extends React.Component {
        render() {
            return (
                <React.Fragment>
                    <Header />
                    <Container>
                        <Row className="justify-content-md-center">
                            <Col xs lg="2">
                                <Button onClick={e => this.props.rootStore.routerStore.goTo('vehicleModelList')}>
                                    Go to Vehicle Models List
                                </Button>
                            </Col>
                            <Col md="auto"></Col>
                            <Col xs lg="2">
                                <Button onClick={e => this.props.rootStore.routerStore.goTo('vehicleMakeList')}>
                                    Go to Vehicle Makes List
                            </Button>
                            </Col>
                        </Row>
                    </Container>
                </React.Fragment>
            );
        }
    }
);

