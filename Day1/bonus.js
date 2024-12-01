import { count } from "console";
import FS from "fs";

const input = FS.readFileSync("./input.txt", "utf-8");

const left = [];
const right = [];

const data = input.split("\n").map((line) => {
    return line.split("   ");
});

data.forEach((line) => {
    left.push(line[0]);
    right.push(line[1]);
});

// left.sort((a, b) => a - b);
// right.sort((a, b) => a - b);

let total = 0;

left.forEach((value) => {
    let count = 0;
    for(let i = 0; i < right.length; i++) {
        if(value === right[i]) {
            count++;
        }
    }
    console.log(value, count);
    total += value * count;
});

console.log(total);

