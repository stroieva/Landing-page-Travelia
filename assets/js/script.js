// Preloader

   const preloader = document.querySelector('.preloader');

    window.addEventListener('load', () => {
        preloader.classList.add('preloader--hidden')
    })



// Burger menu

const menu = document.querySelector('.menu');
const burgerButton = document.querySelector('.burger');
const overlay = document.querySelector('.overlay');
const menuLinks = document.querySelectorAll('.menu__link');

burgerButton.addEventListener('click', () => {
    menu.classList.toggle('menu--active');
    burgerButton.classList.toggle('menu--active');
    overlay.classList.toggle('overlay--active');
    document.body.style.overflow = 'hidden';
})

menuLinks.forEach((link) => {
    link.addEventListener('click', () => {
        menu.classList.toggle('menu--active');
        burgerButton.classList.toggle('menu--active');
        overlay.classList.toggle('overlay--active');
        document.body.style.overflow = 'visible';
    });
})

// Header

const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        header.classList.add('header--active')
    } else {
        header.classList.remove('header--active')
    }
})

// Button open more

const cardList = document.querySelectorAll('.destination__card:nth-child(n+4)');
const buttonMore = document.querySelectorAll('.destination__button');
const cardLink = document.querySelector('.destination__card-link');

for (let i = 0; i < buttonMore.length; i++) {
    buttonMore[i].addEventListener('click', () => {
        for (let j = 0; j < cardList.length; j++) {
            if (cardList[j].style.display === 'none') {
                cardList[j].style.display = 'block';
                cardLink.textContent = 'Show less';
            } else {
                cardList[j].style.display = 'none';
                cardLink.textContent = 'View All Destination';
            }
        }
    })
}

// Активний клас меню при скролі

window.addEventListener('scroll', () => {
    const scrollDistance = window.scrollY;
    document.querySelectorAll('.section').forEach((el, i) => {
        if (el.offsetTop - document.querySelector('.header').clientHeight <= scrollDistance + 60) {
            document.querySelectorAll('nav a').forEach((el) => {
                if (el.classList.contains('active')) {
                    el.classList.remove('active');
                }
            })

            document.querySelectorAll('.menu li')[i].querySelector('a').classList.add('active')
        }
    })
})





