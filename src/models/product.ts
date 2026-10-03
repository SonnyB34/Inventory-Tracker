  export class Product {
  sku: string;
  name: string;
  price: number;

  constructor(sku: string, name: string, price: number) {
    this.sku = sku;
    this.name = name;
    this.price = price;
  }

  displayDetails(): string {
    return `${this.name} is $${this.price.toFixed(2)} with a sku number ${this.sku}`;
  }

  getPriceWithTax(): number {
    return this.price * 1.10;
  }


}


