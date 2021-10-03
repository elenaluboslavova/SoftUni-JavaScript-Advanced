function calculateMoney(fruitType, weightInGrams, pricePerKilo){
    let weightInKilos = Number(weightInGrams / 1000);
    let price = weightInKilos * pricePerKilo;
    console.log(`I need $${price.toFixed(2)} to buy ${weightInKilos.toFixed(2)} kilograms ${fruitType}.`)
}

calculateMoney('orange', 2500, 1.80);
calculateMoney('apple', 1563, 2.35);