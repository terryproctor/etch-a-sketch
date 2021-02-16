boxAmount = 287;
color='red'

//create a board
for(x=0; x<=boxAmount;x++) { 
  var board = document.createElement('div');
    board.className = "box";
    document.getElementById('board').appendChild(board);
}
//color buttons
const redBtn = document.querySelector('#red-btn');
redBtn.addEventListener('click', red => color='red');

const blueBtn = document.querySelector('#blue-btn');
blueBtn.addEventListener('click', blue => color='blue');

const greenBtn = document.querySelector('#green-btn');
greenBtn.addEventListener('click', green => color='green');

const blackBtn = document.querySelector('#black-btn');
blackBtn.addEventListener('click', green => color='black');

/*event listener plus function for each time it the mouse 
enters that div it changes background color*/
document.querySelectorAll('.box').forEach(item => {
    item.addEventListener('mouseenter', event =>
    {
        /*console.log('test')*/
        item.style.backgroundColor = color;
    })
})

const clearScreen = document.querySelector('#clear-btn');
clearScreen.addEventListener('click', clear);

function clear() {
    document.querySelectorAll('.box').forEach(item => item.style.backgroundColor = 'white')  
}

