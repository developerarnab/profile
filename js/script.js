var typed = new Typed(".auto-input",{
   
    strings: ["Arnab Chanda.", "Graphics Designer.", "UI/UX Designer.", "Front-End Developer."],
   
typeSpeed:100,
backSpeed:100,
loop:true,
    
});
// ------------menubar

$(document).ready(function(){
   
    $('#menu').click(function () {
        $(this).toggleClass('ri-close-fill');
        $('.headernavmenubox').toggleClass('toggle');
    });

$(window).on('scroll load',function(){

    $('#menu').removeClass('ri-close-fill');

    $('.headernavmenubox').removeClass('toggle');

// if($(window).scrollTop() > 0){
//     $('.top').show();

// }
// else{
//     $('.top').hide(); 
// }

});

});
// ------------smooth scrolling

$('a[href*="#"]').on('click',function(e){

    e.preventDefault();

    $('html, body').animate({

        scrollTop : $($(this).attr('href')).offset().top,

    },
    500,
     'linear'
    );
});

// ------------------slider

var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

// -------------
const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {

    if (window.pageYOffset > 100) {

        toTop.classList.add("active");

    } else {

        toTop.classList.remove("active");
    }

})

