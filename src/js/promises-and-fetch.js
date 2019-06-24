if(document.querySelector("#promises-and-fetch-page")) {
  promisesAndFetchResultOne = document.querySelector("#promises-and-fetch-result-one");

  // const getSpacePeople = () => 
  //   fetch('http://api.open-notify.org/astros.json')
  //     .then(res => res.json());

  // const spaceNames = () =>
  //   getSpacePeople()
  //     .then(json => json.people)
  //     .then(people => people.map(p => p.name))
  //     .then(names => names.join(", "));

  // promisesAndFetchResultOne.innerHTML =  `<p>${spaceNames().resolve(value)}</p>`;
  
  // const spacePeople = () => {
  //   return new Promise((resolves, rejects) => {
  //     const api = 'http://api.open-notify.org/astros.json';
  //     const request = new XMLHttpRequest();
  //     request.open("GET", api);
  //     request.onload = () => {
  //       if(request.status === 200) {
  //         resolves(JSON.parse(request.response));
  //       } else {
  //         rejects(Error(request.statusText));
  //       }
  //     }

  //     request.onerror = err => rejects(err);
  //     request.send();
  //   })
  // }

  // spacePeople().then(
  //   spaceData => console.log(spaceData),
  //   err => console.err(
  //     new Error('Cannot load space people')
  //   )
  // );

  // let promise = new Promise((resolve, reject) => {
  //   setTimeout(() => {
  //     resolve();
  //   }, 3000);
  // });

  // promise.then(() => console.log('promise finished...'))
  //   .then(() => console.log("also run..."))
  //   .catch(() => console.log("error..."))

  const url = "http://api.open-notify.org/astros.json";

  fetch(url)
    .then(response => response.json())
    .then(data => writeData(data))
    .catch(error => console.log(error))

  function writeData(data) {
    data.people.forEach(function(item) {
      promisesAndFetchResultOne.innerHTML += `<p>${item.name}</p>`;
    })
  }
}