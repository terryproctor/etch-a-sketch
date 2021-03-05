function addDiv() {
    $('#board').append($('<div></div>').addClass('box'));
} 

for (let i=0; i <= 719; i++) {
    addDiv()
}


let boxAmount;
let penColor = 'Red';

$('#board').css('background-color', 'white');

console.log('test');