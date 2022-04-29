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

// 2. You receive the direction you are facing (one of the 8 directions: N, NE, E, SE, S, SW, W, NW) and a certain degree to turn (a multiple of 45, between -1080 and 1080); positive means clockwise, and negative means counter-clockwise.

// Return the direction you will face after the turn.

function direction(facing, turn){
    let directions = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW']

    let numToMove = turn / 45
    let facingIdx = directions.indexOf(facing)
    let result = null
    let answerIdx = facingIdx + numToMove
    console.log(numToMove)
    if (answerIdx > 7) {
        result = directions[answerIdx - 8]
    } else if (answerIdx <= 7) {
        result = directions[answerIdx]
    }
    if (turn < 0 && answerIdx > 7) {
        result = directions[answerIdx - 8]
    } else if (turn < 0 && answerIdx <= 7) {
        result = directions[answerIdx]
    }
    
    // return result
    
}

console.log(direction("W",  495))
