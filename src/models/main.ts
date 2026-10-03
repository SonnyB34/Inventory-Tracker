import PhysicalProduct from './physicalProduct.js';
import DigitalProduct from './DigitalProduct.js';


const sneakers = new PhysicalProduct('67WB84S', 'Sneakers', 50, 3);

const videoGame = new DigitalProduct('235TXY5', 'Call of Duty', 5, 60);

const productItems: (PhysicalProduct | DigitalProduct)[] = [];
productItems.push(sneakers, videoGame);

for (const item of productItems) {
  console.log(item.displayDetails());
  console.log(item.getPriceWithTax());

  if (item instanceof PhysicalProduct) {
    console.log(item.kilogramWeight);
  }
  if (item instanceof DigitalProduct) {
    console.log(item.FormattedSize);
  }
}
