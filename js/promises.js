(function() {
    "use strict";

// HINT: find most recent push event of a user
//       find the url of the repository pushed to from their most recent push event
//       find the most recent commit on that repo by the userc

// 1. Create a file named promises.js inside of your js directory.
//
// 2. Write a function named wait that accepts a number as a parameter, and
//    returns a promise that resolves after the passed number of milliseconds.

    function wait(delay) {
        return new Promise(function (res, ref) {
            setTimeout(() => {
                res(`You'll see this after ${delay / 1000} second(s)`);
                }, delay);
        });
    }

    wait(1000).then((message) => {
        console.log(message);
    });
    // wait(1000).then(() => console.log('You\'ll see this after 1 second'));
    // wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));

// 1. Generate a Personal Access Token for the github api.
//    We will use this so that we don't get rate limited when talking to the
//    github api. You can add the token to your requests like this:
//      fetch(url, {headers: {'Authorization': 'token YOUR_TOKEN_HERE'}})

// 2. Create a function that accepts a github username, and returns a promise
//    that resolves with the date of the last commit that user made. Reference
//    the github api documentation to achieve this.

    // ANSWER
    // const lastName = (userName) => {
    //     fetch(githubApiBaseUrl + 'stuartahamblin' + '/events', {
    //         headers: new Headers({
    //             'Authorization': token
    //         })
    //     })
    //         // console.log(response);
    //         .then(response => response.json())
    //         .then(events => {
    //             console.log(events);
    //             for (let event of events) {
    //                 if (event.type === 'PushEvent') {
    //                     console.log(event.payload.commits[0]);
    //                     console.log(event.created_at);
    //                     return 0;
    //                 }
    //             }
    //         })
    //         .catch(error => console.error(error))
    // };
    // lastName("stuartahamblin");

    // ALT ANSWER doesnt work
    // const token = '';
    // const githubApiBaseUrl = 'https://api.github.com';
    // const options = {
    //     headers: {
    //         'Authorization': 'token' + token
    //     }
    // };
    //
    // const getMostRecentCommit = (username) => {
    //     const userEventsEndpoint = `/users/${username}/events/public`;
    //     return fetch(githubApiBaseUrl + userEventsEndpoint, options)
    //         .then((data) => data.json())
    //         .then((events) => {
    //             const firstPushEvent = events.find(event => event.type === "PushEvent");
    //             return fetch(firstPushEvent.repo.url + "/commits", options);
    //         })
    //         .then(response => response.json())
    //         .then(commits => {
    //             const mostRecentCommits = commits.find(commit => commit.author.login === username);
    //             console.log(mostRecentCommits);
    //         })
    // };
    // getMostRecentCommit('stuartahamblin')
    //     .then((data) => data.json())
    //     .then((data) => {
    //         console.log(data)
    //     });



// =================== BONUS exercise 1
// In your data directory, create a profiles.json file with the following...
// {
//     "sandy123": "brown",
//     "bob234": "green",
//     "sally345": "blue"
// }
// todo Add an input field and submit button (you will need to prevent the default behaviour) that when clicked, runs the following function...
// todo Create a function that takes in a username and fetch's the color preference based on the username and sets the background color to that color.
// =================== BONUS exercise 2
// todo Using the Star Wars API, log the homeworld of a searched character
// =================== BONUS exercise 3
// todo Using the GitHub API and reduce(), find the average hour of the last 3 pushes. Ignore minutes.
// =================== BONUS exercise 4
// Create star-chars.json file in your data folder and paste in the following...
// [
//     {
//         "name": "Rey",
//         "coolness": 9
//     },
//     {
//         "name": "Luke Skywalker",
//         "coolness": 9
//     },
//     {
//         "name": "Darth Vadar",
//         "coolness": 10
//     }
// ]
// todo Create a function that fetches this array and returns an array of homeworlds for the characters.
//     It will look something like the following...
// ['Jakku', 'Tatooine', 'Tatooine']
}());