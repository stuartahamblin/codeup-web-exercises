// 1. Create a file named promises.js inside of your js directory.
//
// 2. Write a function named wait that accepts a number as a parameter, and
//    returns a promise that resolves after the passed number of milliseconds.
//      wait(1000).then(() => console.log('You\'ll see this after 1 second'));
//      wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));
//
// 1. Generate a Personal Access Token for the github api.
//    We will use this so that we don't get rate limited when talking to the
//    github api. You can add the token to your requests like this:
//      fetch(url, {headers: {'Authorization': 'token YOUR_TOKEN_HERE'}})
//
// 2. Create a function that accepts a github username, and returns a promise
//    that resolves with the date of the last commit that user made. Reference
//    the github api documentation to achieve this.