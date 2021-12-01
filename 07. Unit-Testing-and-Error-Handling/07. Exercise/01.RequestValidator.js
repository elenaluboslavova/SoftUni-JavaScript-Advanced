function validate(obj){
    let methods = ['GET', 'POST', 'CONNECT', 'DELETE'];
    let versions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
    let uriRegex = /[*]|^[a-zA-Z0-9.]+$/;
    let messageRegex = /^[^<>\\&'"]+$/;

    if(obj.method == undefined || !methods.includes(obj.method)){
        throw Error(`Invalid request header: Invalid Method`);
    }

    if(obj.uri == undefined || !uriRegex.test(obj.uri)){
        throw Error(`Invalid request header: Invalid URI`);
    }

    if(obj.version == undefined || !versions.includes(obj.version)){
        throw Error(`Invalid request header: Invalid Version`);
    }

    if(obj.message == undefined || !messageRegex.test(obj.message) && obj.message != ''){
        throw Error(`Invalid request header: Invalid Message`);
    }

    return obj;
}

console.log(validate({
    method: 'POST',
    version: 'HTTP/2.0',
    message: 'rm -rf /*'
}));