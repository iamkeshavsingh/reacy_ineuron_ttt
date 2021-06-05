import React from 'react';



function Feedback({ winner, isDraw, isGameOn }) {


    if (winner) return <h4>Winner is {winner}</h4>;

    if (isDraw) return <h4>Match is Draw</h4>;

    if (isGameOn) return <h4>Game is On</h4>;

    return (
        <h4>Play Tic Tak Toe</h4>
    );
}


export default Feedback;