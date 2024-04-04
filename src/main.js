'use strict';
// Header에 페이지 아래로 스크롤시 다크 스타일링 적용
const header = document.querySelector('.header');
const headerHeight = header.getBoundingClientRect().height;
// document.addEventListener('scroll', () => {
//   if (window.scrollY > headerHeight) {
//     header.classList.add('header--dark')
//   } else {
//     header.classList.remove('header--dark')
//   }
// });

//홈화면을 아래로 스크롤시 점점 투명하게만들기
const home = document.querySelector('#home');
const homeHeight = home.getBoundingClientRect().height;
const homeContainer = document.querySelector('.home__container');

document.addEventListener('scroll', event => {
  homeContainer.style.opacity = 1 - window.scrollY / homeHeight;
});
// Arrow up 버튼을 아래로 스크롤시 투명하게 처리함
const arrowUp = document.querySelector('aside');
document.addEventListener('scroll', event => {
  if (homeHeight <= scrollY * 2) {
    arrowUp.style.display = 'block';
  } else {
    arrowUp.style.display = 'none';
  }
});
// Navbar 토글버튼 클릭 처리
const bars = document.querySelector('.header__bars');
const headerMenu = document.querySelector('.header__menu');
bars.addEventListener('click', event => {
  headerMenu.classList.toggle('open');
});

// Navbar 메뉴 클릭시 메뉴를 자동으로 닫아줌
headerMenu.addEventListener('click', event => {
  headerMenu.classList.remove('open');
});