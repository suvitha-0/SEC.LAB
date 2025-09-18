let details={
    name:"js",
    totalmark:100,
    }
    console.log(details.name);
    console.log(details["totalmark"]);
    //nested func
    console.log("---Nested Object---")
    let mark={
    name:"js",
    totalmark:100,
    subject:{
        dbms:100,
        java:100
    },
    sum:function(){
        let total=this.subject.dbms+this.subject.java;
        console.log(total);
    }
}
console.log(mark.subject.dbms);
console.log(mark.subject["java"]);
mark.sum();
//Array Object
console.log("---Array Onject---")
let person={
    job:"SoftwareTester",
    Salary:25000
}
const {job,Salary}=person
console.log(job+" "+Salary);
//Array Methods
console.log("---Array Method---")
let arr=new Array(1,2,"three");
console.log(arr[2]);
//Array Destructure
console.log("---Array Destructure---")
let arr2=["js",true,false];
const[name,b1,b2]=arr2;
console.log(name)
//filter
let students=[
    {name:"Aishwarya",grade:"O+"},
    {name:"Josh",grade:"A+"},
]
let gradestudent=students.filter(student => student.grade==="O+");
console.log(gradestudent);
//Splice
console.log("---Splice---")
let names=["Aishwarya","Josh","Joe"];
names.splice(2,1,"David");
console.log(names);