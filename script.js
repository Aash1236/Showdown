const scroll = new LocomotiveScroll({
    el: document.querySelector('#div'),
    smooth: true
});

// var a = document.querySelector("#elem1")
// console.log(a)


function page4Animation() {
    var elemC = document.querySelector("#elem-container")
    var fixed = document.querySelector("#fixed-image")
    elemC.addEventListener("mouseenter", function () {
        fixed.style.display = "block"
    })
    elemC.addEventListener("mouseleave", function () {
        fixed.style.display = "none"
    })

    // var elem1 = document.querySelector("#elem1")
// elem1.addEventListener("mouseenter", function(){
//     var image = elem1.getAttribute("data-image")
//     fixed.style.backgroundImage = `url(${image})`
// })

    var elems = document.querySelectorAll(".elem")
    elems.forEach(function (e) {
        e.addEventListener("mouseenter", function () {
            var image = e.getAttribute("data-image")
            fixed.style.backgroundImage = `url(${image})`
        })
    })
}

page4Animation()


// document.querySelectorAll('.left-part a').forEach(function(anchor) {
//     anchor.addEventListener('click', function(event) {
//       event.preventDefault(); // Prevent default anchor behavior
  
//       // Get the data-image attribute from the clicked anchor
//       var newImage = this.getAttribute('data-image');
  
//       // Set the src of the right-part image
//       document.getElementById('display-image').setAttribute('src', newImage);
//     });
//   });

document.addEventListener('DOMContentLoaded', function() {
    var defaultImage = document.querySelector('.left-part a').getAttribute('data-image');
    
    // Set the default image on page load
    document.getElementById('display-image').setAttribute('src', defaultImage);
  
    // Add click event listeners to all anchor tags
    document.querySelectorAll('.left-part a').forEach(function(anchor) {
      anchor.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default anchor behavior
  
        // Get the data-image attribute from the clicked anchor
        var newImage = this.getAttribute('data-image');
  
        // Set the src of the right-part image
        document.getElementById('display-image').setAttribute('src', newImage);
      });
    });
  });
  
  

function swiperAnimation(){
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 100,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
}
swiperAnimation()