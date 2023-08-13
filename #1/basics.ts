// TypeScript Types

let userName: string = "Victer";
let hasLoggedIn: boolean = true;
let myNumber: number = 69;
let myRegEx: RegExp = /foo/;

// Arrays

const names: string[] = userName.split(" ");
const myValues: Array<number> = [1, 2, 3, 3.2];

// Typing Objects

const myPerson: {
  first: string;
  last: string;
  cool: boolean;
} = {
  first: "Victer",
  last: "Phiathep",
  cool: true,
};

// Objects as Maps in TypeScript
const ids: Record<number, string> = {
  10: "a",
  20: "b",
};

// Conditionals and Loops with TypeScript
if (ids[30] === "D") {
}

for (let i: number = 0; i < 10; i++) {
  console.log(i);
}

[1, 2, 3].forEach((v: number) => console.log(v));
const out: number[] = [4, 5, 6].map((v: number) => v * 20);

// TypeScript will detect errors when there is type mismatching
// Ex: hasLoggedIn += "Phiathep"
