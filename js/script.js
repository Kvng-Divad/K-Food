let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');


menu.onclick = () => {
    menu.classList.toggle('fa-times')
    navbar.classList.toggle('active')
}
window.addEventListener( 'scroll', () => {
    menu.classList.remove('fa-times')
    navbar.classList.remove('active')
});

document.querySelector('#search-icon').onclick = () => {
    document.querySelector('#search-form').classList.toggle('active')
}

document.querySelector('#close').onclick = () => {
    document.querySelector('#search-form').classList.remove('active')
}

/*active-link*/
let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('.nav-link')

window.onscroll = () => {
    section.forEach(sec => {
        let top = window.scrollY;
        let height = sec.offsetHeight;
        let offset = sec.offsetTop - 50;
        let id = sec.getAttribute('id');

        if(top > offset && top < offset + height){
                document.querySelector('.header .navbar a[href*='+ id +']').classList.add('active');
            }
        else{
            document.querySelector('.header .navbar a[href*='+ id +']').classList.remove('active');
        }
        });
};


/* swiper */
var swiperHome = new Swiper (".home-slider", {
    spaceBetween: 30,
    loop:true,
    grabCursor: true,
    autoplay:{
        delay: 5000,
        disableOnInteraction:false,
    },
    centeredSlides:true,
    pagination:{
        el:'.swiper-pagination',
        clickable:true,
    }, 
});

/* swiper2 */
var swiperReview = new Swiper (".review-slider", {
    spaceBetween: 20,
    loop:true,
    grabCursor: true,
    autoplay:{
        delay: 7500,
        disableOnInteraction:false,
    },
    breakpoints:{
        0: {
            slidesPerView: '1',
        },
        960: {
            slidesPerView: '3',
        },
    },
    centeredSlides:true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    pagination:{
        el:'.swiper-pagination',
        clickable:true,
    },  
});

/*--------Dark/ Light Theme-------*/
let dayNight = document.querySelector("#theme-button");
dayNight.addEventListener('click', () => {
    dayNight.classList.toggle('fa-sun')
    dayNight.classList.toggle('fa-moon')
    document.body.classList.toggle('dark');
});


/*--------scroll- Reveal-------*/
const sr = ScrollReveal ({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay:400,
    //reset:true
})

sr.reveal('.home, .about, .dishes, .menu, .footer-container, .review, .order,.fast-food',)
sr.reveal('.dishes-box, .box', {interval:50, reset:true})
sr.reveal('.about-image', {origin: 'right'})
sr.reveal('.about-content, .order, ', {origin: 'left'})




 


/*scroll-up*/
function scrollUp(){
    const scrollup = document.getElementById('scroll-up');

    if(this.scrollY >= 350) {
        scrollup.classList.add('show-scroll');
   }
   else{
    scrollup.classList.remove('show-scroll');
   }
}
window.addEventListener("scroll", scrollUp);


/*loader*/
function loader(){
    document.querySelector('.loader-container').classList.add('fade-out');
}

function fadeOut(){
    setInterval(loader, 4000);
}

window.onload = fadeOut;
