class List{
    constructor(){
        this.size = 0;
        this.array = [];
    }
    add(element){
        this.array.push(element);
        this.size++;
        return this.array.sort((a, b) => a-b);
    }
    remove(index){
        if(index >= 0 && index <= this.array.length){
            this.array.splice(index, 1);
            this.size--;
            return this.array.sort((a, b) => a-b);
        }
    }
    get(index){
        if(index >= 0 && index <= this.array.length){
            return this.array[index];
        }
    }
}

let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1)); 
list.remove(1);
console.log(list.get(1));