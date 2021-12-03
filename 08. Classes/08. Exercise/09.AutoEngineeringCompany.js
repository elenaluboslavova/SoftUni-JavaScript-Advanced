function createCars(carsArray){
    let cars = new Map();
    for(let i = 0; i < carsArray.length; i++){
        let brand = carsArray[i].split(" | ")[0];
        let model = carsArray[i].split(" | ")[1];
        let producedCars = Number(carsArray[i].split(" | ")[2]);
        
        if(!cars.has(brand)){
            cars.set(brand, new Map());
        }

        let models = cars.get(brand);
        if(!models.has(model)){
            models.set(model, producedCars);
        }
        else{
            models.set(model, models.get(model) + producedCars);
        }
    }

    for(let [car, models] of cars){
        console.log(car);
        for(let [model, qty] of models){
            console.log(`###${model} -> ${qty}`);
        }
    }
}

createCars(['Audi | Q7 | 1000',
'Audi | Q6 | 100',
'BMW | X5 | 1000',
'BMW | X6 | 100',
'Citroen | C4 | 123',
'Volga | GAZ-24 | 1000000',
'Lada | Niva | 1000000',
'Lada | Jigula | 1000000',
'Citroen | C4 | 22',
'Citroen | C5 | 10']);