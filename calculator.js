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

let screen_btn=document.querySelector('screen');


let result;


//operate function
let operate=function(a,b,operator){

    if(operator == '+'){
        result = a+b;
        return result;
    }

    if(operator == '-'){
        result = a-b;
        return result;
    }
    if(operator == '*'){
        result = a*b;
        return result;
    }
    if(operator == '/'){
        result = a/b;
        return result;
    }
}

//button
let button_num=document.querySelector('number');
button_num.addEventListener("click",function(e){
    let value=number.value;
    screen_btn.value+=value;
})



//clear
let clear_display=document.querySelector('clear');
clear_display.addEventListener("click",location.reload());

//equal
let diaplay_ans=document.querySelector('equal');
diaplay_ans.addEventListener("click",function(e){
    screen_btn.value+=result;
})


   

    
   