let arr1 = ["good", "fantastic", "ok", "decent", "bad", "terrible", "sad"];
let arr2 = [
  "kung-fu fighting",
  "walking along the shoreline",
  "flying in an airplane",
  "driving a car",
  "riding a camel",
  "learning to knit",
  "scuba diving",
  "walking along an abandoned railway bridge at dusk",
  "drinking orange juice",
];
const randNum1 = Math.floor(Math.random() * 7); //Random number for the seven options of arr1
const randNum2 = Math.floor(Math.random() * 9); //Random number for the nine options of arr2
let word1 = arr1[randNum1];
let word2 = arr2[randNum2];

console.log(`Today is a ${word1} day for ${word2}.`); //Display it together with both variables
