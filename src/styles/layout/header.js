// Slider effect for mobile navbar

export const navSlide = () => {
    const menuIcon = document.querySelector(".menu-icon");
    const nav = document.querySelector(".nav-list");

    menuIcon.addEventListener("click", () => {
        nav.classList.toggle("nav-active");
    });
}

navSlide();