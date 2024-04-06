'use strict';
let options = {
  root: document.querySelector("#scrollArea"),
  rootMargin: "0px",
  threshold: 0.5,
};

let observer = new IntersectionObserver(callback, options);

let target = document.querySelector("#listItem");
observer.observe(target);