import FS from "fs";

// array containg an array off earch number in a row from the input
const input = FS.readFileSync("./input.txt", "utf-8").split("\n").map(line => line.split(' ').map(num => parseInt(num)));

const checkValid = (list) => {

    // check if it increasing or decreasing
    let isIncreasing =  Math.sign(list[1] - list[0]) === 1;

    // set isValid to true
    let isValid = true

    // Loop through each number in the list
    for (let i = 1; i < list.length; i++) {

        // get the difference between the current and previous number
        let difference = Math.abs(list[i - 1] - list[i]);

        // check is it increading or decreasing
        let nextIncreasing =  Math.sign(list[i] - list[i - 1]) === 1;

        // if the difference isnt between 1 and 3 or the next number is not increasing or decreasing based on isIncreasing
        if(difference < 1 || difference > 3 || nextIncreasing !== isIncreasing) {

            // set isValid to false
            isValid = false
        }

    }

    // return isValid
    return isValid

}


// create sum of all the ones that meet the valid check
let result =input.reduce((sum, list) => sum + (checkValid(list) ? 1 : 0), 0);

// Print numbers
console.log(result);