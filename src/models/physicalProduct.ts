import Product from './product.js';

class PhysicalProduct extends Product {
  weight: number;

  constructor(sku: string, name: string, price: number, weight: number) {
    super(sku, name, price);
    this.weight = weight;
  }

  getPriceWithTax(): number {
    return Number((this.price * 1.1).toFixed(2));
  }

  get kilogramWeight(): string {
    return `The weight is ${this.weight}kgs`;
  }
}

export default PhysicalProduct;
