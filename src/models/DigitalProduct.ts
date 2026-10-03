import Product from './product.js';

class DigitalProduct extends Product {
  fileSize: number;

  constructor(sku: string, name: string, price: number, fileSize: number) {
    super(sku, name, price);
    this.fileSize = fileSize;
  }

  getPriceWithTax(): number {
    return Number((this.price * 1.1).toFixed(2));
  }

  get FormattedSize(): string {
    return `The file size is ${this.fileSize}megabytes`;
  }
}

export default DigitalProduct;
