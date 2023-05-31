//Nav smooth scroll

let homeButton = document.getElementsByClassName("homeButton")[0];
let homeButtonHam = document.getElementsByClassName("homeButton")[1];
let home = document.getElementById("home");
let aboutMeButton = document.getElementsByClassName("aboutMeButton")[0];
let aboutMeButtonHam = document.getElementsByClassName("aboutMeButton")[1];
let aboutMe = document.getElementById("aboutme");
let projectButton = document.getElementsByClassName("projectButton")[0];
let projectButtonHam = document.getElementsByClassName("projectButton")[1];
let projects = document.getElementById("projects");
let contactButton = document.getElementsByClassName("contactButton")[0];
let contactButtonHam = document.getElementsByClassName("contactButton")[1];
let contact = document.getElementById("footer");

homeButton.addEventListener("click", () => home.scrollIntoView({behavior: "smooth"}));
homeButtonHam.addEventListener("click", () => home.scrollIntoView({behavior: "smooth"}));
aboutMeButton.addEventListener("click", () => aboutMe.scrollIntoView({behavior: "smooth"}));
aboutMeButtonHam.addEventListener("click", () => aboutMe.scrollIntoView({behavior: "smooth"}));
projectButton.addEventListener("click", () => projects.scrollIntoView({behavior: "smooth"}));
projectButtonHam.addEventListener("click", () => projects.scrollIntoView({behavior: "smooth"}));
contactButton.addEventListener("click", () => contact.scrollIntoView({behavior: "smooth"}));
contactButtonHam.addEventListener("click", () => contact.scrollIntoView({behavior: "smooth"}));


// Hamburger
let hamburger = document.getElementById("hamburger");

function toggleHamburger(){
    let popup = document.getElementById("popupmenu");
    let line1 = document.querySelector(".line1");
    let line2 = document.querySelector(".line2");
    let line3 = document.querySelector(".line3");


    if(hamburger.classList.contains("show")){
        hamburger.classList.remove("show");
        line1.style.transform = "rotate(0)";
        line2.style.transform = "scaleY(1)";
        line3.style.transform = "rotate(0)";
        hamburger.style.transform = "translate(0)";
        popup.classList.add("popupClosed");
        for(let i = 0; i < popup.children.length; i++){
            popup.children[i].style.display = "none";
        }


    } else {
        hamburger.classList.add("show");
        line1.style.transform = "rotate(45deg)";
        line2.style.transform = "scaleY(0)";
        line3.style.transform = "rotate(-45deg)";
        hamburger.style.transform = "translate(10px)";
        popup.classList.remove("popupClosed");
        for(let i = 0; i < popup.children.length; i++){
            popup.children[i].style.display = "block";
        }
    }
}

hamburger.addEventListener("click", toggleHamburger);