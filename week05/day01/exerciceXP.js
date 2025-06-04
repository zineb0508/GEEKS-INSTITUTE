
//exercice01:

function compareToTen(num){
    return new Promise((resolve, reject)=>{
        if(num <=10){
            resolve(`${num} is less than or equal 10 `)
        }
        else {
            reject(`${num} is over greater 10 `)
        }
    }
    )
};

compareToTen(19)
  .then(result => console.log(result))
  .catch(error => console.log(error)); 


compareToTen(7)
  .then(result => console.log(result)) 
  .catch(error => console.log(error));

  //exercice 02:
  
const delayedSuccess = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("success");
  }, 4000); 
});

delayedSuccess.then(message =>{
    console.log(message)
});
//exercice03:
const resolvedPromise = Promise.resolve(3);

resolvedPromise.then(value => {
  console.log("Resolved with:", value); 
});


const rejectedPromise = Promise.reject("Boo!");

rejectedPromise.catch(error => {
  console.error("Rejected with:", error); 
});
//exercice04:
