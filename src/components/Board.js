import React from 'react';
import { Col, Row } from 'react-bootstrap';

import Square from './Square';

function Board({ isGameOn }) {

    return (
        <Row className="justify-content-center">
            <h5>Michal's Turn</h5>
            <Col md={12} className="p-4 App_board">
                <Row className="App_board_row">
                    <Square isGameOn={isGameOn} />
                    <Square isGameOn={isGameOn} />
                    <Square isGameOn={isGameOn} />
                </Row>
                <Row className="App_board_row">
                    <Square isGameOn={isGameOn} />
                    <Square isGameOn={isGameOn} />
                    <Square isGameOn={isGameOn} />
                </Row>
                <Row className="App_board_row">
                    <Square isGameOn={isGameOn} />
                    <Square isGameOn={isGameOn} />
                    <Square isGameOn={isGameOn} />
                </Row>
            </Col>
        </Row>
    );
}


export default Board;