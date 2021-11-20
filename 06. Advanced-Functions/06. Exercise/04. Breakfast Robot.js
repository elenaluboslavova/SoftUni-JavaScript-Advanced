function solution() {
    let microelements = {
        carbohydrate: 0,
        fat: 0,
        flavour: 0,
        protein: 0,
    }

    let recipes = {
        apple: { carbohydrate: 1, flavour: 2 },
        lemonade: { carbohydrate: 10, flavour: 20 },
        burger: { carbohydrate: 5, fat: 7, flavour: 3 },
        eggs: { protein: 5, fat: 1, flavour: 1 },
        turkey: { protein: 10, carbohydrate: 10, fat: 10, flavour: 10 }
    };

    function cook(instruction) {
        let command = instruction.split(' ')[0];

        if (command == 'restock') {
            let microelement = instruction.split(' ')[1];
            let quantity = Number(instruction.split(' ')[2]);
            microelements[microelement] += quantity;
            return 'Success';
        }

        else if (command == 'prepare') {
            let recipe = instruction.split(' ')[1];
            let neededQuantity = Number(instruction.split(' ')[2]);

            let hasError = false;
            for (let property in recipes[recipe]) {
                let quantity = recipes[recipe][property];
                if (quantity * neededQuantity > microelements[property]) {
                    hasError = true;
                    return `Error: not enough ${property} in stock`;
                }
            }
            if (!hasError) {
                for (let property in recipes[recipe]) {
                    let quantity = recipes[recipe][property];
                    microelements[property] -= quantity * neededQuantity;
                }
                return 'Success';
            }
        }

        else if(command == 'report'){
            return `protein=${microelements.protein} carbohydrate=${microelements.carbohydrate} fat=${microelements.fat} flavour=${microelements.flavour}`;
        }
    }

    return cook;
}

let manager = solution();
console.log(manager("restock flavour 50")); // Success 
console.log(manager("prepare lemonade 4")); // Error: not enough carbohydrate in stock
console.log(manager("restock flavour 50"));
console.log(manager("prepare lemonade 4"));
console.log(manager("restock carbohydrate 10"));
console.log(manager("restock flavour 10"));
console.log(manager("prepare apple 1"));
console.log(manager("restock fat 10"));
console.log(manager("prepare burger 1"));
console.log(manager("report"));