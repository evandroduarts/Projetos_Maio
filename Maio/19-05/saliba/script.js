var slide = document.querySelector('.slideshow');
var imagens = [
    './img/POPULAR.JPG',
    './img/ctg.webp',
    './img/cpg.png'
];
var time = 2000;
var count = 0;
function moveSlideShow(){
    slide.src = imagens [count];
    if(count < imagens.length - 1){
        count++;
    } else {
        count = 0;
    }
     setTimeout("moveSlideShow()", time);
}
 window.onload = moveSlideShow;
   

