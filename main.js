// sticky navigantion Menu js code 
let nav = document.querySelector("nav");
let scrollBtn = document.querySelector(".scroll-button a");
console.log(scrollBtn);
let val;
window.onscroll = function () {
    if (document.documentElement.scrollTop > 20) {
        nav.classList.add("sticky");
        scrollBtn.style.display = "block";
    } else {
        nav.classList.remove("sticky");
        scrollBtn.style.display = "none";
    }
};

//side Navigation Menu js code 
let body = document.querySelector("body");
let navbar = document.querySelector(".navbar");
let menuBtn = document.querySelector(".menu-btn");
let cancelBtn = document.querySelector(".cancel-btn");
menuBtn.onclick = function () {
    navbar.classList.add("active");
    menuBtn.style.opacity = "0";
    menuBtn.style.pointerEvents = "none";
    body.style.overflow = "hidden";
    scrollBtn.style.pointerEvents = "none";
};
cancelBtn.onclick = function () {
    navbar.classList.remove("active");
    menuBtn.style.opacity = "1";
    menuBtn.style.pointerEvents = "auto";
    body.style.overflow = "auto";
    scrollBtn.style.pointerEvents = "auto";
};

//side navigation bar closed whiloe we click on navigation links 
let navLinks = document.querySelectorAll(".menu li a");
for (var i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener("click", function () {
        navbar.classList.remove("active");
        menuBtn.style.opacity = "1";
        menuBtn.style.pointerEvents = "auto";
    });
};

//chat btn
document.getElementById("chatBtn").addEventListener("click", function () {
    window.location.href = "mailto:Mehwishfathima.mail@gamil.com?subject=Let's Connect&body=Hi Mehwish,%0D%0AI'd love to chat about your project!";
});

//download CV 
document.getElementById("downloadBtn").addEventListener("click", function () {
  const link = document.createElement("a");
  link.href = "assets/Mehwish-CV.pdf";
  link.download = "Mehwish-CV.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});