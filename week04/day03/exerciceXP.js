//exercice01:
//the output will be : I am John Doe from Vancouver, Canada. Latitude(49.2827), Longitude(-123.1207)
//exerice02:

const { use } = require("react");

//exerice02:
function displayStudentInfo(objUser){
    const  {first, last} = objUser;
    return `your full name is ${first} ${last}`;
}
console.log(displayStudentInfo ({first : "Elie", last : "Schoppik"}));
//exercice03:
 const users = { user1: 18273, user2: 92833, user3: 90315 };
 //console.log(Object.entries(users));


 const updatedUsersArray = Object.fromEntries(Object.entries(users).map(([key,value])=> [key,value * 2] ));
 console.log(updatedUsersArray);
//exercice04:
class Person {
  constructor(name) {
    this.name = name;
  }
}

const member = new Person('John');
console.log(typeof member);
//object
//exercice05:
class Dog {
  constructor(name) {
    this.name = name;
  }
};
      // 2
class Labrador extends Dog {
  constructor(name, size) {
    super(name);
    this.size = size;
  }
};
//exercice06:

const object1 = { number: 5 }; 
const object2 = object1; 
const object3 = object2; 
const object4 = { number: 5};

object1.number = 4;
console.log(object2.number)// the output: number 4  object2 sees the change because it's looking at the same object
console.log(object3.number)//the output: number: 4 object3 also sees the change for the same reason
console.log(object4.number)//the output: number : 5 object4 is a separate object, so its value is still 5
//1/2
class animal {
    constructor ( name, type , color ){
        this.name = name,
        this.type = type,
        this.color = color
    }

};
class Mammal  extends animal{
    sound(soundsAnimal){
        return ` ${soundsAnimal} my name is ${this.name} and i'm ${this.color} and i'm a ${this.type}`;
    }
};
const farmerDog  = new Mammal("saimon", "dog", "white")
console.log(farmerDog.sound('haw haw'))
