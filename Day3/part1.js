import FS from "fs";

// read input
const input = FS.readFileSync("./input.txt", "utf-8").trim().split('\n').join('');

// Get possible matches within the string
const arrayPossible = input.match(/mul\((\d+),(\d+)\)/g)

// check if comand is valis
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

// loop through each line
arrayPossible.forEach((line) => {

    // add to count
    count += checkValid(line)
})

// print count
console.log(count)
