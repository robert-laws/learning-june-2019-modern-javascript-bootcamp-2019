if(document.querySelector("#arrow-functions-page")) {
  let arrowFunctionsOne = document.querySelector("#arrow-functions-result-one");
  let arrowFunctionsTwo = document.querySelector("#arrow-functions-result-two");
  let arrowFunctionsThree = document.querySelector("#arrow-functions-result-three");
  let arrowFunctionsFour = document.querySelector("#arrow-functions-result-four");
  let arrowFunctionsFive = document.querySelector("#arrow-functions-result-five");
  let arrowFunctionsSix = document.querySelector("#arrow-functions-result-six");

  const add = (a, b) => {
    return a + b;
  }

  arrowFunctionsOne.innerHTML = `<p>${add(5, 7)}</p>`;

  const subtract = (a, b) => a - b;

  arrowFunctionsTwo.innerHTML = `<p>${subtract(19, 8)}</p>`;

  const double = number => 2 * number;

  arrowFunctionsThree.innerHTML = `<p>${double(8)}</p>`;

  const sayHello = () => "hello!!!";

  arrowFunctionsFive.innerHTML = `<p>${sayHello()}</p>`;

  const fewNumbers = [2, 5, 9];
  // fewNumbers.map(function(number) {
  //   return 2 * number;
  // });

  arrowFunctionsFour.innerHTML = `<p>${JSON.stringify(fewNumbers.map(number => 2 * number))}</p>`;

  const team = {
    members: ["Bob", "William"],
    teamName: "Super Group",
    teamSummary: function() {
      return this.members.map(member => {
        return `${member} is on team ${this.teamName}`;
      });
    }
  }

  arrowFunctionsSix.innerHTML = `<p>${JSON.stringify(team.teamSummary())}</p>`;
}