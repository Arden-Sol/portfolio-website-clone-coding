'use strict';
// Header에 페이지 아래로 스크롤시 다크 스타일링 적용
const header = document.querySelector('.header');
const headerHeight = header.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
  if (window.scrollY > headerHeight) {
    header.classList.add('header--dark')
  } else {
    header.classList.remove('header--dark')
  }
});

//홈화면을 점점 불투명하게만들기
const home = document.querySelector('#home');
const homeHeight = home.getBoundingClientRect().height;
// 1 - (pageY / homeHeight)
document.home.style.opacity = 0;