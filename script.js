// Mobile Navigation Toggle

const navBtns = document.querySelectorAll(".nav-cta")
const toggleBtn = document.getElementById("open-btn");
const nav = document.getElementById("primary-navigation");
const changeAria = document.getElementById("aria");

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

gsap.from('.card', {
    scrollTrigger: {
        trigger: '.card',
        start: 'top center'
    },
    y: -50,
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
    x: 200,
    duration: 1.5,
    opacity: 0,
    stagger: 0.2
})