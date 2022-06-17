// CommonJS, every file is module (by default)
// Modules - encapsulated code (only share minimum)

const secret = "SUPER SECRET";
const john = "John";
const peter = "Peter";

const sayHi = (name) => {
  console.log(`Hello there ${name}`);
};

sayHi("Connor");
sayHi(john);
sayHi(peter);
