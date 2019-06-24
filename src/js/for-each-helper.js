if(document.querySelector("#array-helpers-page")) {
  let names = ["bobby", "hal", "melvin", "jimmy", "lou", "kalvin", "vin", "donald", "sal"];

  allNames = [];

  names.forEach(function(name) {
    name.length > 3 ? allNames.push(name) : ""
  })
  let resOne = document.querySelector("#for-each-result-one");
  resOne.innerHTML += `<p>${JSON.stringify(allNames)}</p>`;
  
  let numbers = [1, 2, 3, 4, 5, 6];
  let startingSum = 0;

  numbers.forEach(number => startingSum += number);

  // function add(number) {
  //   startingSum += number;
  // }

  // numbers.forEach(add);

  let resTwo = document.querySelector("#for-each-result-two");
  resTwo.innerHTML = `<p>${startingSum}</p>`;

  // For...Of
  const someNumber = [4, 5, 6, 7];

  let total = 0;
  for (let number of someNumber) {
    total += number;
  }

  let forOfResultOne = document.querySelector("#for-of-result-one");
  forOfResultOne.innerHTML = `<p>${total}</p>`;
}