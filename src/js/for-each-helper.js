if(document.querySelector("#array-helpers-page")) {
  let names = ["bob", "hal", "mel", "ned", "abe", "jim", "lou", "kal", "vin", "don", "sal"];

  let resOne = document.querySelector("#for-each-result-one");

  names.forEach(function(name) {
    resOne.innerHTML += `<p>${name}</p>`;
  });

  let numbers = [1, 2, 3, 4, 5, 6];
  let sum = 0;

  function add(number) {
    sum += number;
  }

  numbers.forEach(add);

  let resTwo = document.querySelector("#for-each-result-two");
  resTwo.innerHTML = `<p>${sum}</p>`;

  // For...Of
  const someNumber = [4, 5, 6, 7];

  let total = 0;
  for (let number of someNumber) {
    total += number;
  }

  let forOfResultOne = document.querySelector("#for-of-result-one");
  forOfResultOne.innerHTML = `<p>${total}</p>`;
}