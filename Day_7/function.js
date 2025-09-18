let x=10
function SendMessage(){
    console.log("Hii Js");
    console.log(x);
}
//SendMessage();
console.log(x);
//block scope
console.log("---Block Scope---");
function check()
{
    if(true){
        let name="WebDevelopment";
    console.log(name);
}
    
}
check()
//----call back function------
console.log("---CallBack Function---");
function first(){
    console.log("This is my first function");
}
function second(callback){
    callback();
    console.log("This is my Second Function");
   
}
second(first)
console.log("---Arrow Function---")
let count=0;
let input=()=>{
    count++;
    console.log(count);
    if(count==5){
        clearInterval(Input,100)
    }
}
input()