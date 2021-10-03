function storeCatalogue(inputArray) {
    const catalogue = {};
    const sorted = inputArray.sort((a, b) => a.localeCompare(b));

    for (const line of sorted) {
        const product = line.split(' : ')[0];
        const price = Number(line.split(' : ')[1]);

        if (!catalogue[product[0]]) {
            catalogue[product[0]] = {};
        }
        catalogue[product[0]][product] = price;
    }
    
    for(const key of Object.keys(catalogue)){
        console.log(key);
        for(const product in catalogue[key]){
            console.log(`  ${product}: ${catalogue[key][product]}`);
        }
    }
}

storeCatalogue(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']);