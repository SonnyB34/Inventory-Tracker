import Product from '../product.js';
 
function calculateTax(product: Product): number {
    return product.getPriceWithTax();
}

export default calculateTax;