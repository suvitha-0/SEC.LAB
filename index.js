//variable declared outside any function or block are in the global scope.
//They are accessible anywhere in the script.
let x=10;
function Sendmessage(){
    console.log("Hai Js");
    console.log(x);//within
}
Sendmessage();
  console.log(x);//outside

//function scope
//only accessible in the functiobn in which they are declared.  
function Sendmessage(){
    let x=10;
    console.log("Hai Js");
    console.log(x);//within
}
Sendmessage();

//block scope
//The block scope of the variable means that the variable
//is accessible within the block that is between the curly braces
function Check(){
    if(true){
        let name="Webdevelopment";
        console.log("Block scope");
        console.log(name);
    }
}
Check()

//callback function in js:*A callback function is a function that is passed as an argument to another function
//                        *It is commonly used for: handling asynchronous operations(like API calls,timeout,or event)
//                        *Customizing the behaviour inside function 
function First(){
    console.log("This is muy first functoion");
}
First()
function Second(callback){
    console.log("This is my second function");
    callback();
}
Second(First)

//using setTimeout 
function First(){
    console.log("This is muy first functoion");
}
First()
function Second(callback){
    console.log("This is my second function");
    setTimeout(callback,2000);
}
Second(First) setTimeout
