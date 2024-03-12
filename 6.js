// You are developing a form validation system.
//  Write a program that takes user information(such as name, email, age)
// and uses the typeof operator to check the data type of each input. 
// Print appropriate messages like "Name should be a string," "Email should be a string," or "Age should be a number." 
// if any field is not proper.
let name="ghanshyam"
let age=23;
let email="ghanshyam@gmail.com";
if(typeof(name)!=='string'){
    console.log("name should be string")
}
 else if(typeof(email)!=='string'){
    console.log("name should be string")
}
 else if(typeof(age)!=='number'){
    console.log("name should be string")
}
else{
    console.log("all the feild proper")
}