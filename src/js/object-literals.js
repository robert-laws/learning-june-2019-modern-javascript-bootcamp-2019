if(document.querySelector("#object-literals-page")) {
  let objectLiteralsOne = document.querySelector("#object-literals-result-one");

  const inventory = [
    { title: "Book for Reading", price: 12 },
    { title: "New Things", price: 17 }
  ]
  

  function createBookShop(inventory) {
    return {
      inventory,
      inventoryValue() {
        return this.inventory.reduce((total, book) => total + book.price, 0);
      },
      priceForTitle(title) {
        return this.inventory.find(book => book.title === title).price;
      }
    }
  }


  const bookShop = createBookShop(inventory);

  objectLiteralsOne.innerHTML = `<p>total inventory: ${bookShop.inventoryValue()}<br>price for 'New Things': ${bookShop.priceForTitle("New Things")}</p>`;
}