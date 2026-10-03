class Product {
  sku: string;
  name: string;
  price: number;

  constructor(sku: string, name: string, price: number) {
    this.sku = sku;
    this.name = name;
    this.price = price;
  }

  displayDetails(): string {
    return `Sku number is ${this.sku}, the item is ${this.name} with a price of ${this.price}`;
  }

  getPriceWithTax(): number {
    return Number((this.price * 1.1).toFixed(2));
  }
}
export default Product;
