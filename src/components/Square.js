import React from 'react';



function Square({ placeholder, click }) {

    return (
        <div onClick={click} className="App_board_col">
            {placeholder}
        </div>
    );
}


export default Square;