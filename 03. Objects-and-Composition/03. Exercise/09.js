function createSortedList() {
    let result = {
        l: [],
        add(element) {
            this.l.push(element);
            this.l.sort((a, b) => a - b);
            this.size = this.l.length;
        },
        remove(index) {
            if (index >= 0 && index < this.size) {
                this.l.splice(index, 1);
                this.size = this.l.length;
            }
        },
        get(index) {
            if (index >= 0 && index < this.size) {
                this.size = this.l.length;
                return this.l[index];
            }
        },
        size: 0,
    };
    return result;
}

let list = createSortedList();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1)); 
list.remove(1);
console.log(list.get(1));