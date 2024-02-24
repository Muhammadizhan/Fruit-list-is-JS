// Array containing the names of different fruits
const fruits = ["Apple", "Banana", "Orange", "Grapes", "Strawberry"];

// Accessing and displaying fruits in an unordered list
const fruitsList = document.getElementById("fruitsList");

fruits.forEach(fruit => {
  const listItem = document.createElement("li");
  listItem.textContent = fruit;
  fruitsList.appendChild(listItem);
});
