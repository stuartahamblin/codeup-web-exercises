(function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    var planetsArray;

    /**
     * Q1:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */

        // A1:
        planetsArray = planetsString.split('|');
        console.log(planetsArray);

    /**
     * Q2:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     */

        // A2:
        var brplanetsString = planetsArray.join('<br>');
        console.log(brplanetsString);
        // document.body.innerHTML = brokenPlanetArray; //to HTML

     /* Q3 BONUS:
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */

        var unordered = "<ul><li>" + planetsArray.join('</li><li>') + "</li></ul>";
        console.log(unordered);
        // document.body.innerHTML = HTMLString; //to HTML

})();
