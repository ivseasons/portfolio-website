// Language Preference

const lang = navigator.language.slice(0, 2);
const englishBtn = document.getElementById("eng-btn");
const japaneseBtn = document.getElementById("ja-btn");

if(lang === 'ja') {
    document.querySelectorAll('.english').forEach(elem => elem.style.display = 'none');
    englishBtn.setAttribute("aria-selected", false);
    japaneseBtn.setAttribute("aria-selected", true);
} else {
    document.querySelectorAll('.japanese').forEach(elem => elem.style.display = 'none');
    englishBtn.setAttribute("aria-selected", true);
    japaneseBtn.setAttribute("aria-selected", false);
}

// Mobile Navigation Toggle

const navBtns = document.querySelectorAll(".nav-cta")
const toggleBtn = document.getElementById("open-btn");
const nav = document.getElementById("primary-navigation");
const changeAria = document.getElementById("aria");
const navbar = document.querySelector('.navbar');

toggleBtn.addEventListener("click", function(){
    toggleMobileNavigation()
})

navBtns.forEach(function(button) {
    button.addEventListener('click', function() {
        toggleMobileNavigation()
    })
})

function toggleMobileNavigation() {
    nav.classList.toggle("nav-transform");
    toggleBtn.classList.toggle("change-bg");

    const visibility = toggleBtn.getAttribute("data-visible");
    if(!visibility) {
        toggleBtn.setAttribute("data-visible", true);
        changeAria.setAttribute("aria-expanded", true);
    } else {
        toggleBtn.setAttribute("data-visible", false);
        changeAria.setAttribute("aria-expanded", false);
    }
}

window.onscroll = function(){
    const width = window.matchMedia("(max-width: 575px)");

    if(width.matches) {
        if(scrollY > 20) {
        navbar.classList.add('scroll-bg');
        toggleBtn.classList.add('scroll-btn')
        } else {
            navbar.classList.remove('scroll-bg');
            toggleBtn.classList.remove('scroll-btn')
        }
    } 
}


// GSAP Animation

// Hero Section
const tl = gsap.timeline();
let line = CSSRulePlugin.getRule(".hero-title:after");

tl.from('.hero-name-img', {opacity: 0, duration: 2.5});
tl.from('.hero-title span, .bg-box', {
    duration: 1,
    opacity: 0,
    y: -100,
    stagger: {
        each: 0.2
    }
});

tl.to(line, {opacity: 1, duration: .5}, "-=.5");
tl.from('.hero-square-img, .navbar, .hero-btns', {opacity: 0, duration: 2}, "+=.5");

// Portfolio Section

gsap.from('.portfolio-heading, .portfolio-info', {
    scrollTrigger: {
        trigger: '.portfolio',
        start: 'top center'
    },
    x: -100,
    duration: 1,
    opacity: 0,
    stagger: 0.5
})

gsap.from('.card', {
    scrollTrigger: {
        trigger: '.card',
        start: 'top center'
    },
    y: -100,
    duration: 2,
    opacity: 0,
    stagger: 0.75
})

// Profile Section

gsap.from('.profile-title, .profile-info1, .profile-info2, .contact-cta, .profile-list, .profile-img', {
    scrollTrigger: {
        trigger: '.profile',
        start: 'top center'
    },
    x: -200,
    duration: 1.5,
    opacity: 0,
    stagger: 0.2
})