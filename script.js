let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');


menu.onclick = () =>{
    menu.classList.toggle('fa-times')
    navbar.classList.toggle('active')

}


var swiper = new Swiper(".home-slider",{
    spaceBetween:30,
    centeredSlides:true,
    autoplay: {
        delay:7500,
        disableOnInteraction:false,

    },

    pagination: {
        el:".swiper-pagination",
        clickable:true,

    },
    loop:true,
});


var MainImg = document.getElementById("MainImg");
var smallImg = document.getElementsByClassName("small-img");
smallImg[0].onclick = function(){
    MainImg.src = smallImg[0].src;
}

smallImg[1].onclick = function(){
    MainImg.src = smallImg[1].src;
}

smallImg[2].onclick = function(){
    MainImg.src = smallImg[2].src;
}

smallImg[3].onclick = function(){
    MainImg.src = smallImg[3].src;
}

        