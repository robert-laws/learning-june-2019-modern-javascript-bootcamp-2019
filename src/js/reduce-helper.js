if(document.querySelector("#array-helpers-page")) {
  let reduceOne = document.querySelector("#reduce-result-one");
  let reduceTwo = document.querySelector("#reduce-result-two");

  const values = [2, 4, 9, 15];
  let sum = 0;

  let valuesResult = values.reduce(function(sum, number) {
    return sum + number;
  }, 0);

  reduceOne.innerHTML = `<p>${valuesResult}</p>`

  const primaryColors = [
    { color: "red" },
    { color: "yellow" },
    { color: "blue" }
  ]

  let colorArr = primaryColors.reduce(function(previous, primaryColor) {
    previous.push(primaryColor.color);

    return previous;
  }, []);

  reduceTwo.innerHTML = `<p>${JSON.stringify(colorArr)}</p>`;


  function balancedParens(string) {
    return !string.split("").reduce(function(previous, char) {
      if (previous < 0) { return previous; }
      if (char === "(") { return ++previous; }
      if (char === ")") { return --previous; }
      return previous;
    }, 0);
  }

  // console.log("-----balanced?-----");
  // console.log(balancedParens("()"));

  var myNumbers = [1, 1, 2, 3, 4, 4];

  function unique(array) {
    let newArray = array.reduce(function(accumulator, currentValue) {
      if(accumulator.find(number => number === currentValue)) {
        return accumulator;
      }
      accumulator.push(currentValue);
      return accumulator
    }, []);
    return newArray;
  }

  let vals = unique(myNumbers);

  // console.log(vals);
}