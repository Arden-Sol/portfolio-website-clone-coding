'use strict';
// const option = {
//   rootMargin: '-200px',
//   threshold: [0.25, 0.5],
// }
// function callback(entries) {
//   entries.forEach(entry => {
//     if (entry.isIntersecting) {
//       entry.target.classList.add('active');
//     } else {
//       entry.target.classList.remove('active');
//     }
//     console.log(entry.target);
//     console.log(entry.isIntersecting);
//     console.log(entry.intersectionratio);
//   })
// }
// const observer = new IntersectionObserver(callback, option);
// const boxes = document.querySelectorAll('.box');
// boxes.forEach(box => {
//   observer.observe(box)
// });

const section = document.querySelectorAll('.section');
const observer = new IntersectionObserver(callback);
section.forEach(section => {
  observer.observe(section)
});
function callback(entries) {
  entries.forEach(entry => {
    console.log(entry.target);
  })
}