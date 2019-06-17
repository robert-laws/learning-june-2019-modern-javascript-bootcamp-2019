let everyOne = document.querySelector("#every-result-one");

const computers = [
  { name: "Apple", ram: 24 },
  { name: "Compaq", ram: 4 },
  { name: "Dell", ram: 32 },
  { name: "Acer", ram: 16 }
]

const canRun = computers.every(function(computer) {
  return computer.ram > 16;
})

everyOne.innerHTML = `<p>${canRun}</p>`;

var newNames = ["bobby", "hal", "melvin", "calvin", "vin"];

let newNamesEvery = newNames.every(function(name) {
  return name.length > 4;
});

let newNamesSome = newNames.some(function(name) {
  return name.length > 4;
});

console.log(newNamesEvery);
console.log(newNamesSome);

class Field {
  constructor(value) {
    this.value = value;
  }

  validate() {
    return this.value.length > 0;
  }
}

let username = new Field("bobcobb");
let password = new Field("my_password");

let fields = [username, password]

let isValid = fields.every(function(field) {
  return field.validate();
});

console.log(isValid);

let nowValid = fields.every((field) => field.value.length > 0);

console.log(nowValid);