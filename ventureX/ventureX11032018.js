function addPropertyToObject(object, property, propertyValue) {
    object[property] = propertyValue;
    // return object;
}
// const sampleObject = {"fruit":"banana"};
// console.log(addPropertyToObject(sampleObject, "material", "wood"));
// console.log(sampleObject);

// function delPropertyFromObject(object, deleteProperty) {
//     delete object[deleteProperty];
//     return object;
// }
// console.log(delPropertyFromObject({fruit:"banana", material: "wood"}, 'material'));


sampleArray = [1, 2, 3, 4, 5, 6];

// function removeFirstElementOfArray(array){
//     array.shift();
//     return array;
// }
// console.log(removeFirstElementOfArray(sampleArray));

// function removeLastElementArray(array) {
//     array.pop();
//     return array
// }
// console.log(removeLastElementArray(sampleArray));

function altBeginningEndArray(inputArray) {
    outputArray = [];
    // outputArray[0]=inputArray[0];
    // outputArray[1]=inputArray[inputArray.length-1];
    // outputArray[2]=inputArray[1];
    // outputArray[3]=inputArray[inputArray.length-2];

    // outputArray[5]=inputArray[inputArray.length-3];

    for(var i = 0; i<inputArray.length; i += 2){
        outputArray[i]=inputArray[i/2]
    }
    for(var j = 1; j<inputArray.length; j += 2){
        outputArray[j]=inputArray[inputArray.length-(j+1)/2]
    }
    return outputArray;
}
console.log(altBeginningEndArray(sampleArray));
console.log(sampleArray);

// function alternateBeginningEndArray(inputArray) {
// while (array)
//     return outputArray;
// }
// console.log(altBeginningEndArray(sampleArray));