
let p = "NaeNae.png";
let j = "NaeNae.jpg";
let a = "assets/"
let current = 0;
document.addEventListener("DOMContentLoaded", ()=>{
    document.getElementById("down").onclick = ()=>dec();
    document.getElementById("up").onclick = ()=>inc();
})

var nameId = [
    a+"Gabi"+p,
    a+"erwin"+j,
    a+"armored"+p,
    a+"freedom"+p,
    a+"jean"+p,
    a+"pieck"+p,
    a+"ymir"+p
];

function update(){
    document.getElementById("main").src = nameId[current];
}

function inc(){
    console.log("Inc");
    current++;
    if(current>6){
        current=0;
    }
    update();
}

function dec(){
    console.log("Dec");
    current--;
    if(current<0){
        current=6;
    }
    update();
}

