const fs = require("fs");
const raw = fs.readFileSync("input.txt", "utf-8");

const regex = /(do\(\))|(don't\(\))|mul\((\d+),(\d+)\)/g;
const all = raw.matchAll(regex);

let sum = 0;
let enabled = true;
for (const item of all) {
    const [_, hasEnabled, hasDisabled, num1, num2] = item;
    if (hasEnabled) {
        enabled = true;
    } else if (hasDisabled) {
        enabled = false;
    } else {
        if (enabled) {
            sum += Number(num1) * Number(num2);
        }
    }
}

console.log(sum);
