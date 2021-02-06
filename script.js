console.log('start')

boxAmount = 169;

for(x=0; x<=boxAmount;x++) { 
  var board = document.createElement('div');
    board.className = "box";
    document.getElementById('board').appendChild(board);
}

var mouseTarget = document.getElementsByClassName('box');

document.querySelectorAll('.box').forEach(item => {
    item.addEventListener('mouseout', event =>
    {
        
    })
})