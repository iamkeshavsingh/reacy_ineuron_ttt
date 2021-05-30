import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import './App.css';
import Board from './components/Board';
import Header from './components/Header';
import Info from './components/Info';
import Feedback from './components/Feedback';

class App extends React.Component {

    state = {
        isGameOn: false
    };

    handleGameUpdate = (flag) => {
        this.setState({
            isGameOn: flag
        });
    }

    render() {
        return (
            <Container>
                <Row className="justify-content-center mt-4">
                    <Header />
                </Row>
                <Row className="mt-4 p-3">
                    <Col md={4}>
                        <Info isGameOn={this.state.isGameOn} updateGame={this.handleGameUpdate} />
                    </Col>
                    <Col md={{ span: 4, offset: 4 }}>
                        <Board isGameOn={this.state.isGameOn} />
                    </Col>
                </Row>
                <Row className="justify-content-center mt-4">
                    <Feedback />
                </Row>
            </Container>
        );
    }
}

export default App;