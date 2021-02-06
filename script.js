console.log('start')

boxAmount = 169;

//create a board
for(x=0; x<=boxAmount;x++) { 
  var board = document.createElement('div');
    board.className = "box";
    document.getElementById('board').appendChild(board);
}

var mouseTarget = document.getElementsByClassName('box');

document.querySelectorAll('.box').forEach(item => {
    item.addEventListener('mouseout', event =>
    {
        /*console.log('test')*/
        item.style.backgroundColor = 'red'
    })
})