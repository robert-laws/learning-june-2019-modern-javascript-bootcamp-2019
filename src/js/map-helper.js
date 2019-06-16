let mapOne = document.querySelector("#map-result-one");
let mapTwo = document.querySelector("#map-result-two");

const mapNumbers = [2, 4, 6, 8, 10];

let doubleNumbers = mapNumbers.map(function(number) {
  return number * 2;
});

mapOne.innerHTML = `<p>[${doubleNumbers}]</p>`;

const cars = [
  { model: "Chevy", price: "CHEAP" },
  { model: "Camero", price: "expensive" }
];

let prices = cars.map(function(car) {
  return car.price;
});

mapTwo.innerHTML = `<p>[${prices}]</p>`;