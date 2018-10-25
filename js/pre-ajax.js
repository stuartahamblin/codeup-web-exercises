"use strict";

// $(document).ready(function() {});

var people = [
    {
        name: "Fred",
        favColor: "red"
    },
    {
        name: "Sally",
        favColor: "blue"
    },
    {
        name: "Tom",
        favColor: "yellow"
    }
];

// - add functionality to the button so that when it is clicked, an unordered list of names from the people array
// (included below) is added to the inner HTML of the div#names-list.

function buildPeople(peopleObjects) {
    var namesOfPeople = '<ul>';
    peopleObjects.forEach(function (person) {
        namesOfPeople += '<li>';
        namesOfPeople += person.name;
        namesOfPeople += '</li>';
    });
    namesOfPeople += '</ul>';
    return namesOfPeople;
}

$('#add-name-btn').click(function() {
    $('#names-list').html(buildPeople(people));
});

// For an extra bonus, make the font color of
// each list item map to that person's favColor value.

// hints...
// - You should iterate over every object in the person array
// - For each object you should build an HTML string including the proper opening and closing tags to make the unordered list items
// - using functions will help better organize your code
// - using jQuery will simplify the code needed
// - don't forget to create a branch to add and commit your work, then merge with the master