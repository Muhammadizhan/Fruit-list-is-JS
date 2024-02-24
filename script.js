// Array containing the names of different fruits
const fruits = ["Apple", "Banana", "Orange", "Grapes", "Strawberry"];

// Accessing and displaying fruits in an unordered list
const fruitsList = document.getElementById("fruitsList");

fruits.forEach(fruit => {
  const listItem = document.createElement("li");
  listItem.textContent = fruit;
  fruitsList.appendChild(listItem);
});

// Array containing numerical values
let numbers = [1, 2, 3, 4, 5];

// Accessing and displaying numbers in an unordered list
const numbersList = document.getElementById("numbersList");

numbers.forEach(number => {
  const listItem = document.createElement("li");
  listItem.textContent = number;
  numbersList.appendChild(listItem);
});

// Function to handle click event on the numbers list
numbersList.addEventListener("click", function(event) {
  const target = event.target;
  
  // If the clicked element is a list item
  if (target.tagName === 'LI') {
    const index = Array.from(numbersList.children).indexOf(target);
    alert(`Index of clicked element: ${index}`);
  }
});
