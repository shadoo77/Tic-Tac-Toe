const winCases = {
    'case1': [1, 2, 3],
    'case2': [4, 5, 6],
    'case3': [7, 8, 9],
    'case4': [1, 4, 7],
    'case5': [2, 5, 8],
    'case6': [3, 6, 9],
    'case7': [1, 5, 9],
    'case8': [3, 5, 7]
};
// assign basics variables
var players = ["Shadi", "Machine"]
var gameSign = ["X", "O"];
var whosTurn = 0;




function playGame (value, tagVar) {
    var turnOnTag = document.getElementById('turnOn');
    if (tagVar.innerText == "") {
        if(whosTurn == 0) {
            tagVar.innerHTML = gameSign[whosTurn];
            whosTurn = 1;
            turnOnTag.innerHTML = players[whosTurn] + "'s turn!";
        } else {
            tagVar.innerHTML = gameSign[whosTurn];
            whosTurn = 0;
            turnOnTag.innerHTML = players[whosTurn] + "'s turn!";
        }
    }

}