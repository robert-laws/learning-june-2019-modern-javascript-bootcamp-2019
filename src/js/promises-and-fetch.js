if(document.querySelector("#promises-and-fetch-page")) {
  promisesAndFetchResultOne = document.querySelector("#promises-and-fetch-result-one");

  const getSpacePeople = () => 
    fetch('http://api.open-notify.org/astros.json')
      .then(res => res.json());

  const spaceNames = () =>
    getSpacePeople()
      .then(json => json.people)
      .then(people => people.map(p => p.name))
      .then(names => names.join(", "));

  promisesAndFetchResultOne.innerHTML =  `<p>${spaceNames().resolve(value)}</p>`;
  
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


}