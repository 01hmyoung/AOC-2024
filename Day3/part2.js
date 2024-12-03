
import FS from "fs";

// Read input
const input = FS.readFileSync("./input.txt", "utf-8").trim().split('\n').join('');

// get list of instructions from input includeing do() and don't()
const listOfInstructions = input.match(/mul\((\d+),(\d+)\)|do\(\)|don't\(\)/g);

// check if comand is valid
const checkValid = (input) => {

    // strip mul( and ) from string
    input = input.replace("mul(", "")
    input = input.replace(")", "")

    // regex to check if numbers are valid
    const regex = /^[0-9]+,[0-9]+$/;
    
    // test if input is valid
    const isValid = regex.test(input);

    // if input is valid
    if(isValid){
        
        // split input into numbers
        const numbers = input.split(",")

        // get numbers
        const num1 = parseInt(numbers[0])
        const num2 = parseInt(numbers[1])

        // multiply and return
        return num1 * num2
    }

    // return 0 if invalid
    return 0

}

// start count
let count = 0

// set active to true as challenge states it starts as active
let active = true;

// Loop through each instruction
listOfInstructions.forEach((instruction) => {

    // check if instruction is do() or don't() and set active status else check command and add to count
    if(instruction === 'do()') {

        // set active to true
        active = true;
    }else if(instruction === 'don\'t()') {

        // set active to false
        active = false;
    }else{

        // check if active
        if(active){

            // add to count
            count += checkValid(instruction)
        }
    }
})

// print count
console.log(count)
