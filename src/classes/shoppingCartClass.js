class shoppingCartClass {
  cartId;
  uName;
  shoppingList = new Map();

  constructor(cartId, uName) {
    this.cartId = cartId;
    this.uName = uName;
  }
  mapToObj() {
    return;
  }

  toObj() {
    return {
      id: this.cartId,
      uname: this.uName,
      list: this.shoppingList,
    };
  }

  addItem(item) {
    if (this.shoppingList.has(item.pId)) {
      let selectedItem = this.shoppingList.get(item.pId);
      selectedItem.amount += 1;
      this.shoppingList.set(selectedItem.pId, selectedItem);
    } else {
      this.shoppingList.set(item.pId, item);
    }
  }

  substractItem(item) {
    if (this.shoppingList.has(item.pId)) {
      let selectedItem = this.shoppingList.get(item.pId);
      selectedItem.amount -= 1;
      if (selectedItem.amount == 0) {
        this.shoppingList.delete(item.pId);
      } else {
        this.shoppingList.set(selectedItem.pId, selectedItem);
      }
    }
  }

  deleteItem(item) {
    this.shoppingList.delete(item.pId);
  }

  returnSize() {
    return this.shoppingList.size;
  }

  calcTotal() {
    let total = 0;
    this.shoppingList.forEach((val) => {
      total += val.price * val.amount;
    });
    return total;
  }
}
export default shoppingCartClass;
