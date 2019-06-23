if(document.querySelector("#default-function-arguments-page")) {
  let defaultFunctionArgumentsOne = document.querySelector("#default-function-arguments-result-one");
  let defaultFunctionArgumentsTwo = document.querySelector("#default-function-arguments-result-two");


  function makeAjaxRequest(url, method = 'GET') {
    // default value for method is 'GET' if user did not assign
    return method;
  }

  function User(id) {
    this.id = id;
  }

  function generateId() {
    return Math.floor(Math.random() * 999);
  }

  function createAdminUser(user = new User(generateId())) {
    user.admin = true;

    return user;
  }

  defaultFunctionArgumentsOne.innerHTML = `<p>${makeAjaxRequest()}</p>`;

  defaultFunctionArgumentsTwo.innerHTML = `<p>${JSON.stringify(createAdminUser())}</p>`;

}