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

function findNextSquare(sq) {
  function check(input){
  let squareRoot = Math.sqrt(input) 
  return Number.isInteger(squareRoot)
  }

  if (!check(sq)) {
    return -1
  } else {
    let result = 0
    while(check(sq + 1) === false) {
      sq ++
      result = sq + 1
    }
    return result
  }
}

function findNextSquare(sq) {
  return Math.sqrt(sq)%1? -1 : Math.pow(Math.sqrt(sq)+1,2)
}

console.log(findNextSquare(121))
