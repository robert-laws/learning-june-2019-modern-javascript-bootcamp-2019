// forEach array helper methods
let names = ["bob", "hal", "mel", "ned", "abe", "jim", "lou", "kal", "vin", "don", "sal"];

let resOne = document.querySelector("#result-one");

names.forEach(function(name) {
  resOne.innerHTML += `<p>${name}</p>`;
});

let numbers = [1, 2, 3, 4, 5, 6];
let sum = 0;

function add(number) {
  sum += number;
}

numbers.forEach(add);

let resTwo = document.querySelector("#result-two");
resTwo.innerHTML = `<p>${sum}</p>`;