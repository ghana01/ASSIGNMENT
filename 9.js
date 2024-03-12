// You are given with an array of numbers and strings. 
//Your task is to find the first string in the array.
// On finding the first string print “Found the First String” and its value
let arr=[1,3,5,"ghan","suku"];
let n = arr.length;
for(let i =0;i<n;i++){
    if(typeof(arr[i])=="string"){
        console.log(arr[i]);
        break;
    }
}