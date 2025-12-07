// Dark Mode Toggle
const themeToggle = document.getElementById('themeToggle');
const themeIcon = themeToggle.querySelector('i');

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    if (document.body.classList.contains('dark-mode')) {
        themeIcon.classList.replace('fa-moon', 'fa-sun');
        localStorage.setItem('theme', 'dark');
    } else {
        themeIcon.classList.replace('fa-sun', 'fa-moon');
        localStorage.setItem('theme', 'light');
    }
});

// Load saved theme
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
    themeIcon.classList.replace('fa-moon', 'fa-sun');
}
// Mobile Menu Toggle
const nav = document.querySelector(".navigation");
const mobileBtn = document.createElement("button");
mobileBtn.className = "mobile-menu-btn";
mobileBtn.innerHTML = <i class="fas fa-bars"></i>;
document.querySelector("header").appendChild(mobileBtn);

mobileBtn.addEventListener("click", () => {
    nav.classList.toggle("open");
    mobileBtn.innerHTML = nav.classList.contains("open")
        ? <i class="fas fa-times"></i>
        : <i class="fas fa-bars"></i>;
});
// Cart Counter
let cartCount = 0;
const cartIcon = document.querySelector(".cart-icon");

const counter = document.createElement("span");
counter.className = "cart-counter";
counter.textContent = cartCount;
cartIcon.appendChild(counter);

const addToCartButtons = document.querySelectorAll(".product-card .main-btn");

addToCartButtons.forEach(btn => {
    btn.addEventListener("click", (e) => {
        e.preventDefault();
        cartCount++;
        counter.textContent = cartCount;

        // Animation
        counter.classList.add("pop");
        setTimeout(() => counter.classList.remove("pop"), 300);
    });
});
// Scroll Animation
const revealElements = document.querySelectorAll(".section, .product-card, .feature-box");

function revealOnScroll() {
    revealElements.forEach(el => {
        const elemTop = el.getBoundingClientRect().top;
        if (elemTop < window.innerHeight - 100) {
            el.classList.add("visible");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();