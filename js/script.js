let burger = document.querySelector('.header__burger'),
  list = document.querySelector('.nav_list');


burger.addEventListener('click', function () {
  burger.classList.toggle('active')
  list.classList.toggle('active')
})


// class Slider {
//   constructor(el) {
//     this.introSlider = document.querySelector(el.slider)
//     this.introImages = document.querySelector(el.introImages)
//     this.slides = [...this.introImages.children]
//     this.prev = document.querySelector(el.leftbtn)
//     this.dir = el.direction.toUpperCase() == 'Y' ? 'Y' : 'X'
//     this.autoPlay = el.autoPlay
//     this.interval = el.autoPlayInterval

//     this.width = this.introSlider.clientWidth
//     this.height = this.introSlider.clientHeight
//     this.moveSize = this.dir === 'x ' ? this.width : -this.height
//     this.activSlide = 0
//     this.introImages.style = `position:relative;
//                               height:${this.height}px;
//                               `

//     for (let i = 0; i < this.slides.length; i++) {
//       const slide = this.slides[i];
//       slide.style = `position:absolute;
//          height:${this.height}px;
//          width:${this.width}px;`

//       if (i != this.activSlide) {
//         slide.style.transform = `translate${this.dir}(${this.moveSize}px)`;
//       }
//       if (i == this.slides.length - 1) {
//         slide.style.transform = `translate${this.dir}(${-this.moveSize}px)`;
//       }

//       console.log(slide);
//     }
//     this.next.addEventListener('click', () => this.move(this.next))
//     this.prev.addEventListener('click', () => this.move(this.prev))
//     if (this.autoPlay) {
//       this.play = setInterval(() => {
//         this.move(this.next)
//       }, this.interval);
//       this.slider.onmouseover = () => clearInterval(this.play)
//       this.slider.onmouseout = () =>
//         this.play = setInterval(() => {
//           this.move(this.next)
//         }, this.interval);
//     }
//   }
//   disableBtn() {
//     this.next.disabled = true
//     this.prev.disabled = true
//     setTimeout(() => {
//       this.next.disabled = false
//       this.prev.disabled = false
//     }, 1000);
//   }
//   move(btn) {
//     this.disableBtn()
//     let relocation = btn === this.next ? this.moveSize * -1 : this.moveSize
//     for (let i = 0; i < this.slides.length; i++) {
//       const slide = this.slides[i];
//       if (i != this.activSlide) {
//         slide.style.transform = `translate${this.dir}(${-relocation}px)`
//         slide.style.transition = '0s'
//       }
//     }
//     this.slides[this.activSlide].style.transform = `translate${this.dir}(${relocation}px)`
//     this.slides[this.activSlide].style.transition = '1s'
//     this.changeActive(btn)
//     this.slides[this.activSlide].style.transform = `translate${this.dir}(0px)`
//     this.slides[this.activSlide].style.transition = '1s'

//   }
//   changeActive(btn) {
//     if (btn == this.next) {
//       this.activSlide++
//       if (this.activSlide >= this.slides.length) {
//         this.activSlide = 0
//       }
//     } else if (btn == this.prev) {
//       this.activSlide--
//       if (this.activSlide < 0) {
//         this.activSlide = this.slides.length - 1
//       }
//     }
//   }

// }
// const slider = new Slider({
//   slider: '.intro_slider',
//   introImages: '.intro_images',
//   leftbtn: '.day_2_right',
//   rightbtn: '.day_2_left',
//   direction: 'X',
// })
// const slider1 = new Slider({
//   slider: '.intro_slider2',
//   introImages: '.intro_images2',
//   leftbtn: '.rightbtn',
//   rightbtn: '.leftbtn',
//   direction: 'X',
// })


var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    30: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
   
     540 : {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    // 640: {
    //   slidesPerView: 3,
    //   spaceBetween: 20,
    // },
    768: {
      slidesPerView: 3,
      spaceBetween: 30,
    },

  },
});
  
const title = document.querySelector('.intro_inf_a')

let txt = title.innerHTML

title.innerHTML = ""
let i = 0
function typing() {
    title.innerHTML += txt[i]
    i++
    if (i < txt.length) {
        setTimeout(() => {
            typing()
        }, 100);
    }
}
setTimeout(() => {
    typing()
}, 1000);

    // Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}



