function solution(array) {
    let collection = [];
    let processor = {
        add,
        remove,
        print
    };

    for (let i = 0; i < array.length; i++) {
        let command = array[i].split(' ')[0];
        let value = array[i].split(' ')[1];
        switch (command) {
            case 'add': processor.add(value); break;
            case 'remove': processor.remove(value); break;
            case 'print': processor.print(); break;
        }
    }

    function add(value) {
        collection.push(value);
    }
    function remove(value) {
        while (collection.find(x => x == value)) {
            let index = collection.indexOf(value);
            collection.splice(index, 1);
        }
    }
    function print() {
        console.log(collection.join(','));
    }
}

solution(['add hello','add hello','add hello', 'add again', 'remove hello', 'add again', 'print']);