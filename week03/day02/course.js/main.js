 
 
 // video010
 console.log('zineb erziki');
 console.log(typeof("zineb"))
 console.log(typeof(500))
 console.log(typeof ["12", "17","20"])
 console.log( typeof[name = "zineb", age = 24, country = "morocco"]);
 console.log (typeof true );
 console.log( typeof undefined);
 console.log(typeof null)

//video011
// syntax (- keyword | Variable. Name | Assignement . Operator | Variable Value)

var User = " maryam";

console.log(User)
console.log(User)
console.log(User)
console.log(User)


// to change or update the string

//video012


'camel Case' //in js we write like this
//video013

//let a = 1;
/*const a = 1;
console.log(a);

/*--Var
---Redeclare (Yes) 
----Acces Before Declare(undefined)
----Variable Scope Drama [Added to Window ].()
----Block or Function Scope
 -- Let 
---Redeclare (No--> Error) 
----Acces Before Declare(udefined)
----Variable Scope Drama (no)
----Block or Function Scope
--Const
---Redeclare (NO--> Error ) 
----Acces Before Declare(undefined)
----Variable Scope Drama [Added to Window ].()
----Block or Function Scope
*/
/*const aa = 1;
console.log('Elzero \
    Web\
     school');
console.log("zineb\\ \"erziki\"")
// this '' ins this '' is a problem and for "" too

console.log("zineb\nErziki")
//
let ac = "zineb";
let b = "maryam";
let z = "wydad"
let n = "alouma"
console.log(`${ac} "" '' \\ ${b}
 ${z}\ ${n}`)

//* video 016
/*let Title = "zineb"
let desc = "erziki"
let markUp = `
    <div class= "card">
     <div class= "child">
        <h2>${Title}</h2>
        <p>${desc}</p>
        </div>
     </div>
    `;
document.write(markUp) */

// don't forget the (``)

let titleText = "Elzero",
    descText = " Elzero Web School",
    dateText =" 25/05";

let cardContent = `
    <div>
    
        <h3>${titleText} </h3>
        <p>${descText}</p>
        <span>${dateText}</span>
       </div>
       `;


document.getElementById("cardContent").innerHTML = cardContent.repeat(4);

//
/*console.log(10   - "zineb") //Nan
console.log(typeof NaN)
console.log(20 /5)
console.log(2** 4);
console.log( 10% 2)
console.log(11 % 2)// remove 1
console,log(35 )*/

console.log(+100);
console.log(+ "37")
console.log(+"-100")
console.log(+"zienb")
console.log(+35,5)
console.log(0xFF)
console.log(+null)
console.log(+false)
console.log(+true)


console.log(-100);
console.log(- "37")
console.log(-"-100")
console.log(-"zienb")
console.log(-35,5)
console.log(-0xFF)
console.log(-null)
console.log(-false)
console.log(-true)
console.log(Number("100"))

//video19
 let k = "10";
 let p = 37;
 let o = true

console.log(k + p + o)   // result 1037true

// Assignment Operators

let t = "10";

console.log(+t)
let d ="-100"
let e = "20"
let f = 30
let g = true
console.log(-d + 20**2 )

//VIDEO023


console.log(1e6);
console.log(Number.MAX_VALUE)
console.log(Number.MAX_SAFE_INTEGER)

console.log((100).toString())
console.log(100.18.toString())
// output 100/ 100.18
console.log(15.67432.toFixed(2))//out put 15.67
console.log(parseInt(" 100 zineb"));//output 100
console.log(parseInt("zineb 100 zineb")); //output NaN
//console.log(parsetFloat("100.500 Zineb")); //output 100.500
console.log(Number.isInteger("100"));// OUTPUT FALSE
console.log(Number.isInteger(100)); //OUTPUT TRUE
console.log(Number.isInteger(100.500)) //OUTPUT FALSE
console.log(Number.isNaN("ZINEB "/ 20))//OUTPUT TRUE

console.log(Math.round(99,2))// output 99
console.log(Math.ceil(0.000000009))// output 1
console.log(Math.floor(0.00000009))// output 0
console.log(Math.min(-1,20,67,-19))//output -19
console.log(Math.max(1,2,20*10)); //output 200
console.log(Math.pow(2,4)) //output 16
console.log(Math.random())

let a = 1_00;
let j = 2_00.5;
let c = 1e2;
let m = 2.4;

console.log(Math.floor((Math.min( a, j, c , m))))
console.log(a ** Math.floor(m))
console.log(Math.floor(m))
console.log(Math.round(m))
console.log(2.4. toFixed(0))
console.log(parseInt(m)) //output 2

let theName = "zineb"
console.log(theName[1]); //output z
console.log(theName.charAt(5)); //output 
console.log(theName.length) //output 6
console.log(theName.trim())
console.log(theName.toUpperCase())  //output ZINEB
console.log(theName.toLowerCase())
console.log(theName.trim().charAt(2).toUpperCase());

let h =  "zineb erziki";

console.log(h.indexOf("erziki"));

console.log(theName.trim().charAt(1))  // output: i
console.log(h.lastIndexOf("z")) // output: 8
 console.log(h.slice(0,6)) //output: zineb_
console.log(h.slice(-3))// output : iki
console.log(h.repeat(2)) 
console.log(h.split(0)) //output : ['z', 'i', 'n', 'e', 'b']
console.log(h.split(" ", 1)) //with space he cut the word without it is cut the lettre

console.log(h.substring(-3,6)) //output: neb er
console.log(h.length)
console.log(h.substr(-6))//output : this is work with negative nubs
console.log(h.includes("web")) //false
console.log(h.startsWith("e", 6))// true
console.log(h.endsWith("i")) //true



