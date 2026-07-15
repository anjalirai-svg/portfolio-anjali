// ===============================
// PRELOADER
// ===============================

window.addEventListener("load", () => {

    const loader = document.getElementById("preloader");

    loader.style.opacity = "0";

    loader.style.visibility = "hidden";

    loader.style.transition = "0.8s";

});

// ===============================
// TYPING EFFECT
// ===============================

new Typed(".typing", {

    strings: [

        "Data Analyst",

        "Power BI Developer",

        "Business Intelligence Enthusiast",

        "SQL Developer",

        "Python Analyst"

    ],

    typeSpeed: 70,

    backSpeed: 45,

    backDelay: 1800,

    loop: true

});

// ===============================
// MOBILE MENU
// ===============================

const menuBtn = document.querySelector("#menu-btn");

const nav = document.querySelector("nav");

menuBtn.onclick = () => {

    nav.classList.toggle("active");

}

// Close menu after clicking link

document.querySelectorAll("nav a").forEach(link => {

    link.onclick = () => {

        nav.classList.remove("active");

    }

});

// ===============================
// ACTIVE NAVIGATION
// ===============================

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll("header nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") == "#" + current) {

            link.classList.add("active");

        }

    });

});

// ===============================
// STICKY HEADER
// ===============================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        header.style.boxShadow = "0 5px 30px rgba(0,0,0,.35)";

    }

    else {

        header.style.boxShadow = "none";

    }

});

// ===============================
// SCROLL REVEAL
// ===============================

const hiddenElements = document.querySelectorAll(

    ".section-title, .project-card, .skill-card, .timeline-item, .certificate-grid div, .contact-container div"

);

hiddenElements.forEach(el => {

    el.classList.add("hidden");

});

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

});

hiddenElements.forEach(el => observer.observe(el));

// ===============================
// SMOOTH SCROLL
// ===============================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        document.querySelector(this.getAttribute("href"))

        .scrollIntoView({

            behavior:"smooth"

        });

    });

});

// ===============================
// BACK TO TOP BUTTON
// ===============================

// Create Button

const topBtn = document.createElement("div");

topBtn.className = "top";

topBtn.innerHTML = "<i class='fas fa-arrow-up'></i>";

document.body.appendChild(topBtn);

// Show Hide

window.addEventListener("scroll",()=>{

    if(window.scrollY>500){

        topBtn.classList.add("active");

    }

    else{

        topBtn.classList.remove("active");

    }

});

// Click

topBtn.onclick=()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

};

// ===============================
// PROJECT CARD ANIMATION
// ===============================

const cards=document.querySelectorAll(".project-card");

cards.forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="translateY(-15px) scale(1.03)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="translateY(0px) scale(1)";

});

});

// ===============================
// SKILL CARD ANIMATION
// ===============================

const skills=document.querySelectorAll(".skill-card");

skills.forEach(skill=>{

skill.addEventListener("mouseenter",()=>{

skill.style.boxShadow="0 10px 30px rgba(0,212,255,.5)";

});

skill.addEventListener("mouseleave",()=>{

skill.style.boxShadow="";

});

});

// ===============================
// CONTACT CARD ANIMATION
// ===============================

const contact=document.querySelectorAll(".contact-container div");

contact.forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="translateY(-10px)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="translateY(0px)";

});

});

// ===============================
// IMAGE PARALLAX
// ===============================

const image=document.querySelector(".home-image img");

window.addEventListener("mousemove",(e)=>{

let x=(window.innerWidth/2-e.pageX)/40;

let y=(window.innerHeight/2-e.pageY)/40;

image.style.transform=

`translate(${x}px,${y}px)`;

});

// ===============================
// BUTTON RIPPLE EFFECT
// ===============================

const buttons=document.querySelectorAll(".btn");

buttons.forEach(button=>{

button.addEventListener("click",function(e){

const circle=document.createElement("span");

const diameter=Math.max(button.clientWidth,button.clientHeight);

const radius=diameter/2;

circle.style.width=circle.style.height=

`${diameter}px`;

circle.style.left=

`${e.clientX-button.offsetLeft-radius}px`;

circle.style.top=

`${e.clientY-button.offsetTop-radius}px`;

circle.classList.add("ripple");

const ripple=button.getElementsByClassName("ripple")[0];

if(ripple){

ripple.remove();

}

button.appendChild(circle);

});

});

// ===============================
// CONSOLE MESSAGE
// ===============================

console.log(

"%cDesigned & Developed by Anjali Rai",

"color:#00d4ff;font-size:18px;font-weight:bold;"

);
