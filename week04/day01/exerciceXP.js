//exercice01:
 /*#1.2
Using const will cause an error because a is reassigned inside the if block.
 #2.2
Using const will cause an error because a is reassigned in funcTwo().
#3.1
funcFour() sets a global variable a, which funcFive() then accesses and alerts "hello".
4.2
Using const instead of let works fine here because a is not reassigned in funcSix().

 #5.2
Using const instead of let works fine because each a is scoped separately and not reassigned.*/
//exercice02:

/*const { createElement } = require("react");


const winBattle = ()=> true;
const experiencePoints = winBattle? 10 : 1;
console.log(experiencePoints);

//exercice03:
const isString = value => typeof value === isString;
console.log(isString('Hii')); 

console.log(isString([1, 2, 4, 0]));
//exercice04:
const add =(a, m) => a + m;
console.log(add(5,7));
//exercice05:
//function declaration:
function toGram (weight) {
    return weight *1000;

}
console.log(toGram(5));
//function expression:
const convertToGram = function(Kg){
    return Kg * 1000

}
console.log(convertToGram(7));

const kiloToGram =(weight)=> weight* 1000;
console.log(kiloToGram(4));
//the function declaration is hoisted and can be invoked  the function expression isn't hoisted and can't be invoked.

//exercice06:
(function (numbersChildren, partnersname, geographicLocation, jobTitle) {
    console.log(  `You will be a ${jobTitle} in ${geographicLocation}, and married to ${partnersname} with ${numbersChildren} kids.`
)
})(5, "Sarah", "Germany", "Doctor");*/


//exercice07:
/*
(function(userName) {
    const navbar = document.getElementById('navbar');

    const userDiv = document.createElement('div');
    userDiv.style.display = 'flex';
    userDiv.style.alignItems = 'center';
    userDiv.style.gap = '10px';

    const img = document.createElement('img');
    img.src = 'https://randomuser.me/api/portraits/men/75.jpg'; // Profile image
    img.alt = `${userName}'s profile picture`;
    img.style.borderRadius = '50%';
    img.style.width = '40px';
    img.style.height = '40px';

    const welcomeMsg = document.createElement('span');
    welcomeMsg.textContent = `Welcome ${userName}`;
    welcomeMsg.style.fontSize = '18px';
    welcomeMsg.style.fontWeight = 'bold';

    userDiv.appendChild(img);
    userDiv.appendChild(welcomeMsg);
    navbar.appendChild(userDiv);
})('John');*/



//exercice08:


/*function makeJuice(size) {
    function addIngredients(ing1, ing2, ing3) {
        const output = document.getElementById("output");
        output.innerText = `The client wants a ${size} juice, containing ${ing1}, ${ing2}, and ${ing3}.`;
    }

    addIngredients("kiwi", "orange", "appel");
}

makeJuice("medium");*/


function makeJuice(size) {
    const ingredients = [];

    function addIngredients(ing1, ing2, ing3) {
        ingredients.push(ing1, ing2, ing3);
    }

    function displayJuice() {
        const output = document.getElementById("output");
        output.innerText = `The client wants a ${size} juice, containing ${ingredients.join(', ')}.`;
    }

   
    addIngredients("apple", "banana", "watermelon");
    addIngredients("orange", "kiwi", "avocado");

    displayJuice();
}


makeJuice("medium");
