if(document.querySelector("#destructing-page")) {
  let destructingResultOne = document.querySelector("#destructing-result-one");
  let destructingResultTwo = document.querySelector("#destructing-result-two");
  let destructingResultThree = document.querySelector("#destructing-result-three");
  let destructingResultFour = document.querySelector("#destructing-result-four");
  let destructingResultFive = document.querySelector("#destructing-result-five");

  const expense = {
    type: "business",
    amount: "$45 USD"
  }

  // declare a new variable named type, amount and set equal to expense.type, expense.amount
  const { type, amount } = expense;
  destructingResultOne.innerHTML = `<p>${type}<br>${amount}</p>`;


  const savedFile = {
    extension: 'jpg',
    name: 'repost',
    size: 14040
  };

  function fileSummary({name, extension, size}) {
    return `The file ${name}.${extension} is of size ${size}.`;
  }

  destructingResultTwo.innerHTML = `<p>${fileSummary(savedFile)}</p>`;

  const companies = [
    'Google',
    'Facebook',
    'Uber'
  ]

  const [name, name2, name3, name4] = companies;
  // const firstCompany = companies[0]; // improved with destructing
  const [ name1, ...names ] = companies;

  destructingResultThree.innerHTML = `<p>${name}<br>${names}</p>`;

  const people = [
    { firstName: "Bob Cobb", age: 34 },
    { firstName: "Hal Hope", age: 31 },
    { firstName: "Jim Jupe", age: 28 }
  ]
  
  const [{firstName}] = people;
  console.log(firstName)
  
  const Google = {
    locations: ['Sunnyvale', 'New York', 'London']
  }

  const { locations: [ firstLocation ] } = Google;
  console.log(firstLocation);

  destructingResultFour.innerHTML = `<p>${firstLocation}<br>${firstName}</p>`;

  function signup({ username, email, dateOfBirth, city, password }) {
    // create new user
    return { username, email, dateOfBirth, city, password };
  }

  const user = {
    username: "Kal Kool",
    password: "hello",
    email: "kalkool@mail.net",
    dateOfBirth: "1/2/1989",
    city: "Chicago"
  }

  signup(user);

  destructingResultFive.innerHTML = `<p>${JSON.stringify(signup(user))}</p>`;
}