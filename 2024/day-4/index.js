const fs = require("fs");
const input = fs.readFileSync("./input.txt", "utf-8");

const matrix = input.split("\r\n");
let count = 0;

for (let lineIndex = 0;  lineIndex < matrix.length; lineIndex++) {
    const line = matrix[lineIndex];
    for (let charIndex = 0; charIndex < matrix[lineIndex].length; charIndex++) {
        const char = matrix[lineIndex][charIndex];
        if (char !== "X") {
            continue;
        }
        // HORIZONTAL RIGHT
        let word = line.substring(charIndex, charIndex + 4);
        if (word === "XMAS") {
            count++;
        }

        // HORIZONTAL LEFT
        word = line.substring(charIndex - 3, charIndex + 1);
        console.log(word);
        if (word === "SAMX") {
            count++;
        }

        // VERTICAL TOP
        word = "";
        for (let i = 1; i < 4; i++) {
            const newLineIndex = lineIndex - i;
            // if (newLineIndex < 0) break;
            word += matrix[newLineIndex]?.[charIndex];
        }
        if (word === "MAS") {
            count++;
        }

        // VERTICAL BOTTOM
        word = "";
        for (let i = 1; i < 4; i++) {
            const newLineIndex = lineIndex + i;
            // if (newLineIndex > matrix.length - 1) break;
            word += matrix[newLineIndex]?.[charIndex];
        }
        if (word === "MAS") {
            count++;
        }

        // DIAGONAL TOP LEFT
        word = "";
        for (let i = 1; i < 4; i++) {
            const newCharIndex = charIndex - i;
            const newLineIndex = lineIndex - i;
            // if (newCharIndex < 0 || newLineIndex < 0) {
            //     break;
            // }
            word += matrix[newLineIndex]?.[newCharIndex];
        }
        if (word === "MAS") {
            count++;
        }

        // DIAGONAL TOP RIGHT
        word = "";
        for (let i = 1; i < 4; i++) {
            const newCharIndex = charIndex + i;
            const newLineIndex = lineIndex - i;
            // if (newCharIndex > line.length - 1 || newLineIndex < 0) {
            //     break;
            // }
            word += matrix[newLineIndex]?.[newCharIndex];
        }
        if (word === "MAS") {
            count++;
        }

        // DIAGONAL BOTTOM LEFT
        word = "";
        for (let i = 1; i < 4; i++) {
            const newCharIndex = charIndex - i;
            const newLineIndex = lineIndex + i;
            // if (newCharIndex < 0 || newLineIndex > matrix.length - 1) {
            //     break;
            // }
            word += matrix[newLineIndex]?.[newCharIndex];
        }
        if (word === "MAS") {
            count++;
        }

        // DIAGONAL BOTTOM RIGHT
        word = "";
        for (let i = 1; i < 4; i++) {
            const newCharIndex = charIndex + i;
            const newLineIndex = lineIndex + i;
            // if (newCharIndex > line.length - 1 || newLineIndex > matrix.length - 1) {
            //     break;
            // }
            word += matrix[newLineIndex]?.[newCharIndex];
        }
        if (word === "MAS") {
            count++;
        }

    }
}

console.log(count);