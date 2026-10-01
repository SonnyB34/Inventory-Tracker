import { Product } from '../product.js';
 
export function calculateTax(product: Product): number {
    return product.getPriceWithTax();
}