// - Create an array with the following names: Mason, Marcora, Rico, Neves, Ivanov
// - Ask user to input last name / use prompt()
// - Add last name to the array
// - Sort the names alphabetically
// - Output sorted array
// - Find the position of your name in the sorted array
// - Output the position of your name
// - Uppercase all names
// - Output uppercased names

const lastNames = ["Mason", "Marcora", "Rico", "Neves", "Ivanov"];

// User input
const newLastName = "Zaboraite"; //prompt("What is your last name?");
console.log(newLastName);

// Add new name to the end of an array
const addLastNewName = lastNames.push(newLastName);
console.log(lastNames);

// Sort names alphabetically
const sortedLastNames = lastNames.sort();
console.log(sortedLastNames);

// Find the position of my name
// const namePosition = names.indexOf("Zaboraite");
// console.log(namePosition);

let nameLastPosition = null;

for (let i = 0; i < lastNames.length; i++) {
  if (lastNames[i] === "Zaboraite") {
    nameLastPosition = i;
  }
}

console.log(nameLastPosition);

// Uppercase all the names
let uppercaseLastName = null;

for (let i = 0; i < lastNames.length; i++) {
  uppercaseLastName = lastNames[i].toUpperCase();
  console.log(uppercaseLastName);
}
