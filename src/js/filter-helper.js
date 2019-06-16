let filterOne = document.querySelector("#filter-result-one");
let filterTwo = document.querySelector("#filter-result-two");
let filterThree = document.querySelector("#filter-result-three");

const products = [
  { name: "lemon", type: "fruit" },
  { name: "orange", type: "fruit" },
  { name: "celery", type: "vegetable" },
  { name: "apple", type: "fruit" },
  { name: "cucumber", type: "vegetable" }
]

let filteredProducts = products.filter(function(product) {
  return product.type === "fruit";
});

let pNames = "";
filteredProducts.forEach((p, index) => { pNames += `{name: '${p.name}', type: '${p.type}'}${filteredProducts.length == index + 1 ? '' : ', '}` })

filterOne.innerHTML = `<p>[${pNames}]</p>`;

const newProducts = [
  { name: "lemon", type: "fruit", quantity: 10, price: 5 },
  { name: "orange", type: "fruit", quantity: 4, price: 12 },
  { name: "celery", type: "vegetable", quantity: 15, price: 12 },
  { name: "apple", type: "fruit", quantity: 5, price: 6 },
  { name: "cucumber", type: "vegetable", quantity: 12, price: 19 }
]

let filteredNewProducts = newProducts.filter(function(product) {
  return (product.type === 'vegetable' && product.quantity > 5 && product.price < 15)
});

filterTwo.innerHTML = `<p>${JSON.stringify(filteredNewProducts)}</p>`;

const post = { id: 4, title: 'My Post' }
const comments = [
  { postId: 4, content: 'good post'},
  { postId: 3, content: 'interesting topic'},
  { postId: 4, content: 'did not like'}
]

function commentsForPost(post, comments) {
  return comments.filter(function(comment) {
    return comment.postId === post.id;
  })
}

filterThree.innerHTML = `<p>${JSON.stringify(commentsForPost(post, comments))}</p>`;

let nums = [10, 20, 30]

function reject(array, iteratorFunction) {
  return array.filter(iteratorFunction)
}

var iteratorFunction = function(item) {
    return item < 15;
}

let lessThan = reject(nums, iteratorFunction);
console.log(lessThan)