class Stringer {
    constructor(innerString, innerLength) {
        this.innerString = innerString;
        this.innerLength = innerLength;
        this.checkString();
    };
    checkString() {
        let temp = '';
        for (let i = 0; i < this.innerLength; i++) {
            if (this.innerString[i] == undefined) {
                temp += ' ';
            }
            else {
                temp += this.innerString[i];
            }
        }
        this.innerString = temp;
    };
    decrease(length){
        if(this.innerLength - length < 0){
            this.innerLength = 0;
        }
        else{
            this.innerLength -= length;
        }
    };
    increase(length){
        this.innerLength += length;
    };
    toString(){
        return this.innerString;
    }
}
let test = new Stringer("Test", 5);
console.log(test.toString());

test.decrease(3);
console.log(test.toString());

test.decrease(5);
console.log(test.toString());

test.increase(4);
console.log(test.toString());