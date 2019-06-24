if(document.querySelector("#generators-page")) {
  let generatorsResultOne = document.querySelector("#generators-result-one");
  let generatorsResultTwo = document.querySelector("#generators-result-two");
  let generatorsResultThree = document.querySelector("#generators-result-three");
  let generatorsResultFour = document.querySelector("#generators-result-four");
  let generatorsResultFive = document.querySelector("#generators-result-five");

  function* interestingColors() {
    yield 'red';
    yield 'blue';
    yield 'green';
  }

  const myInterestingColors = [];
  for (let color of interestingColors()) {
    myInterestingColors.push(color);
  }

  generatorsResultOne.innerHTML = `<p>${JSON.stringify(myInterestingColors)}</p>`;

  // practical use
  const testingTeam = {
    lead: 'Kal',
    tester: 'Melvin',
    [Symbol.iterator]: function* () {
      yield this.lead;
      yield this.tester;
    }
  }

  const myTeam = {
    testingTeam,
    size: 3,
    department: 'Library',
    lead: 'Mary',
    manager: 'Tom',
    assistant: 'Billy',
    [Symbol.iterator]: function* () {
      yield this.lead;
      yield this.manager;
      yield this.assistant;
      yield* this.testingTeam;
    }
  };

  const teamNames = [];

  for (let name of myTeam) {
    teamNames.push(name);
  }

  generatorsResultTwo.innerHTML = `<p>["Mary","Tom","Billy"]</p>`;
  generatorsResultThree.innerHTML = `<p>${JSON.stringify(teamNames)}</p>`;
  generatorsResultFour.innerHTML = `<p>${JSON.stringify(teamNames)}</p>`;

  class Comment {
    constructor(content, children) {
      this.content = content;
      this.children = children;
    }

    *[Symbol.iterator]() {
      yield this.content;
      for (let child of this.children) {
        yield* child;
      }
    }
  }

  const children = [
    new Comment('good comment', []),
    new Comment('bad comment', []),
    new Comment('meh', [])
  ]

  const tree = new Comment('Great Post!', children);
  
  console.log(tree);

  const treeValues = [];
  for (let value of tree) {
    treeValues.push(value);
  }

  generatorsResultFive.innerHTML = `<p>${JSON.stringify(treeValues)}</p>`;
}