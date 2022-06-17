// fs is a built in module

const { readFileSync, writeFileSync } = require("fs");
console.log("start");

// reads the content from the file
const first = readFileSync("./content/first.txt", "utf-8");
const second = readFileSync("./content/second.txt", "utf-8");

console.log(first, second);

// will create a file if it does not exist, if it exist then it will overwrite the file
// flag is optional that I think copies the same values and displays them again
writeFileSync(
  "./content/result-sync.txt",
  `Here is the result : ${first}, ${second}`,
  { flag: "a" }
);
console.log("done with this task");
console.log("starting next one");
