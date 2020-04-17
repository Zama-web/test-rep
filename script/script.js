console.log($('#root'));

// document.getElementById('myForm')
// .addEventListener('submit',
// function(event){
//     event.preventDefault()
//     console.log(event)
// }
// )

let rootElem = $('#root');

let width = rootElem.width();
let height = rootElem.height();

$('.screen').width(width);
$('.screen').height(height);


$('.screen ul li').width(width);
$('.screen ul li').height(height);

let slideCnt = $('.screen ul li').length;

$('.screen ul').width(width * slideCnt);

//////////////


// function goRight () {
//     let block = 1;
//     indexMax = $('.screen').length;
//     function slider() {
//         block++;
//         if(block > indexMax) {
//             block = 1
//         }
//         $('.screen ul')
//     }
// }


let page = 0;
let speed = 500;

function goRight() {
    if (page === slideCnt - 1) {
        return
    }
    $('.screen ul').animate({ 'left': `-${++page * width}px` }, speed);
}

function goLeft() {
    if (page === 0) {
        return
    }
    $('.screen ul').animate({ 'left': `-${--page * width}px` }, speed);
}




$('.t-left').on('click', goLeft);


$('.t-right').on('click', goRight);


