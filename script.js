// GSAP Animations
gsap.registerPlugin(ScrollTrigger);

// Hero section animations
gsap.from(".profile-container", {
    opacity: 0,
    y: 50,
    duration: 1.5,
    ease: "power4.out"
});

gsap.from(".buttons", {
    opacity: 0,
    y: 50,
    duration: 1.5,
    ease: "power4.out",
    delay: 0.5
});

// Section fade-in on scroll
gsap.utils.toArray("section").forEach(section => {
    gsap.from(section, {
        scrollTrigger: {
            trigger: section,
            start: "top 80%",
            toggleActions: "play none none none"
        },
        opacity: 0,
        y: 50,
        duration: 1.5,
        ease: "power4.out"
    });
});

// Footer fade-in
gsap.from("footer", {
    scrollTrigger: {
        trigger: "footer",
        start: "top 90%",
        toggleActions: "play none none none"
    },
    opacity: 0,
    duration: 1.5,
    ease: "power4.out"
});
function toggleNavbar() {
    var hamburger = document.querySelector('.hamburger');
    var navbar = document.getElementById('navbar');

    hamburger.classList.toggle('active');
    navbar.classList.toggle('navbar-open');
}
