// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is HIGHLY recommended
// If you get stuck, please leave comments to help us understand your thought process

// Add appropriate dependencies to the repository:
// $ yarn add jest

// Use test driven development to complete the following questions
// Run the file with the following command:
// $ yarn jest

// Reminder: The test will call your function


// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided.

var colors1 = ["purple", "blue", "green", "yellow", "pink"]
// Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
var colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
// Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]

describe("When arrayShuffler is called", () => {
  it("return ['yellow', 'blue', 'pink', 'green'] if ['purple', 'blue', 'green', 'yellow', 'pink'] is called",() => {
    //arrange
    const argument = colors1
    //act
    const actualResult = arrayShuffler(argument)
    //assert

    let sortedActualResult = actualResult.sort()

  expect(sortedActualResult).toEqual(['blue','green','pink','yellow'])
  })
  it("return ['saffron', 'aquamarine', 'periwinkle', 'indigo', 'ochre'] if ['chartreuse', 'indigo', 'periwinkle', 'ochre', 'aquamarine', 'saffron'] is called",() => {
    //arrange
    const argument = colors2
    //act
    const actualResult = arrayShuffler(argument)
    //assert

    let sortedActualResult = actualResult.sort()

  expect(actualResult).toEqual(['aquamarine','indigo','ochre','periwinkle','saffron'])
  })
})

// b) Create the function that makes the test pass.
// create a function that takes an array as an argument
// use .slice to remove first element from array
//use fisher yates shuffle algorithm to shuffle remaining elements in array
//fisher yates: To shuffle an array a of n elements (indices 0..n-1):
// for i from 0 to n−2 do
//      j ← random integer such that i ≤ j < n
//      exchange a[i] and a[j]
//return shuffled array

// --------------------2) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

const arrayShuffler = (array) => {
 let preShuffledArray = array.slice(1)
  for (let i = 0; i < preShuffledArray.length; i++) {
    let j = Math.floor(Math.random() * Math.floor(preShuffledArray.length));

    [preShuffledArray[i], preShuffledArray[j]] = [preShuffledArray[j], preShuffledArray[i]];
  }
  return preShuffledArray
}

// a) Create a test with expect statements for each of the variables provided.

var cubeAndSum1 = [2, 3, 4]
// Expected output: 99
var cubeAndSum2 = [0, 5, 10]
// Expected output: 1125

describe("When cubeArraySum is called", () => {
  it("return 99 if [2,3,4] is called",() => {
    //arrange
    const argument = cubeAndSum1
    //act
    const actualResult = cubeArraySum(argument)
    //assert
  expect(actualResult).toEqual(99)
  })
  it("return 1125 if [0,5,10] is called",() => {
    //arrange
    const argument = cubeAndSum2
    //act
    const actualResult = cubeArraySum(argument)
    //assert
  expect(actualResult).toEqual(1125)
  })
})

// b) Create the function that makes the test pass.

//pseudocode
//create a function takes an array as an argument
//create variable to take sum of cubed numbers
//.map array adding numbers to sum variable
//return sum variable

const cubeArraySum = (array) => {
  let sumArrayNums = 0
  array.forEach(number => {
    sumArrayNums = (sumArrayNums + (number**3))
  })
  return sumArrayNums
}



// --------------------3) Create a function that takes an array of numbers and returns an array of the minimum and maximum numbers in that order.

// a) Create a test with expect statements for each of the variables provided.

var nums1 = [3, 56, 90, -8, 0, 23, 6]
// Expected output: [-8, 90]
var nums2 = [109, 5, 9, -59, 8, 24]
// Expected output: [-59, 109]

describe("When findMinMax is called", () => {
  it("return [-8,90] if [3, 56, 90, -8, 0, 23, 6] is called",() => {
    //arrange
    const argument = nums1
    //act
    const actualResult = findMinMax(argument)
    //assert
  expect(actualResult).toEqual([-8, 90])
  })
  it("return [-59, 109] if [109, 5, 9, -59, 8, 24] is called",() => {
    //arrange
    const argument = nums2
    //act
    const actualResult = findMinMax(argument)
    //assert
  expect(actualResult).toEqual([-59, 109])
  })
})

// b) Create the function that makes the test pass.

//pseudocode
//create a function that takes an array as an argument
//use .sort to sort array from least to greatest
//once sorted use .slice to remove first and last numbers in array and .concat them into new array
//return new array

const findMinMax = (array) => {
  let sortedArray = array.sort((a,b) => a-b)
  return sortedArray.slice(0,1).concat(sortedArray.slice(-1))
}





// --------------------4) Create a function that takes in a string and returns a string with every other letter capitalized.

// a) Create a test with expect statements for each of the variables provided.

var testString1 = "albatross"
// Expected output: "aLbAtRoSs"
var testString2 = "jabberwocky"
// Expected output: "jAbBeRwOcKy"

describe("When capitalizeAlterLetters is called", () => {
  it("return aLbAtRoSs if albatross is called",() => {
    //arrange
    const argument = testString1
    //act
    const actualResult = capitalizeAlterLetters(argument)
    //assert
  expect(actualResult).toEqual("aLbAtRoSs")
  })
  it("return jAbBeRwOcKy if jabberwocky is called",() => {
    //arrange
    const argument = testString2
    //act
    const actualResult = capitalizeAlterLetters(argument)
    //assert
  expect(actualResult).toEqual("jAbBeRwOcKy")
  })
})

// b) Create the function that makes the test pass.

//pseudocode
//create a function that takes a string as an argument
//.split into array of characters
//.map through array .upCase every other index for length of array
//.join array back into string and return


//original attempt
// const capitalizeAlterLetters = (string) => {
//   return string.split("").map((letter, index) => {
//     if(index % 2 !== 0){
//       return letter.toUpperCase()
//     } else if(index % 2 === 0){
//       return letter
//     }
//   }).join("")
// }


//Deven's challenge to use ternary
const capitalizeAlterLetters = (string) => {
  return string.split("").map((letter, index) => {
    return index % 2 !== 0 ? letter.toUpperCase() : letter
  }).join("")
}

// --------------------5) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.

var testArray1 = [3, 7, 10, 5, 4, 3, 3]
var testArray2 = [7, 8, 2, 3, 1, 5, 4]
// Expected output: [3, 7, 10, 5, 4, 8, 2, 1]

describe("When makeArrayNoDoubles is called", () => {
  it("return [3, 7, 10, 5, 4, 8, 2, 1] if [3, 7, 10, 5, 4, 3, 3] and [7, 8, 2, 3, 1, 5, 4] are called",() => {
    //arrange
    const argument1 = testArray1
    const argument2 = testArray2
    //act
    const actualResult = makeArrayNoDoubles(argument1, argument2)
    //assert
  expect(actualResult).toEqual([3, 7, 10, 5, 4, 8, 2, 1])
  })
})

// b) Create the function that makes the test pass.

//pseudocode
//create function takes in arrays as arguments
//use .filter to return array of varying length from argument arrays
//use .filter within to compare values of first array to second array
//return array with new values

const makeArrayNoDoubles = (...array) => {
  let noDoublesArray = [].concat(...array)
  let finalArray = noDoublesArray.filter((number, index) => {
    return noDoublesArray.indexOf(number) === index
  })
  return finalArray
}
//
