const fs = require("fs");
const input = fs.readFileSync("./input.txt", "utf-8");

const matrix = input.split("\r\n");
let count = 0;

for (let lineIndex = 0;  lineIndex < matrix.length; lineIndex++) {
    const line = matrix[lineIndex];
    for (let charIndex = 0; charIndex < matrix[lineIndex].length; charIndex++) {
        const char = matrix[lineIndex][charIndex];
        if (char !== "A") {
            continue;
        }
        const dtl = matrix[lineIndex - 1]?.[charIndex - 1];
        const dtr = matrix[lineIndex - 1]?.[charIndex + 1];
        const dbl = matrix[lineIndex + 1]?.[charIndex - 1];
        const dbr = matrix[lineIndex + 1]?.[charIndex + 1];

        const diag1 = `${dtl}A${dbr}`;
        const diag2 = `${dtr}A${dbl}`;

        if ((diag1 === "MAS" || diag1 === "SAM") && (diag2 === "MAS" || diag2 === "SAM")) {
            count++;
        }
    }
}

console.log(count);
