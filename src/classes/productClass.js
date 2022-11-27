class productClass {
  pId;
  pName;
  price;
  country;
  type;
  pClass;
  amount;

  constructor(pId, pName, price, country, type, pClass, amount = 1) {
    this.pId = pId;
    this.pName = pName;
    this.price = price;
    this.country = country;
    this.type = type;
    this.pClass = pClass;
    this.amount = amount;
  }
}

export default productClass;
