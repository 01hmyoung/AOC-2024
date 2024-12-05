import fs from "fs";

// read input
const grid = fs.readFileSync("./input.txt", "utf-8").trim().split("\n")

let count = 0
let word = 'XMAS';

const outsideRangeCheck = (grid, x, y) => {
    if (x < 0 || x >= grid[0].length || y < 0 || y >= grid.length) return '';
    return grid[y][x];
}


for (let y = 0; y < grid.length; y++) {
    for (let x = 0; x < grid[y].length; x++) {
        if (grid[y][x] !== 'X') continue;
            
        count += [{ x: 0, y: -1 }, { x: 1, y: -1 }, { x: 1, y: 0 }, { x: 1, y: 1 }, { x: 0, y: 1 }, { x: -1, y: 1 }, { x: -1, y: 0 }, { x: -1, y: -1 }].reduce((sum, direction) => {
            let search = grid[y][x];
            let currentX = x, currentY = y;

            for (let i = 0; i < word.length - 1; i++) {
                currentX += direction.x;
                currentY += direction.y;

                search += outsideRangeCheck(grid, currentX, currentY);
            }
    
            return sum + (search === word ? 1 : 0);
        }, 0);
    }
}

console.log('part 1: ', count)