import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import './App.css';
import Board from './components/Board';
import Header from './components/Header';
import Info from './components/Info';
import Feedback from './components/Feedback';

class App extends React.Component {

    state = {
        isGameOn: false,
        winner: null,
        isDraw: false,
        player1: null,
        player2: null,
        turn: null,
    };

    handleChange = () => {
        var { turn } = this.state;
        this.setState({
            turn: turn === 1 ? 2 : 1
        });
    }

    handleGameUpdate = (flag, winner, isDraw, playersInfo) => {

        if (flag) {
            var randomValue = Math.floor((Math.random() * 2)) + 1;
            this.setState({
                isGameOn: true,
                ...playersInfo,
                turn: randomValue
            });
        }
        else {
            var won;
            if (winner) {
                won = this.state.turn === 1 ? this.state.player1 : this.state.player2;
            }
            else {
                won = this.state.winner;
            }
            this.setState({
                isGameOn: false,
                winner: won,
                isDraw: isDraw ? isDraw : this.state.isDraw
            });
        }

    }

    render() {
        var { turn, player1, player2 } = this.state;
        var chance;
        if (turn === 1) {
            chance = player1;
        }
        else {
            chance = player2;
        }
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
                        <Board change={this.handleChange} player={chance} isGameOn={this.state.isGameOn} updateGame={this.handleGameUpdate} />
                    </Col>
                </Row>
                <Row className="justify-content-center mt-4">
                    <Feedback isGameOn={this.state.isGameOn} winner={this.state.winner} draw={this.state.isDraw} />
                </Row>
            </Container>
        );
    }
}

export default App;