let add=function(a,b){
    return a+b;
}

let sub=function(a,b){
    return a-b;
}

let multiply=function(a,b){
    return a*b;
}

let divide=function(a,b){
    return a/b;
}

let operate=function(a,b,operator){

    if(operator == '+'){
        return a+b;
    }

    if(operator == '-'){
        return a-b;
    }
    if(operator == '*'){
        return a*b;
    }
    if(operator == '/'){
        return a/b;
    }
}