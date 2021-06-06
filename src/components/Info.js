import React from 'react';
import { Button, Form } from 'react-bootstrap';


const arr = ['player1', 'player2'];
function getFormData(formData) {
    return arr.reduce((acc, key) => {
        acc[key] = formData.get(key);
        return acc;
    }, {});
}

function Info({ updateGame, isGameOn }) {

    function handleSubmit(e) {
        e.preventDefault();
        var formData = new FormData(e.target);
        var playersInfo = getFormData(formData);
        updateGame(true, undefined, undefined, playersInfo);
        e.target.reset();
    }

    return (
        <Form onSubmit={handleSubmit}>
            <h3>Players Information</h3>
            <Form.Group>
                <Form.Label>Player 1 Name:</Form.Label>
                <Form.Control name="player1" type="text"></Form.Control>
            </Form.Group>
            <Form.Group>
                <Form.Label>Player 2 Name:</Form.Label>
                <Form.Control name="player2" type="text"></Form.Control>
            </Form.Group>
            <Button
                type="submit"
                variant="primary"
                disabled={isGameOn}
            >
                Start The Game
            </Button>
        </Form>
    );
}


export default Info;