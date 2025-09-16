const fs = require("fs");
const data = fs.readFileSync("day-1-input.txt", "utf-8");

const list1 = [];
const list2 = [];

const rows = data.split("\r\n");
for (let i = 0; i < rows.length; i++) {
    const row = rows[i];
    const [l1, l2] = row.split("   ");
    list1.push(Number(l1));
    list2.push(Number(l2));
}

list1.sort((a,b) => a-b)
list2.sort((a,b) => a-b);

let difference = 0;
let similarityScore = 0;
const countMap = {};

for (let i = 0; i < list1.length; i++) {
    const l = list1[i];
    const r = list2[i];
    difference += Math.abs(l - r);
    if (!countMap[r]) {
        countMap[r] = 1;
    } else {
        countMap[r]++;   
    }
}

for (let i = 0; i < list1.length; i++) {
    const l = list1[i];
    similarityScore += l * (countMap[l] || 0);
}

console.log(similarityScore);
