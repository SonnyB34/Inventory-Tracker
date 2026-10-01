import { Product } from './product.js';


 export class DigitalProduct extends Product {
    fileSize: number;

    constructor(sku: string, name: string, price: number, fileSize: number) {
    super(sku, name, price);
    this.fileSize = fileSize;
    }

    getPriceWithTax(): number {
        return this.price;
    }

    get getFormattedSize(): string {
        return `${this.fileSize} in megabytes`
    }
}