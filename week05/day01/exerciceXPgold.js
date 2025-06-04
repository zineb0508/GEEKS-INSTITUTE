const promise1 = Promise.resolve(3);
const promise2 = 42;// Not a promise, but treated like one that resolves
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 3000, 'foo');
});
Promise.all([promise1, promise2, promise3])
    .then(values => {
        console.log(values)
    })
    .catch(error =>{
        console.error("a Failed promise", error)
    });

    //explaination:// Promise.all waits for everything in the list to finish
// If all are successful, it gives you back the results in order
// If one fails, it stops and shows the error
// Even normal values (like numbers) work ,they're treated as "done"

    //exercice02:
    

function timesTwoAsync(x) {
  return new Promise(resolve => resolve(x * 2));
}

const arr = [1, 2, 3];
const promiseArr = arr.map(timesTwoAsync);

Promise.all(promiseArr)
  .then(result => {
    console.log(result);
  });
//the output :[2,4,6]

