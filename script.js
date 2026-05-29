// ===============================
// CONTACT POPUP
// ===============================

const popup = document.getElementById("popupForm");
const contactBtn = document.getElementById("contactBtn");
const closeBtn = document.querySelector(".close");

// Open Popup
contactBtn.addEventListener("click", () => {
    popup.style.display = "flex";
    document.body.style.overflow = "hidden";
});

// Close Popup
closeBtn.addEventListener("click", () => {
    popup.style.display = "none";
    document.body.style.overflow = "auto";
});

// Close When Clicking Outside
window.addEventListener("click", (e) => {
    if (e.target === popup) {
        popup.style.display = "none";
        document.body.style.overflow = "auto";
    }
});


// ===============================
// TESTIMONIAL SLIDER
// ===============================

const reviews = document.querySelectorAll(".review-card");

let currentReview = 0;

function showReview(index) {

    reviews.forEach((review) => {
        review.classList.remove("active");
    });

    reviews[index].classList.add("active");
}

// Initial Review
showReview(currentReview);

// Auto Slide
setInterval(() => {

    currentReview++;

    if (currentReview >= reviews.length) {
        currentReview = 0;
    }

    showReview(currentReview);

}, 4000);


// ===============================
// LOAD MORE BUTTON
// ===============================

const loadMoreBtn = document.querySelector(".load-btn button");
const projectBoxes = document.querySelectorAll(".project-box");

let visibleProjects = 6;

// Hide Extra Projects Initially
projectBoxes.forEach((project, index) => {

    if (index >= visibleProjects) {
        project.style.display = "none";
    }

});

// Load More Function
loadMoreBtn.addEventListener("click", () => {

    visibleProjects += 3;

    projectBoxes.forEach((project, index) => {

        if (index < visibleProjects) {
            project.style.display = "block";
        }

    });

    // Hide Button if All Projects Visible
    if (visibleProjects >= projectBoxes.length) {
        loadMoreBtn.style.display = "none";
    }

});


// ===============================
// SMOOTH SCROLLING
// ===============================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});


// ===============================
// MOBILE MENU TOGGLE (OPTIONAL)
// ===============================

const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
const navMenu = document.querySelector(".nav-menu");

if (mobileMenuBtn) {

    mobileMenuBtn.addEventListener("click", () => {

        navMenu.classList.toggle("show-menu");

    });

}


// ===============================
// HEADER SHADOW ON SCROLL
// ===============================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.boxShadow = "0 4px 20px rgba(0,0,0,0.15)";

    } else {

        header.style.boxShadow = "0 2px 10px rgba(0,0,0,0.1)";

    }

});


// ===============================
// CONTACT FORM VALIDATION
// ===============================

const contactForm = document.querySelector(".contact-form");

if (contactForm) {

    contactForm.addEventListener("submit", (e) => {

        e.preventDefault();

        const inputs = contactForm.querySelectorAll("input, textarea");

        let isValid = true;

        inputs.forEach((input) => {

            if (input.value.trim() === "") {

                input.style.border = "1px solid red";
                isValid = false;

            } else {

                input.style.border = "1px solid #ccc";

            }

        });

        if (isValid) {

            alert("Message Sent Successfully!");

            contactForm.reset();

        }

    });

}


// ===============================
// MOBILE RESPONSIVE FIXES
// ===============================

function mobileResponsiveFix() {

    if (window.innerWidth < 768) {

        document.body.classList.add("mobile-view");

    } else {

        document.body.classList.remove("mobile-view");

    }

}

// Initial Run
mobileResponsiveFix();

// On Resize
window.addEventListener("resize", mobileResponsiveFix);
