import { Product } from './product.js';

export class PhysicalProduct extends Product {
  weight: number;

  constructor(
    sku: string,
    name: string,
    price: number,
    weight: number,
  ) {
    super(sku, name, price);
    this.weight = weight;
  }

  getPriceWithTax(): number {
    return this.price * 1.10;
  }

  get kilogramWeight(): string {
    return `The item is ${this.weight} kgs`;
  }
}


