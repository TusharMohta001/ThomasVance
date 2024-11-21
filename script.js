const lenis = new Lenis()


function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);


document.querySelectorAll(".elem").forEach(elem=>{
  let image = elem.querySelector("img")
  let tl = gsap.timeline()
  let XTransform = gsap.utils.random(-100,100);

  tl
  .set(image,{
    transformOrigin : `${XTransform < 0 ? 0 : '100%'}`,
  },"start")
  
  .to(image,{
    scale: 0,
    ease:"none",
    scrollTrigger:{
      trigger: elem,
      start: "top 10%",
      end:"bottom top",
      scrub:true
    }

  },"start")

  .to(elem,{
    xPercent: XTransform,
    ease:"Power4.easeInOut",
    scrollTrigger:{
      trigger: image,
      start: "top bottom",
      end:"bottom top",
      scrub:true
    }
  },"start")

})

function myFunction() {
  var x = document.getElementById("snackbar");
  x.className = "show";
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}



// Get loader element
const pageLoader = document.querySelector('.loader');

// Hide loader when page is fully loaded
window.addEventListener('load', () => {
  // Fade out loader
  gsap.to(pageLoader, {
    opacity: 0,
    duration: 1,
    onComplete: () => {
      // Remove loader from DOM after animation
      pageLoader.style.display = 'none';
    }
  });
});