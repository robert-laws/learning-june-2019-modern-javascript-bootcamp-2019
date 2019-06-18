if(document.querySelector("#template-strings-page")) {
  let templateStringOne = document.querySelector("#template-strings-result-one");
  let templateStringTwo = document.querySelector("#template-strings-result-two");

  const name = "Bob Cobb";

  let greeting = `Hello, welcome ${name}!`;

  templateStringOne.innerHTML = `<p>${greeting}</p>`;

  const linkId = "main-link";
  const linkClass = "content-link";
  const linkHref = "https://www.google.com";
  // this string can be confusing
  let link = `&lt;a id='${linkId}' href='${linkHref}' class='${linkClass}'&gt;Google&lt;/a&gt;`;

  templateStringTwo.innerHTML = `<p>${link}</p>`;
}