import { PhysicalProduct } from "./physicalProduct.js";
import { DigitalProduct } from "./DigitalProduct.js";

const sneakers = new PhysicalProduct('67WB84S', 'Sneakers', 50, 1.36);

const videoGame = new DigitalProduct('235TXY5', 'Call of Duty', 5, 60000);

const productItems: (PhysicalProduct | DigitalProduct)[] = [];
productItems.push(sneakers, videoGame)

    for (const item of productItems) {
        console.log(item.displayDetails());
        console.log(item.getPriceWithTax());
    }