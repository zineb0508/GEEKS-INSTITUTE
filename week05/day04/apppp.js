import {person} from './data.js';
const totalAge = person.reduce((sum, person )=> sum + person.age, 0 )
const averageAge = totalAge / person.length;
console.log("Average age:", averageAge);