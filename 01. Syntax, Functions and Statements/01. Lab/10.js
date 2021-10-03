function aggregateElements(array){
    function sum(){
        let result = 0;
        for(let i = 0; i < array.length; i++){
            result += Number(array[i]);
        }
        return result;
    }

    function inverseSum(){
        let result = 0;
        for(let i = 0; i < array.length; i++){
            result += 1 / Number(array[i]);
        }
        return result;
    }

    function concat(){
        let result = '';
        for(let i = 0; i < array.length; i++){
            result += array[i];
        }
        return result;
    }

    console.log(sum());
    console.log(inverseSum());
    console.log(concat());
}

aggregateElements([1, 2, 3]);