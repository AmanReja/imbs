ScrollReveal({
  reset: true,
  delay: 400,
  distance: "60px",
  duration: 2500,
});
let banner = document.querySelector(".aman");
console.log(banner);
let heading = document.querySelector(".hedline-container");
let headingh = heading.getElementsByTagName("h1");

ScrollReveal().reveal(banner, { delay: 500, origin: "left" });
ScrollReveal().reveal(headingh, { delay: 500, origin: "up" });
