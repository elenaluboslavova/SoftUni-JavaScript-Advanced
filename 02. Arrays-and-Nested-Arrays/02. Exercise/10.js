function ticTacToe(movesArray) {
    let dashboard = [['false', 'false', 'false'],
    ['false', 'false', 'false'],
    ['false', 'false', 'false']];

    const firstPlayer = 'X';
    const secondPlayer = 'O';
    let isFirst = true;

    for (let i = 0; i < movesArray.length; i++) {
        let currentCoordinates = movesArray[i].split(' ');
        let x = currentCoordinates[0];
        let y = currentCoordinates[1];

        if (isFirst) {
            //firstPlayer
            if (dashboard[x][y] != 'false') {
                console.log('This place is already taken. Please choose another!');
                isFirst = true;
            }
            else {
                dashboard[x][y] = firstPlayer;
                isFirst = false;
            }
        }

        else {
            //secondPlayer
            if (dashboard[x][y] != 'false') {
                console.log('This place is already taken. Please choose another!');
                isFirst = false;
            }
            else {
                dashboard[x][y] = secondPlayer;
                isFirst = true;
            }
        }

        let isFirstWinner = (dashboard[0][0] == firstPlayer && dashboard[1][1] == firstPlayer && dashboard[2][2] == firstPlayer)
            || (dashboard[0][2] == firstPlayer && dashboard[1][1] == firstPlayer && dashboard[2][0] == firstPlayer)
            || (dashboard[0][0] == firstPlayer && dashboard[1][0] == firstPlayer && dashboard[2][0] == firstPlayer)
            || (dashboard[0][1] == firstPlayer && dashboard[1][1] == firstPlayer && dashboard[2][1] == firstPlayer)
            || (dashboard[0][2] == firstPlayer && dashboard[1][2] == firstPlayer && dashboard[2][2] == firstPlayer)
            || (dashboard[0][0] == firstPlayer && dashboard[0][1] == firstPlayer && dashboard[0][2] == firstPlayer)
            || (dashboard[1][0] == firstPlayer && dashboard[1][1] == firstPlayer && dashboard[1][2] == firstPlayer)
            || (dashboard[2][0] == firstPlayer && dashboard[2][1] == firstPlayer && dashboard[2][2] == firstPlayer);

        let isSecondWinner = (dashboard[0][0] == secondPlayer && dashboard[1][1] == secondPlayer && dashboard[2][2] == secondPlayer)
            || (dashboard[0][2] == secondPlayer && dashboard[1][1] == secondPlayer && dashboard[2][0] == secondPlayer)
            || (dashboard[0][0] == secondPlayer && dashboard[1][0] == secondPlayer && dashboard[2][0] == secondPlayer)
            || (dashboard[0][1] == secondPlayer && dashboard[1][1] == secondPlayer && dashboard[2][1] == secondPlayer)
            || (dashboard[0][2] == secondPlayer && dashboard[1][2] == secondPlayer && dashboard[2][2] == secondPlayer)
            || (dashboard[0][0] == secondPlayer && dashboard[0][1] == secondPlayer && dashboard[0][2] == secondPlayer)
            || (dashboard[1][0] == secondPlayer && dashboard[1][1] == secondPlayer && dashboard[1][2] == secondPlayer)
            || (dashboard[2][0] == secondPlayer && dashboard[2][1] == secondPlayer && dashboard[2][2] == secondPlayer);

        if (isFirstWinner) {
            console.log(`Player ${firstPlayer} wins!`);
            for (let i = 0; i < dashboard.length; i++) {
                console.log(dashboard[i].join('\t'));
            }
            return;
        }
        else if (isSecondWinner) {
            console.log(`Player ${secondPlayer} wins!`);
            for (let i = 0; i < dashboard.length; i++) {
                console.log(dashboard[i].join('\t'));
            }
            return;
        }
        else if (dashboard.every(x => x.every(y => y != 'false')) && !isFirstWinner && !isSecondWinner) {
            console.log("The game ended! Nobody wins :(");
            for (let i = 0; i < dashboard.length; i++) {
                console.log(dashboard[i].join('\t'));
            }
            return;
        }

    }
}

// ticTacToe(["0 1",
//     "0 0",
//     "0 2",
//     "2 0",
//     "1 0",
//     "1 1",
//     "1 2",
//     "2 2",
//     "2 1",
//     "0 0"]);

ticTacToe(["0 0",
"0 0",
"1 1",
"0 1",
"1 2",
"0 2",
"2 2",
"1 2",
"2 2",
"2 1"]);