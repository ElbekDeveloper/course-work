// Slider effect for mobile navbar

export const navSlide = () => {
    const menuIcon = document.querySelector(".menu-icon");
    const nav = document.querySelector(".nav-list");
    const navLinks = document.querySelectorAll(".nav-list li");


    menuIcon.addEventListener("click", () => {
        //Toggle nav-bar
        nav.classList.toggle("nav-active");

        //Animate links 
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5 ease forwards ${index/7 + 2}s`;
            }
        });

        //Menu-icon animation

        menuIcon.classList.toggle("toggle");
    });


}


navSlide();