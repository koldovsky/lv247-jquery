$(function() {
    $('button').click(handleClick); 
})

function handleClick() {
    $('h1').html('Hello jQuery!');
    $('button').unbind('click', handleClick);
    $('button').click(handleSecondClick);
}


function handleSecondClick() {
    $('h1').fadeToggle('slow');
    //$('h1').toggle('slow');
    //$('h1').toggleClass('selected');
}


// var arr = document.querySelectorAll('h1');
// arr.forEach(function(el) {
//     el.innerHTML = 'Hello from Vanilla JS'
// })
