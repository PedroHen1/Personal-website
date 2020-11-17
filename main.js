AOS.init({
    offset: 200,
    duration: 800
});


function myFunction(responsive) {
    if (responsive.matches) { // If media query matches
      const remove = document.querySelectorAll('.card')
      for(i = 0; i < remove.length; i++) {
          remove[i].removeAttribute('data-aos')
      }
    }
  }

let responsive = window.matchMedia("(max-width: 1075px)")
myFunction(responsive)
responsive.addListener(myFunction) 

const closeNav = document.querySelectorAll('.close-nav')
const iconNav = document.getElementById('check')

closeNav.forEach(e => {
  e.addEventListener('click', function closed(){
    iconNav.checked = false;
    document.getElementById('hammb').classList.toggle('open')
  })
})


const hamb = document.getElementById('hammb').addEventListener('click', function changed() {
  document.getElementById('hammb').classList.toggle('open')
})



