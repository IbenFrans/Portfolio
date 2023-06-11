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
function moveRight(projectList){
    // Disable cursor events
    let filters = document.getElementById("projectFilter").children;
    for(let i = 0; i < filters.length; i++){
        filters[i].style.cursor = "default";
        filters[i].style.pointerEvents = "none";
    }

    if(projectList.classList.contains("activeProject")){
        projectList.classList.remove("activeProject");
        projectList.style.left = "110%";
    } else{
        projectList.style.left = "0";
        projectList.classList.add("activeProject");
        projectList.style.opacity = "1";
    }

}

async function moveLeft(projectList){
    // Enable cursor events
    let filters = document.getElementById("projectFilter").children;
    for(let i = 0; i < filters.length; i++){
        filters[i].style.cursor = "pointer";
        filters[i].style.pointerEvents = "all";
    }

    projectList.style.opacity = "0";
    projectList.style.left = "-210%";
    projectList.classList.remove("activeProject")

}

function filterProject(filter){
    let filtersButtons = document.getElementById("projectFilter").children;
    for(let i = 0; i < filtersButtons.length; i++){
        filtersButtons[i].classList.remove("active");
    }
    switch (filter.id){
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

    if(!filter.classList.contains("activeProject")){
        let activeDiv = document.getElementsByClassName("activeProject")[0];
        moveRight(activeDiv);
        moveRight(filter);
        setTimeout(()=> moveLeft(activeDiv), 800);

    }

}

let filters = document.getElementById("projectFilter").children;
let digitalArtFilter = filters[0];
let paintingsFilter = filters[1];
let graphicArtFilter = filters[2];

let allProjects = document.getElementsByClassName("projectslist");
let digitalArt = allProjects[0];
let paintings = allProjects[1];
let graphicArt = allProjects[2];

moveRight(digitalArt);
moveRight(paintings);
moveRight(paintings);
moveLeft(paintings).then(null);
moveLeft(graphicArt).then(null);

digitalArtFilter.addEventListener("click", () => filterProject(digitalArt));
paintingsFilter.addEventListener("click", () => filterProject(paintings));
graphicArtFilter.addEventListener("click", () => filterProject(graphicArt));

//Accordion animatie
function  accordeon(accordeon){
    accordeon.classList.toggle("activeAccordeon");
    let panel = accordeon.nextElementSibling;
    if(panel.style.maxHeight){
        panel.style.maxHeight = null;
        setTimeout(() => accordeon.style.borderRadius = "30px", 600);
    } else {
        accordeon.style.borderRadius = "30px 30px 0 0";
        setTimeout(()=>panel.style.maxHeight = panel.scrollHeight + "px", 200);
    }
}
let acc = document.getElementsByClassName("wplAccordeon");
for (let i = 0; i < acc.length; i++){
    acc[i].addEventListener("click", () => accordeon(acc[i]));
}



//Orbs bounce
let orbs = document.getElementsByClassName("textorb");
for (let i = 0; i < orbs.length; i++){
    orbs[i].addEventListener("mouseover", () => orbs[i].classList.add("bounce"));
    orbs[i].addEventListener("mouseout", () => orbs[i].classList.remove("bounce"));
}