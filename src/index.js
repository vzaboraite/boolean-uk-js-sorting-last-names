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
console.log(`An array at the start: ${lastNames}`);
// User input
const newLastName = prompt("What is your last name?");
// console.log(newLastName);

// Add new name to the end of an array
const lastNamesAdded = lastNames.push(newLastName);
console.log(lastNamesAdded);

// Sort names alphabetically
const sortedLastNames = lastNames.sort();

console.log(`Sorted array of last names: ${sortedLastNames}`);

// Find the position of input last name in sorted array
let lastNamePosition = null;

for (let i = 0; i < sortedLastNames.length; i++) {
  if (sortedLastNames[i] === newLastName) {
    lastNamePosition = i;
  }
}
// Output the position of an element
console.log(
  `The position of ${newLastName} in the array is at index ${lastNamePosition}`
);

// Uppercase all the names
const uppercasedLastNames = [];

for (let i = 0; i < lastNames.length; i++) {
  uppercasedLastNames.push(lastNames[i].toUpperCase());
}
console.log(`An array with uppercased last names: ${uppercasedLastNames}`);

// CHALLENGE
// - Group each sorted name with its upper-cased one in a sub-array,
// - Put sub-arrays inside another array to group it all together.
// - Output the result into the console.
const pairedLastNames = [];

for (let i = 0; i < sortedLastNames.length; i++) {
  const firstValue = sortedLastNames[i];
  const secondValue = uppercasedLastNames[i];
  const subArray = [firstValue, secondValue];
  pairedLastNames.push(subArray);
}

console.log(`Arrays within array: ${pairedLastNames}`);
