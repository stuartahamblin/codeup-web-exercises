/*
 * Complete the TODO items below
 */
const users = [
  {
    name: 'zach',
    email: 'zach@codeup.com',
    languages: ['javascript', 'bash']
  },
  {
    name: 'ryan',
    email: 'ryan@codeup.com',
    languages: ['clojure', 'javascript']
  },
  {
    name: 'luis',
    email: 'luis@codeup.com',
    languages: ['java', 'scala', 'php']
  },
  {
    name: 'fernando',
    email: 'fernando@codeup.com',
    languages: ['java', 'php', 'sql']
  },
  {
    name: 'justin',
    email: 'justin@codeup.com',
    languages: ['html', 'css', 'javascript', 'php']
  }
];

// ANSWER: fill in your name and email and add some programming languages you know
// to the languages array

// users.push({name: 'stuart', email: 'stuart.a.hamblin@gmail.com', languages: ['html', 'css', 'javascript', 'php']});
// console.log(users);

// ANSWER: replace the `var` keyword with `const`, then try to reassign a variable
// declared as `const`
const name = 'stuart';
const email = 'stuart.a.hamblin@gmail.com';
const languages = ['html', 'css', 'javascript'];
// name = 'mark';       //doesn't work
// console.log(name);

// ANSWER: rewrite the object literal using object property shorthand
users.push({
  name,
  email,
  languages
});

// ANSWER: replace `var` with `let` in the following variable declarations
let emails = [];
let names = [];

// ANSWER: rewrite the following using arrow functions
// users.forEach(function(user) {
//   return emails.push(user.email);
// });
users.forEach(user => emails.push(user.email));
// console.log(emails);

// users.forEach(function(user) {
//   return names.push(user.name);
// });
users.forEach(user => names.push(user.name));
// console.log(names);

// ANSWER: replace `var` with `let` in the following declaration
let developers = [];

// ANSWER: rewrite the code below to use object destructuring assignment
//       note that you can also use destructuring assignment in the function
//       parameter definition
users.forEach(function({name, email, languages}) {
  // const name = user.name;
  // const email = user.email;
  // const languages = user.languages;
  // const {name, email, languages} = user;

// ANSWER: rewrite the assignment below to use template strings
//   developers.push(name + '\'s email is ' + email + name + ' knows ' + languages.join(', '));
    developers.push(`${name}'s email is ${email}. ${name} knows ${languages.join(', ')}`);

});

console.log(developers);

    // let easierQuote = `"You had me at 'meat tornado'" - ${firstName} ${lastName}`;

// ANSWER: Use `let` for the following variable
let list = '<ul>';

// for (let element of iterable) {
//     // ...
// }

// ANSWER: rewrite the following loop to use a for..of loop
// developers.forEach(function (developer) {
for (let developer of developers) {

  // ANSWER: rewrite the assignment below to use template strings
  // list += '<li>' + developer + '</li>';
    list += `<li> ${developer} </li>`;
}
list += '</ul>';
console.log(list);