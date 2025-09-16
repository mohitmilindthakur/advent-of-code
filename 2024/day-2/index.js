const fs = require("fs");
const raw = fs.readFileSync("input.txt", "utf-8");

const data = raw.split("\r\n");
const reports = [];
const invalidReports = [];
let validCount = 0;
for (let i = 0; i < data.length; i++) {
    let levels = data[i].split(" ");
    levels = levels.map(item => Number(item));
    if (isReportValid(levels)) {
        validCount++;
    } else {
        invalidReports.push(levels);
    }
    reports.push(levels);
}


function isReportValid(report) {
    const initialDiff = report[1] - report[0];
    if (!isDiffValid(Math.abs(initialDiff))) {
        return false;
    }
    const isInitialPositive = initialDiff > 0;
    for (let i = 2; i < report.length; i++) {
        const diff = report[i] - report[i - 1];
        const isPositive = diff > 0;
        if (!isDiffValid(Math.abs(diff))) {
            return false;
        }
        if (isInitialPositive !== isPositive) {
            return false;
        }
    }
    return true;
}

function isDiffValid(diff) {
    if (diff > 0 && diff < 4) {
        return true;
    }
    return false;
}

function checkInvalidReports() {
    for (let i = 0; i < invalidReports.length; i++) {
        const report = invalidReports[i];
        // console.log(report);
        for (let level = 0; level < report.length; level++) {
            const newReport = [...report];
            newReport.splice(level, 1);
            // console.log(newReport);
            if (isReportValid(newReport)) {
                console.log("original -> ", report)
                console.log("valid -> ", newReport);
                validCount++;
                break;
            }
        }
    }
}

console.log(reports.length)
console.log(validCount);
checkInvalidReports();
console.log(validCount);

