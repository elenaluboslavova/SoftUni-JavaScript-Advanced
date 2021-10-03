function getWords(input){
    console.log(input.match(/\w+/g).map(a => a.toLocaleUpperCase()).join(', '));
}
 
getWords('Hi, how are you?');