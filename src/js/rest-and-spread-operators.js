if(document.querySelector("#rest-and-spread-operators-page")) {
  let restAndSpreadOperatorsResultOne = document.querySelector("#rest-and-spread-operators-result-one");
  let restAndSpreadOperatorsResultTwo = document.querySelector("#rest-and-spread-operators-result-two");
  let restAndSpreadOperatorsResultThree = document.querySelector("#rest-and-spread-operators-result-three");
  let restAndSpreadOperatorsResultFour = document.querySelector("#rest-and-spread-operators-result-four");

  function addNumbers(...numbers) {
    return numbers.reduce((sum, number) => {
      return sum + number;
    }, 0);
  }

  restAndSpreadOperatorsResultOne.innerHTML = `<p>${addNumbers(2, 4, 6, 8, 10, 20)}</p>`;

  const defaultColors = ['red', 'green'];
  const userFavoriteColors = ['orange', 'yellow'];

  restAndSpreadOperatorsResultTwo.innerHTML = `<p>${JSON.stringify([...defaultColors, ...userFavoriteColors])}</p>`;

  const fallColors = ['fire red', 'fall orange'];
  
  restAndSpreadOperatorsResultThree.innerHTML = `<p>${JSON.stringify(['blue', ...fallColors, ...defaultColors, ...userFavoriteColors])}</p>`;

  function validateShoppingList(...items) {
    if(items.indexOf('milk') < 0) {
      return ['milk', ...items];
    }

    return items;
  }

  restAndSpreadOperatorsResultFour.innerHTML = `<p>${JSON.stringify(validateShoppingList('oranges', 'bread', 'eggs'))}</p>`;

  const MathLibrary = {
    calculateProduct(...rest) {
      return this.multiply(...rest);
    },
    multiply(a, b) {
      return a * b;
    }
  }
}