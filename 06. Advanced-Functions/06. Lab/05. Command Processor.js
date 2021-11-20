function solution(){
    let result = '';

    return {
        result,
        append,
        removeStart,
        removeEnd,
        print
    };
    function append(value){
        result += value;
    }
    function removeStart(count){
        result = result.slice(count, result.length);
    }
    function removeEnd(count){
        result = result.slice(0, result.length - count);
    }
    function print(){
        console.log(result);
    }
}

let firstZeroTest = solution();

firstZeroTest.append('hello');
firstZeroTest.append('again');
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print();