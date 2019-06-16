let findOne = document.querySelector("#find-result-one");
let findTwo = document.querySelector("#find-result-two");

const findUsers = [
  { name: 'bob' },
  { name: 'kal' },
  { name: 'hal' },
  { name: 'jim' },
  { name: 'mel' }
]

let findMatch = findUsers.find(function(user) {
  return user.name === "kal"
});

findOne.innerHTML = `<p>${JSON.stringify(findMatch)}</p>`;

function Car(model) {
  this.model = model;
}

const findCars = [
  new Car('Chevy'),
  new Car('Camero'),
  new Car('Focus')
]

let carMatch = findCars.find(function(car) {
  return car.model === "Focus";
})

console.log(findCars.find(car => car.model === 'Chevy'));

const findPosts = [
  { id: 1, title: 'My Post' },
  { id: 2, title: 'New Items' },
  { id: 3, title: 'Old Stuff' }
]

const findComment = { postId: 2, content: 'Nice post' };

function postForComment(posts, comment) {
  return posts.find(function(post) {
    return post.id === comment.postId;
  })
}

findTwo.innerHTML = `<p>${JSON.stringify(postForComment(findPosts, findComment))}</p>`;