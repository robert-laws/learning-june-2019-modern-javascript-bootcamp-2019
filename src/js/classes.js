if (document.querySelector("#classes-result-one")) {
  let classesResultOne = document.querySelector("#classes-result-one");
  let classesResultTwo = document.querySelector("#classes-result-two");


  class Car {
    constructor(options) {
      this.carName = options.carName;
    }

    drive() {
      return "vroom!";
    }
  }

  const car = new Car({carName: "Toyota"});

  classesResultOne.innerHTML = `<p>${car.drive()}</p>`;

  class Toyota extends Car {
    constructor(options) {
      super(options); // Car.constructor();
      this.color = options.color;
    }

    honk() {
      return "beep";
    }
  }

  const toyota = new Toyota({carName: "Camry", color: "red"});
  

  classesResultTwo.innerHTML = `<p>${toyota.carName}<br>${toyota.honk()}</p>`;
}
