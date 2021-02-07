boxAmount = 287;

//create a board
for(x=0; x<=boxAmount;x++) { 
  var board = document.createElement('div');
    board.className = "box";
    document.getElementById('board').appendChild(board);
}

/*event listener plus function for each time it the mouse 
enters that div it changes background color*/
document.querySelectorAll('.box').forEach(item => {
    item.addEventListener('mouseenter', event =>
    {
        /*console.log('test')*/
        item.style.backgroundColor = 'red'
    })
})

const clearScreen = document.querySelector('#clear-btn')
clearScreen.addEventListener('click', clear);

function clear() {
    document.querySelectorAll('.box').forEach(item => item.style.backgroundColor = 'white')  
}