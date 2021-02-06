console.log('start')

boxAmount = 160;

for(x=0; x<=boxAmount;x++) { 
  var board = document.createElement('div');
    board.className = "blah";
    document.getElementById('board').appendChild(board);
}

console.log(boxAmount)