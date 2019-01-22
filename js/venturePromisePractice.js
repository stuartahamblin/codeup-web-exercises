// ONLY RESOLVE
// var promiseToCleanRoom = new Promise(function(resolve, reject){
//     console.log('Starting to clean');
//     setTimeout(function(){
//         let valueToPass = "done";
//         resolve(valueToPass)
//     }, 2000);
// });
// promiseToCleanRoom.then(function(value){
//     console.log(value)
// });
// console.log('Im in the middle of cleaning');



// ONLY REJECT
// var promiseToCleanRoom = new Promise(function(resolve, reject){
//     console.log('Starting to clean');
//     setTimeout(function(){
//         let valueToPass = "done";
//         reject(valueToPass)
//     }, 2000);
// });
// promiseToCleanRoom.then(function(value){
//     console.log(value)
// }, function(valueFailed){
//     console.log('This room is never getting clean ' + valueFailed)
// });
//
// console.log('Im in the middle of cleaning');



// BOTH RESOLVE AND REJECT
// var cleanRoom = new Promise(function(resolve, reject) {
//     console.log('Started cleaning the room');
//
//     var randomNum = Math.floor(Math.random() * 10) + 1;
//
//     if(randomNum <= 5) {
//         setTimeout(function() {
//             resolve('Done');
//         }, 2000);
//     } else {
//         reject('Stopped cleaning');
//     }
//
// });
// cleanRoom.then(function(value) {
//         console.log(value);
//     },
//     function(value) {
//         console.log(value);
//     });
//
// console.log('I\'m cleaning');


var promiseToCleanRoom = new Promise(function(resolve, reject){
    console.log('Starting to clean');
    setTimeout(function(){
        let valueToPass = "done";
        resolve(valueToPass)
    }, 2000);
});

let promiseToEatDinner = new Promise(function(){
    console.log("Eating dinner")
});

promiseToCleanRoom.then(promiseToEatDinner);

console.log('Im in the middle of cleaning');

// Look into Async await