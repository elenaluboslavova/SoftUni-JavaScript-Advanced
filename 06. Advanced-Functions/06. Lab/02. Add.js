function solution(number){
    return function add(num){
        let result = number;
        return result += num;
    }
}

let add5 = solution(5);
console.log(add5(2));
console.log(add5(3));