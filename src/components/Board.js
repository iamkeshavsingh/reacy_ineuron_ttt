import React from 'react';
import { Col, Row } from 'react-bootstrap';

import Square from './Square';
import validateForResult from '../utils/baord.util';

const INIT_STATE = {
    isX: true,
    squares: Array(9).fill(null)
};

class Board extends React.Component {

    state = INIT_STATE;

    handleClick = (idx) => {
        var { isGameOn, change } = this.props;
        change();
        if (isGameOn && !this.state.squares[idx]) {
            var newSquares = [...this.state.squares];
            newSquares[idx] = this.state.isX ? 'X' : 'O';
            var result = validateForResult(newSquares);
            this.setState({
                isX: !this.state.isX,
                squares: newSquares
            });
            if (!result.isGameOn) {
                setTimeout(() => this.setState(INIT_STATE), 300);
                this.props.updateGame(false, result.winner, result.isDraw);
            }
        }
    };


    render() {
        var { squares } = this.state;
        var { handleClick } = this;
        var { player, isGameOn } = this.props;
        return (
            <Row className="justify-content-center">
                {(player && isGameOn) && <h5>{player}'s Turn</h5>}
                <Col md={12} className="p-4 App_board">
                    <Row className="App_board_row">
                        {squares.map((val, idx) => {
                            return <Square key={idx} placeholder={val} click={() => handleClick(idx)} />;
                        })}
                    </Row>
                </Col>
            </Row>
        );
    }
}


export default Board;