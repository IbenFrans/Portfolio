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
homeButtonHam.addEventListener("click", () => popupClick(home));
aboutMeButton.addEventListener("click", () => aboutMe.scrollIntoView({behavior: "smooth"}));
aboutMeButtonHam.addEventListener("click", () => popupClick(aboutMe));
projectButton.addEventListener("click", () => projects.scrollIntoView({behavior: "smooth"}));
projectButtonHam.addEventListener("click", () => popupClick(projects));
contactButton.addEventListener("click", () => contact.scrollIntoView({behavior: "smooth"}));
contactButtonHam.addEventListener("click", () => popupClick(contact));




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
            popup.children[i].style.opacity = "0";
            popup.children[i].style.marginRight = "-1000px";
            popup.children[i].style.maxHeight = "0";
            popup.children[i].style.transitionDelay = "0.05s";
        }


    } else {
        hamburger.classList.add("show");
        line1.style.transform = "rotate(45deg)";
        line2.style.transform = "scaleY(0)";
        line3.style.transform = "rotate(-45deg)";
        hamburger.style.transform = "translate(10px)";
        popup.classList.remove("popupClosed");
        for(let i = 0; i < popup.children.length; i++){
            popup.children[i].style.opacity = "1";
            popup.children[i].style.marginRight = "0";
            popup.children[i].style.maxHeight = "100%";
            popup.children[i].style.transitionDelay = "0.35s";
        }
    }
}
function popupClick(page){
    toggleHamburger();
    page.scrollIntoView({behavior: "smooth"});
}

hamburger.addEventListener("click", toggleHamburger);




//Filter Projects
function filterProject(filter){
    let projects = document.getElementsByClassName("projectslist");
    let filtersButtons = document.getElementById("projectFilter").children;
    for(let i = 0; i < projects.length; i++){
        projects[i].style.display = "none";
        filtersButtons[i].classList.remove("active");
    }


    document.getElementById(filter).style.display = "block";
    switch (filter){
        case "digitalArt":
            filtersButtons[0].classList.add("active");
            break;
        case "paintings":
            filtersButtons[1].classList.add("active");
            break;
        case "graphicArt":
            filtersButtons[2].classList.add("active");
            break;
    }
}

let filters = document.getElementById("projectFilter").children;
let digitalArt = filters[0];
let paintings = filters[1];
let graphicArt = filters[2];
digitalArt.addEventListener("click", () => filterProject("digitalArt"));
paintings.addEventListener("click", () => filterProject("paintings"));
graphicArt.addEventListener("click", () => filterProject("graphicArt"));