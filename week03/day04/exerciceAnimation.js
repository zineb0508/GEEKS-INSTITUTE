


//exercice01: 
setTimeout(function (){alert("Hello world!")}, 2000);

//part 2:
setTimeout(function(){
const container = document.getElementById("container");
const p = document.createElement('p');
p.textContent = "Hello World";
p.appendChild(p)
},2000)
//part3 :

let counter = 0;
const container = document.getElementById("container");
const intervalId = setInterval(function () {
  if (counter >= 5) {
    clearInterval(intervalId);
    return;
  }})
setInterval(function(){
    const container = document.getElementById("container");
    const p = document.createElement('p');
    p.textContent = "Hello World";
    p.appendChild(p)

    count++;
},2000);
document.getElementById("clear").addEventListener("cilck", function (){
    clearInterval(intervalId);

});

//exercie 02 :

function Move(){
const Box = getElementById("animate");
let position = 0;
const interval = setInterval()

    if (position >= 350) { 
      clearInterval(interval);
    } else {
      position++;
      box.style.left = position + "px";
    }
} ; 

