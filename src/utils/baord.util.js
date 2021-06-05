function validateForResult(sqaures) {
    var isGameOn = true;
    var isDraw = false;
    var winner = null;

    if (sqaures[0] && (sqaures[0] === sqaures[1]) && (sqaures[1] === sqaures[2])) {
        isGameOn = false;
        winner = sqaures[0];
    }
    else if (sqaures[3] && (sqaures[3] === sqaures[4]) && (sqaures[4] === sqaures[5])) {
        isGameOn = false;
        winner = sqaures[3];
    }
    else if (sqaures[6] && (sqaures[6] === sqaures[7]) && (sqaures[7] === sqaures[8])) {
        isGameOn = false;
        winner = sqaures[6];
    }
    else if (sqaures[0] && (sqaures[0] === sqaures[3]) && (sqaures[3] === sqaures[6])) {
        isGameOn = false;
        winner = sqaures[0];
    }
    else if (sqaures[1] && (sqaures[1] === sqaures[4]) && (sqaures[4] === sqaures[7])) {
        isGameOn = false;
        winner = sqaures[1];
    }
    else if (sqaures[2] && (sqaures[2] === sqaures[5]) && (sqaures[5] === sqaures[8])) {
        isGameOn = false;
        winner = sqaures[2];
    }
    else if (sqaures[0] && (sqaures[0] === sqaures[4]) && (sqaures[4] === sqaures[8])) {
        isGameOn = false;
        winner = sqaures[0];
    }
    else if (sqaures[2] && (sqaures[2] === sqaures[4]) && (sqaures[4] === sqaures[6])) {
        isGameOn = false;
        winner = sqaures[2];
    }
    else {
        var isFilled = sqaures.filter((val) => val === null);
        if (isFilled.length === 0) {
            isGameOn = false;
            isDraw = true;
        }
    }

    return {
        isGameOn,
        isDraw,
        winner,
    };
}


export default validateForResult;