const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body")
buttons.forEach(function(button){
// console.log(button);
button.addEventListener("click",function(e){
// console.log(e.target.id);

if(e.target.id === "red"){
    body.style.backgroundColor = e.target.id;
    // color = "white";
    // button.style.backgroundColor = color;
}
if(e.target.id === "grey"){
    
    body.style.backgroundColor = e.target.id;
}
if(e.target.id === "pink"){
    body.style.backgroundColor = e.target.id;
}
if(e.target.id === "blue"){
    body.style.backgroundColor = e.target.id;
}
if(e.target.id === "green"){
    body.style.backgroundColor = e.target.id;
}
if(e.target.id === "yellow"){
    body.style.backgroundColor = e.target.id;
}
});
// button.onclick = function(br){
//     button.style.borderColor = "black";
// };
});

// function changecolor(){
//     document.querySelector("part2").style.borderColor = "black";
// };