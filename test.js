let divs = document.getElementsByTagName("div");
let rood = divs[0];
let blauw = divs[1];
let groen = divs[2];

async function changeActive(kleur){
    if(!kleur.classList.contains("active")){
        let activeDiv = document.getElementsByClassName("active")[0];
        moveRight(activeDiv);
        moveRight(kleur);
        setTimeout(()=> moveLeft(activeDiv), 400);

    }
}
function moveRight(div){
    if(div.classList.contains("active")){
        div.classList.remove("active");
        div.style.left = "50rem";
    } else{
        div.style.left = "25rem";
        div.classList.add("active");
        // div.style.opacity = "1";
    }

}
async function moveLeft(div){
    div.style.left = "0";
    // div.style.opacity = "0";
    // setTimeout(() => div.classList.remove("active"), 200);
    div.classList.remove("active")
}

async function move(div){
    moveRight(div);
    setTimeout(() => moveLeft(div), 1000);

}

let roodKnop = document.getElementsByTagName("p")[0];
let blauwKnop = document.getElementsByTagName("p")[1];
let groenKnop = document.getElementsByTagName("p")[2];
roodKnop.addEventListener("click", () => changeActive(rood));
blauwKnop.addEventListener("click", () => changeActive(blauw));
groenKnop.addEventListener("click", () => changeActive(groen));

async function testMove(){
    setTimeout(()=> moveRight(rood), 1000);
    setTimeout(()=> moveRight(blauw), 1000);
    setTimeout(()=> moveLeft(rood), 3000);
    setTimeout(()=> moveRight(blauw), 4000);
    setTimeout(()=> moveRight(rood), 4000);
    setTimeout(()=> moveLeft(blauw), 5000);
}
moveRight(rood);
moveRight(blauw);
moveRight(groen);
moveLeft(blauw);
moveLeft(groen);
