// Mobile Navigation Toggle

const toggleBtn = document.getElementById("open-btn");
const nav = document.getElementById("primary-navigation");
const changeAria = document.getElementById("aria");

toggleBtn.addEventListener("click", function() {
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
})