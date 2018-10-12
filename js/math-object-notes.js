console.log("MATH OBJECT NOTES START");

// Math Object
// JavaScript provides a built-in Math object with a variety of helpful properties and methods. One thing that is unique about that Math object is that all of its properties and methods are static. This means that you will always access the properties and methods by using Math.property-or-method, and that you will never do var math = new Math();.
//
// For full documentation on the Math object look on the Mozilla MDN.
//
//     Methods
// Here are some commonly used methods of the Math object:
//
//     Math.random()
// According to the documentation:
//
//     The Math.random() function returns a floating-point, pseudo-random number in the range [0, 1] that is, from 0 (inclusive) up to but not including 1 (exclusive), which you can then scale to your desired range.

    // Example (from the documentation):
    //
    //
    // // Returns a random integer between min and max.
    // function getRandomInt(min, max) {
    //     return Math.floor(Math.random() * (max - min + 1) + min);
    // }

// Math.round()
// According to the documentation:
//
//     The Math.round() function returns the value of a number rounded to the nearest integer.
//

    // Examples (from the documentation):
    // Math.round(20.49);  // 20
    // Math.round(20.5);   // 21
    // Math.round(-20.5);  // -20
    // Math.round(-20.51); // -21
    // Math.floor()

// According to the documentation:
//
//     The Math.floor() function returns the largest integer less than or equal to a number.

    // Examples (from the documentation):
    //
    //
    // Math.floor( 45.95); //  45
    // Math.floor(-45.95); // -46
    // Math.ceil()
    // According to the documentation:

//     The Math.ceil() function returns the smallest integer greater than or equal to a number.

    // Examples (from the documentation):
//
//
// Math.ceil(.95);   // 1
// Math.ceil(4);     // 4
// Math.ceil(7.004); // 8
// Math.pow()
// According to the documentation:

//     The Math.pow() function returns the base to the exponent power, that is, base^exponent.

    // Example:
    //
    //
    // // 2 raised to the 16 power
    // Math.pow(2, 16); // 65536

// Math.sqrt()
// According to the documentation:
//
//     The Math.sqrt() function returns the square root of a number.

    // Examples (from the documentation):
    //
    //
    // Math.sqrt(9);  // 3
    // Math.sqrt(2);  // 1.414213562373095
    // Math.sqrt(1);  // 1
    // Math.sqrt(0);  // 0
    // Math.sqrt(-1); // NaN

// Constants
// Here are some commonly used constants of the Math object:
//
//     Math.E
// According to the documentation:
//
//     The Math.E property represents the base of natural logarithms, e, approximately 2.718.
//
//     Math.PI
// According to the documentation:
//
//     The Math.PI property represents the ratio of the circumference of a circle to its diameter, approximately 3.14159.