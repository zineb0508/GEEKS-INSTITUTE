
//let displayNumberDivisible()

//let vegetable = [1, 5, "onion", "tomato", "apple"];
//let onlyNumbers = [];
//for(let i = 0 ;i < 5 ; i++) {
//if (typeof vegetable[i] !== "string"){
  //  onlyNumbers.push(vegetable[i]);}

//console.log(onlyNumbers)
let displayNumberDivisible = []
for (let i =0; i < 501; i++){
    if(i % 23 === 0){
        displayNumberDivisible.push(i);
    }

}
console.log(displayNumberDivisible);

let total = 0;
for (let l = 0; l< displayNumberDivisible.length; l++){
    total += displayNumberDivisible[l];
}
console.log("Sum", total);

//exercice02:
const stock = { 
    "banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry":1
}  

const prices = {    
    "banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry":10
} 
let shoppingList = ["banana", "orange", "apple"]
function myBill() {
    let total = 0;

    for (let i = 0; i < shoppingList.length; i++) {
        let item = shoppingList[i];

        if (stock[item] && stock[item] > 0) {
            let price = prices[item];
            console.log(`${item} is in stock. Price: $${price}`);
            total += price;
        } else {
            console.log(`${item} is out of stock.`);
        }
    }

    console.log("Total bill:", total);
    return total;
}


myBill();

//exercice03:

function changeEnough(itemPrice, amountOfChange) {
    const coinValues = [0.25, 0.10, 0.05, 0.01]; 
    let totalChange = 0;

    for (let i = 0; i < amountOfChange.length; i++) {
        totalChange += amountOfChange[i] * coinValues[i]; 
    }

    return totalChange >= itemPrice;
}

//exercice04:
function hotelCost() {
    let nights;
    let costPerNight;

    while (true) {
        nights = prompt("How many nights would you like to stay in the hotel?");
        if (nights !== null && !isNaN(nights) && nights > 0) {
            nights = Number(nights);
            break;
        }
        alert("Please enter a valid number of nights.");
    }

    while (true) {
        costPerNight = prompt("How much does one night cost?");
        if (costPerNight !== null && !isNaN(costPerNight) && costPerNight > 0) {
            costPerNight = Number(costPerNight);
            break;
        }
        alert("Please enter a valid price.");
    }

    let total = nights * costPerNight;
    return total;
}
function planeRideCost(){
let destination;
while (true) {
        destination = prompt("what's your  travel destination?");
        if (destination !== null && destination.trim()!== "") {
            destination = destination.trim().toLowerCase();

           
            break;}
        alert("Please enter a valid destination");
        }


if (destination === "London")return 160;
if (destination === "Marrakech")return 250;
return 300;
}

function rentalCarCost(){
let days;

while (true) {
      days  = prompt("how many days would you like to rent with the car? ");
        if (days !== null && !isNaN(days) && days > 0) {
            days = Number(days);
            break;
        }
        alert("Please enter a valid number of days.");
    }
    const costPerDay = 40;
    let total = days * costPerDay;
    if (days > 10){
        total *= 0,95;
    }
    return total;
}
function totalVacationCost(){
    const hotel = hotelCost();
    const plane = planeRideCost();
    const car = rentalCarCost();
    const total = hotel + plane + car;
    alert("total trip cost is $" + total);
}
totalVacationCost(); 

//exercice 05:
window.onload = function () {
  const containerDiv = document.getElementById("container");
  console.log(containerDiv);

  const uls = document.querySelectorAll("ul");
  const firstUl = uls[0];
  const secondUl = uls[1];

  firstUl.children[1].textContent = "Richard";
  secondUl.removeChild(secondUl.children[1]);

  uls.forEach(ul => {
    ul.children[0].textContent = "YourName"; // Replace with your actual name
    ul.classList.add("student_list");
  });

  firstUl.classList.add("university", "attendance");

  containerDiv.style.backgroundColor = "lightblue";
  containerDiv.style.padding = "10px";

  const lis = document.querySelectorAll("li");
  lis.forEach(li => {
    if (li.textContent === "Dan") {
      li.style.display = "none";
    }
    if (li.textContent === "Richard") {
      li.style.border = "2px solid black";
    }
  });

  document.body.style.fontSize = "18px";
};
//exercice06:

window.onload = function () {
  const navDiv = document.getElementById("navBar");
  navDiv.setAttribute("id", "socialNetworkNavigation");

  const ul = document.querySelector("#socialNetworkNavigation ul");
  const newLi = document.createElement("li");
  const logoutText = document.createTextNode("Logout");

  newLi.appendChild(logoutText);
  ul.appendChild(newLi);

  const firstLi = ul.firstElementChild;
  const lastLi = ul.lastElementChild;

  console.log("First link text:", firstLi.textContent);
  console.log("Last link text:", lastLi.textContent);
};



    

    


