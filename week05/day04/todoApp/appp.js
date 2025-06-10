import { TodoList } from "./todo.js";

const Task1 = new TodoList("Study for exams");
const Task2 = new TodoList("learn new language");
const Task3 =new TodoList("have a rest");

Task3.markAsDone();  
console.log(Task1.toString()); 
console.log(Task2.toString()); 
console.log(Task3.toString()); 