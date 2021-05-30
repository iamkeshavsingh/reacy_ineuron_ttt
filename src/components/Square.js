import React from 'react';
import { Col } from 'react-bootstrap';



class Square extends React.Component {

    state = {
        placeholder: null
    };

    handleClick = () => {
        if (this.props.isGameOn) {
            this.setState({
                placeholder: 'X'
            });
        }
    }

    render() {
        return (
            <Col onClick={this.handleClick} className="d-flex justify-content-center align-items-center">
                {this.state.placeholder}
            </Col>
        );
    }
}


export default Square;