let q  = "Elzero Web School";
//console.log(q.slice(2))
console.log(q.charAt(13).repeat(8).toUpperCase(13))
console.log(q.slice(0,6))
console.log(q.substr(0, 6) + " " + q.substr(11, 6)
)
let sentence = "Elzero Web School";

let first = sentence.charAt(0).toLowerCase();
let middle = sentence.slice(1, -1).toUpperCase();
let last = sentence.charAt(sentence.length - 1).toLowerCase();

let result = first + middle + last;
console.log(result);  // eLZERO WEB SCHOOl
console.log( 10 === "10") //false
console.log( typeof"zineb" == typeof"erziki") // true
//console.log(!( 10 = "10")) // true

let theFirst = "zineb";
let theGendre = "female";
let theAge = 18;

if (theGendre === "female" ){
    console.log("Mrs");
} else { 
    console.log("Mr")
}

theGendre === "female" ? console.log ("Mrs") : console.log("Mr");
console.log(`hello ${theGendre === "female" ? "Mrs": "Mr" } ${theFirst}`)
// output : hello Mrs zineb
theAge < 18 
? console.log(18)
: theAge > 18 && theAge < 60 
?console.log("18 to 60")
: theAge > 60 
? console.log("larger thane 60")
: console.log("unknown")
 

console.log(Boolean(100))
console.log(Boolean(-100))
console.log(Boolean(""))
console.log(Boolean(null))


let price = 0;
console.log(`the price is ${price|| 200}`)

console.log(`the price is ${price ?? 200}`)  //? it returns the value only if null or undefined


let st = "Elzero Web School";
if ("3" + "4" === "34"){
console.log("Good")}

if ( " string "!==  "string "){
    console.log("good")
}
if (st[7].toLowerCase() === "w") {
  console.log("Good"); // ✅ prints
}


let team = 10;
switch (team) {
    default:
        console.log("unknown")// unknown
    
    case 1:

    console.log("dima wydad");
    break;
    case 3:
    case 9:
    console.log("winners")
    break;
    
}



let num1 = 5;
let num2 = 10;
let op = "*";
// Your switch statement here
switch (op){
    
    case "+":
        console.log((num1 + num2));
        break;
    case "-":
        console.log(num1 - num2);
        break;
    case "*":
        console.log(num1 * num2);
        break;
    case "%":
        console.log( num1  % num2);
        break;
    case "/":
        console.log(num1 / num2);
        break;
        
    default: 
        console.log("failed")
    }

    let job = "IT"
    let salary = 6000;
    switch(job){
        case "manager":
            salary = 6000;
            break;
        case "support":
        case " designer":
             salary = 8000;
             break;

        case   " support":
        case " IT":
            salary = 4000;

            break;

            //default :
            //salary = 1500;
    }
    console.log(salary);
    let myFriend = ["zineb", "wydad", "zineb",["maryam", "success"]]
    //*console.log(`hello ${myFriend[0]}`)
    //console.log(myFriend)
   // myFriend[myFriend.length -1]= "ismail"// output: zineb, wydad, ismail
    //console.log(myFriend)
   // myFriend.length = 2
    
   myFriend.unshift("malak", "barcaa")//output malak, barca,zineb, wydad
   myFriend.push("samah","laila")// add the names in the end of the array
 let second = myFriend.shift()// remove malak but can return it
console.log(` hello ${second}`)// hello malak
let third = myFriend.pop()//the last element from the array
console.log(`yeah this is my name ${third}`) //output yeah.. laila

console.log(myFriend.lastIndexOf("zineb", -1));//search
console.log(myFriend.includes("zineb"))// true


let order = [5, 8 , "1937", 1938, 11150.150,"wydad"]
console.log(order.sort())// order the array


function sayHello() {
    console.log("Hello , welcome!")
}
sayHello();


function greet(name){
    console.log(`hello,  ${name} `)
}
greet ("ali")// ali is the argument
function greet (name = "Guest"){
    console.log("hello, "+ name)

}
greet ();
greet("lina"

)
//local variable
function showccolor(){
    let color= "red"
    console.log(color)}
showccolor();// output red
//global variable
let color = "green"

function displaycolor(){
    console.log(color)
}
displaycolor();
console.log(color)// out put green green\\

function multiply(y ,x){
    return y * x
}
let resulta = multiply(5, 7);
console.log(resulta)


function checkName (name){
    if (name !== "sara"){
        retunr ;
}
console.log("welcom, sara")}
checkName("sara")
///output welcome sara

function userProfile(name, age, color) {
    console.log("Name: " + name);
    console.log("Age: " + age);
    console.log("Favorite color: " + color);
    // This should be separated into smaller functions
}

const great = function (name){
    console.log("hi "+ name);

}
let colors = ["yellow", "blue"];
let [fifth, fourth] = colors;

console.log(fifth);  // yellow

let fruits = ["apple", "banana"];
let moreFruits = [...fruits, "kiwi"]
console.log(moreFruits);// apple banana kiwi

//🧠 What is the DOM?
//DOM stands for:

//Document Object Model

//It's how JavaScript "sees" and "talks to" your HTML page.


//Summary Table
//onchange
//After the input changes
//and loses focus
//Good for final validation
//oninput
//Every time the value changes
//Real-time updates
//onsubmit
//When form is submitted
//Inline usage discouraged
//addEventListener("submit", ...)
//Same as above but cleaner
//Best practice
//event.preventDefault()
//Stops default form behavior
//Used to handle forms manually

