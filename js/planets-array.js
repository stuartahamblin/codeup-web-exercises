(function(){
    "use strict";

    var planets = [
        'Mercury',
        'Venus',
        'Earth',
        'Mars',
        'Jupiter',
        'Saturn',
        'Uranus',
        'Neptune'
    ];

    /**
     * Q1 - Q7:
     * Read each console log below, and write some javascript code to perform
     * the step that it describes
     */

        // A1:
        console.log('Adding "The Sun" to the beginning of the planets array.');
        planets.unshift("Sun");
        console.log(planets);

        // A2:
        console.log('Adding "Pluto" to the end of the planets array.');
        planets.push("Pluto");
        console.log(planets);

        // A3:
        console.log('Removing "The Sun" from the beginning of the planets array.');
        planets.shift();
        console.log(planets);

        // A4:
        console.log('Removing "Pluto" from the end of the planets array.');
        planets.pop();
        console.log(planets);

        // A5
        console.log('Finding and logging the index of "Earth" in the planets array.');
        console.log(planets.indexOf("Earth"));

        // A6
        console.log("Reversing the order of the planets array.");
        planets.reverse();
        console.log(planets);

        // A7
        console.log("Sorting the planets array.");
        planets.sort();
        console.log(planets);
})();
