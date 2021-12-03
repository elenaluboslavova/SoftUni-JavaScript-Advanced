function solve(ticketsArray, sortCriteria) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = Number(price);
            this.status = status;
        }
    }
    let resultArray = [];
    for (let i = 0; i < ticketsArray.length; i++) {
        let current = ticketsArray[i].split('|');
        resultArray.push(new Ticket(current[0], current[1], current[2]));
    }

    if (sortCriteria == 'price') {
        resultArray.sort((a, b) => a[sortCriteria] - b[sortCriteria]);
    }
    else {
        resultArray.sort((a, b) => a[sortCriteria].localeCompare(b[sortCriteria]));
    }
    return resultArray;
}

console.log(solve(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'destination'));