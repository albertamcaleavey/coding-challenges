// 1. Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// function twoSum (nums, target) {
//     for (let i = 0; i < nums.length - 1; i ++) {
//     for (let j = i + 1; j < nums.length; j ++ ) {
//         if (nums[i] + nums[j] === target){
//             return [i, j]
//             }
//         }
//     }

// }

// console.log(twoSum([2,7,11,15], 9))

//-------------------------------------------------------------------

// 2. You receive the direction you are facing (one of the 8 directions: N, NE, E, SE, S, SW, W, NW) and a certain degree to turn (a multiple of 45, between -1080 and 1080); positive means clockwise, and negative means counter-clockwise.

// Return the direction you will face after the turn.

// function direction(facing, turn){
//     let directions = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW']

//     let numToMove = turn / 45
//     let facingIdx = directions.indexOf(facing)
//     let result = null
//     let answerIdx = facingIdx + numToMove
//     console.log(numToMove)
//     if (answerIdx > 7) {
//         result = directions[answerIdx - 8]
//     } else if (answerIdx <= 7) {
//         result = directions[answerIdx]
//     }
//     if (turn < 0 && answerIdx > 7) {
//         result = directions[answerIdx - 8]
//     } else if (turn < 0 && answerIdx <= 7) {
//         result = directions[answerIdx]
//     }
    
//     // return result
    
// }

// console.log(direction("W",  495))

//-------------------------------------------------------------------

// 3. Given 2 elevators (named "left" and "right") in a building with 3 floors (numbered 0 to 2), write a function elevator accepting 3 arguments (in order):

// left - The current floor of the left elevator
// right - The current floor of the right elevator
// call - The floor that called an elevator
// It should return the name of the elevator closest to the called floor ("left"/"right").

// In the case where both elevators are equally distant from the called floor, choose the elevator to the right.


// function elevator(left, right, call){
//     let leftDistance = call - left < 0 ? (call - left) * -1 : call - left
//     let rightDistance = call - right < 0 ? (call - right) * -1 : call - right

//     if (leftDistance === rightDistance){
//       return "right"
//     } else if (leftDistance < rightDistance) {
//       return "left"
//     } else {
//       return "right"
//     }
//   }

// console.log(elevator(1,2,1))

//-------------------------------------------------------------------

// 4. Our football team finished the championship. The result of each match look like "x:y". Results of all matches are recorded in the collection.

// For example: ["3:1", "2:2", "0:1", ...]

// Write a function that takes such collection and counts the points of our team in the championship. Rules for counting points for each match:

// if x > y: 3 points
// if x < y: 0 point
// if x = y: 1 point

// function points(games) {
//   return games.reduce((output, current) => {
//     if (current[0] > current[2]) {
//       output += 3
//     } else if (current[0] > current[2]) {
//       output += 0
//     } else {
//       output += 1
//     }
//     return output
//   }, 0)
// }

// console.log(points(["1:0","2:0","3:0","4:0","2:1","3:1","4:1","3:2","4:2","4:3"]))

//-------------------------------------------------------------------

// 5. Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

// If the parameter is itself not a perfect square then -1 should be returned.

// function findNextSquare(sq) {
//   function check(input){
//   let squareRoot = Math.sqrt(input) 
//   return Number.isInteger(squareRoot)
//   }

//   if (!check(sq)) {
//     return -1
//   } else {
//     let result = 0
//     while(check(sq + 1) === false) {
//       sq ++
//       result = sq + 1
//     }
//     return result
//   }
// }

// // improved solution
// function findNextSquare(sq) {
//   return Math.sqrt(sq)%1? -1 : Math.pow(Math.sqrt(sq)+1,2)
// }

// console.log(findNextSquare(121))

//-------------------------------------------------------------------
// 6. Check same case
//Write a function that will check if two given characters are the same case.

// If either of the characters is not a letter, return -1
// If both characters are the same case, return 1
// If both characters are letters, but not the same case, return 0

// function sameCase(a, b){
//   if(a.toUpperCase() === a.toLowerCase() || b.toLowerCase() === b.toUpperCase()){
//     return -1
//   }else if(a === a.toLowerCase() && b === b.toLowerCase() || a === a.toUpperCase() && b === b.toUpperCase()){
//       return 1
//   }else{
//     return 0
//   }
// }

//-------------------------------------------------------------------
// function pillars(num_pill, dist, width) {
//   return num_pill > 1 ? ((num_pill - 1) * dist * 100) + (num_pill - 2)* width : ((num_pill - 1) * dist * 100)
// }

// console.log(pillars(11, 15, 30))

//-------------------------------------------------------------------
// Your task is to sum the differences between consecutive pairs in the array in descending order.

// function sumOfDifferences(arr) {
//     // if (!arr.length || arr.length === 1) {
//     //     return 0
//     // } else {
//     //     let descendingArr = arr.sort((a, b)=> a > b ? -1 : 1)
//     //     let sum = 0
//     //     for (let i = 1; i < descendingArr.length; i++) {
//     //         sum += descendingArr[i - 1] - descendingArr[i] 
//     //     }
//     //     return sum
//     // }

//     //ALTERNATE SOLUTION:
//     // return Math.min(...arr)
//     // return arr.length > 1 ? Math.max(...arr) - Math.min(...arr) : 0
// }

// console.log(sumOfDifferences([1, 2, 10]))

//-------------------------------------------------------------------
// Your function takes two arguments:

// current father's age (years)
// current age of his son (years)
// ??alculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old).

// function twiceAsOld(dadYearsOld, sonYearsOld) {
//     return sonYearsOld * 2 > dadYearsOld ? sonYearsOld * 2 - dadYearsOld : dadYearsOld - sonYearsOld * 2

//     // ALTERNATIVE SOLUTION
//     return Math.abs(dadYearsOld - 2 * sonYearsOld)
// }

// console.log(twiceAsOld(55,30))

//-------------------------------------------------------------------
// I love you
// a little
// a lot
// passionately
// madly
// not at all
// When the last petal was torn there were cries of excitement, dreams, surging thoughts and emotions.

// Your goal in this kata is to determine which phrase the girls would say for a flower of a given number of petals, where nb_petals > 0.

// function howMuchILoveYou(nbPetals) {
//     let petalsArr = ["I love you", "a little", "a lot", "passionately", "madly", "not at all"]
//     let answer = null
//     for (let i = 0; i < nbPetals; i++) {
//         answer = petalsArr[i]
//     }
//     return answer
// }

// console.log(howMuchILoveYou(7))

//-------------------------------------------------------------------
// Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

// function between(a, b) {
//     solution = []
//     for (let i = a; i <= b; i++){
//             solution.push(i)
//         }
//         return solution
//     }


// console.log(between(1, 4))

//-------------------------------------------------------------------
// You get any card as an argument. Your task is to return the suit of this card (in lowercase).

// Our deck (is preloaded):

// ('3???') -> return 'clubs'
// ('3???') -> return 'diamonds'
// ('3???') -> return 'hearts'
// ('3???') -> return 'spades'

//-------------------------------------------------------------------


function finalGrade (exam, projects) {
        if (exam > 90 || projects > 10) return 100
        if (exam > 75 && projects >= 5) return 90
        if (exam > 50 && projects >= 2) return 75
        return 0
        
    }



console.log(finalGrade(100, 12))