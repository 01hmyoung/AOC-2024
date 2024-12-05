import fs from "fs";

// read input
const grid = fs.readFileSync("./input.txt", "utf-8").trim().split("\n")

let count = 0

const outsideRangeCheck = (grid, x, y) => {
    if (x < 0 || x >= grid[0].length || y < 0 || y >= grid.length) return '-';
    return grid[y][x];
}


for (let y = 0; y < grid.length; y++) {
    for (let x = 0; x < grid[y].length; x++) {


        if (grid[y][x] !== 'A') continue;
            
        let word1 = '';
        let word2 = '';

        let NE = outsideRangeCheck(grid, x + 1, y - 1)
        let SE = outsideRangeCheck(grid, x + 1, y + 1);
        let SW = outsideRangeCheck(grid, x - 1, y + 1);
        let NW = outsideRangeCheck(grid, x - 1, y - 1);

        word1 = NE + grid[y][x] + SW
        word2 = SE + grid[y][x] + NW

        if((word1 === 'MAS' || word1 === 'SAM') && (word2 === 'MAS' || word2 === 'SAM')) count++;


    }
}

console.log('part 2: ', count)