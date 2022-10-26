// Navbar Sticky Script ======================= >>
let fixedheader = document.querySelector(".desktop-view");
let sticky = fixedheader.offsetTop;

window.addEventListener("scroll", () => {
   if (window.pageYOffset > sticky) {
      fixedheader.classList.add("sticky");
   } else {
      fixedheader.classList.remove("sticky");
   }
});

// Mobile View Script ======================= >>
document.getElementById("menuBar").addEventListener("click", menuFunction);
document.getElementById("menu-overlay").addEventListener("click", menuFunction);
function menuFunction() {
   document.getElementById("openMenu").classList.toggle("active");
   document.getElementById("menu-overlay").classList.toggle("active");
}

$(document).ready(function () {
   $(".sub_menu a").on("click", function () {
      $(this).next().slideToggle(300);
      $(this).toggleClass("active");
   });
});

// swiper js ======================= >>
var swiper = new Swiper(".mySwiper", {
   allowSlidePrev: true,
   spaceBetween: 30,
   navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
   },
   breakpoints: {
      340: {
         spaceBetween: 4,
      },
      380: {
         slidesPerView: 1,
         spaceBetween: 8,
      },
      520: {
         slidesPerView: 2,
         spaceBetween: 10,
      },
      780: {
         slidesPerView: 3,
         spaceBetween: 20,
      },
   },
});


//Back To Top Menu Script ===================== //
$(document).ready(function () {
   $(window).scroll(function () {
      if ($(this).scrollTop() > 40) {
         $("#jumpUp").fadeIn();
      } else {
         $("#jumpUp").fadeOut();
      }
   });
   $("#jumpUp").click(function () {
      $("html, body").animate({ scrollTop: 0 }, 1000);
   });
});