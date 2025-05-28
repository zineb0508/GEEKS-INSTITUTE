const { use } = require("react");

const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
colors.forEach((color, index) => {
    console.log(`#${index} choice is ${color}`)
})
const violetColor = colors.some(color => color.includes("Violet") )
if (violetColor){
    console.log("Yeah");

} else{
console.log("No")}

//exercie02:
const Colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
const ordinal = ["th","st","nd","rd"];

Colors.forEach((Color, index) => {
    const pos = index+1;
    const suffix =  pos === 1? "st":
                    pos === 2? "nd":
                    pos === 3? "rd": "th";

console.log(`${pos}${suffix} choice is ${Color}.`)

});
//exercice 03:
/*------1------
const fruits = ["apple", "orange"];
const vegetables = ["carrot", "potato"];

const result = ['bread', ...vegetables, 'chicken', ...fruits];
console.log(result);*/
// the output is : 'bread', "appel","orange",'chicken',"carrot","potato"
/*------2------
const country = "USA";
console.log([...country]);
// output: "USA"
------Bonus------
let newArray = [...[,,]];
console.log(newArray); */
//the output is : 2 empty items [undefined, undefined]

//exercice 04:
const users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
             { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
             { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
             { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
             { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
             { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
             { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}];
const newarry = users.map(user => `hello ${user.firstName}` )
console.log(newarry);
 
const resident = users.filter(user => user.role === "Full Stack Resident");
console.log(resident);
const fullStackLastNames = users
  .filter(user => user.role === 'Full Stack Resident')
  .map(user => user.lastName);

console.log(fullStackLastNames);
//exercice05:
const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];
const epicString = epic.reduce((acc, val) => acc + ' ' + val);
console.log(epicString);
//exercice06:
const students = [{name: "Ray", course: "Computer Science", isPassed: true}, 
               {name: "Liam", course: "Computer Science", isPassed: false}, 
               {name: "Jenner", course: "Information Technology", isPassed: true}, 
               {name: "Marco", course: "Robotics", isPassed: true}, 
               {name: "Kimberly", course: "Artificial Intelligence", isPassed: false}, 
               {name: "Jamie", course: "Big Data", isPassed: false}];
students.filter(student => student.isPassed).forEach(student => {
    console.log(`Good job ${student.name}, you passed the course in ${student.course}`);
  });
