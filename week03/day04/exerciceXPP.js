

//exercice 01 :
/*<!--<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Chocolate Facts</title>
</head>
<body>

<article>
    <h1> Some Facts </h1>
    <h2> The Chocolate </h2>
    <h3> History of the chocolate </h3>
    <p> Chocolate is made from tropical Theobroma cacao tree seeds. 
    Its earliest use dates back to the Olmec civilization in Mesoamerica.</p>
    <p> After the European discovery of the Americas, chocolate became 
    very popular in the wider world, and its demand exploded. </p>
    <p> Chocolate has since become a popular food product that millions enjoy every day, 
    thanks to its unique, rich, and sweet taste.</p> 
    <p> But what effect does eating chocolate have on our health?</p> 
    
    

</article>
<button id="boldButton">make the paraghraph bold</button>
<script src="exerciceXP.js"></script></body> */

/*const h1 = document.querySelector('h1');
console.log(h1.textContent); // Output: Hello from HTML
const Allps =document.querySelectorAll('p')
if (Allps.length >= 4){
Allps[Allps.length - 1].remove();
}
const h2  = document.querySelector('h2')
h2.addEventListener( 'click',function(){
    h2.style.backgroundColor = 'red' ; 
});
const h3 = document.querySelector('h3')
h2.addEventListener('click', function (){
    h3.style.display = 'none'
});
const boldButton = document.getElementById('boldButton');
boldButton.addEventListener('click', function (){
    const paragraphs  = document.querySelector('p');
    paragraphs.forEach(p => {
        p.style.fontweight = 'bold'
        
 } );
});*/
//exercie02 :
/*
const form = document.querySelector('form');

const fnameInputById = document.querySelector('#fname');
console.log(fnameInputById);

const lnameInputById = document.querySelector('#lname');
console.log(lnameInputById);


const fname = document.getElementsByName('firstname')[0];
console.log(fname.value); 

const lname = document.getElementsByName('lastname')[0];
console.log(lname.value);
//const form = document.querySelector('form')
form.addEventListener('submit', function(e){
    e.preventDefault()

const  firstNameValue= document.querySelector('#fname').value;
const  lasttNameValue= document.querySelector('#lname').value;
console.log('First Name', firstNameValue);
console.log('Last Name', lasttNameValue);

let firstname = firstNameValue;
let lastname = lasttNameValue;
if (firstname === "" || lastname === ""){
    console.log("please fill in both fields")
    return ; }

const ul = document.querySelector('ul')

    const li1 = document.createElement('li');
    li1.textContent = firstname;
    ul.appendChild(li1);

    
    const li2 = document.createElement('li');
    li2.textContent = lastname;
    ul.appendChild(li2);
})*/

//exercice 03 :
/*
let allBoldItems;

function getBoldItems() {
  allBoldItems = document.querySelectorAll('strong');
}

function highlight() {
  for (let item of allBoldItems) {
    item.style.color = 'blue';
  }
}

function returnItemsToDefault() {
  for (let item of allBoldItems) {
    item.style.color = 'black';
  }
}

const paragraph = document.querySelector('p');
paragraph.addEventListener('mouseover', highlight);
paragraph.addEventListener('mouseout', returnItemsToDefault);

getBoldItems(); */
//exercice 04:
/*<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title></title>
</head>
<body>
<p><strong>Hello</strong> I hope you are enjoying <strong>this</strong> class. At the
<strong>end</strong> you <strong>will</strong> be great Developers!
<strong>Enjoy</strong> the <strong>JavaScript </strong> lessons</p>
  
<form id="MyForm"> 
    <label for="radius">Radius</label>
    <input type="text" name="radius" id="radius" required> 
    <label for="volume">Volume</label>
    <input type="text" name="volume" id="volume"> 
    <input type="submit" value="Calculate" id="submit">    
</form> 

    <script src="exerciceXPP.js"></script>
</body>
</html>*/



const myForm = document.querySelector('#myForm')
myForm.addEventListener('submit', function (d){
    d.preventDefault()
const radiusValue = document.querySelector('#radius').value;
const radius = parseFloat(radiusValue);
if (isNaN(radius)) {
        alert('Please enter a valid number for radius.');
        return;
    }

    
    const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);

    
    document.querySelector('#volume').value = volume.toFixed(2); 
});


