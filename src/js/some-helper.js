if(document.querySelector("#array-helpers-page")) {
  let someOne = document.querySelector("#some-result-one");
  
  const computers2 = [
    { name: "Apple", ram: 24 },
    { name: "Compaq", ram: 4 },
    { name: "Dell", ram: 32 },
    { name: "Acer", ram: 16 }
  ]
  
  let someRun = computers2.some(function(computer) {
    return computer.ram > 16;
  });
  
  someOne.innerHTML = `<p>${someRun}</p>`;
}