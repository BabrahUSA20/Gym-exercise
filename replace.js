function arra(str){

//return str.replace(/[0-9]/g, "!");
const regex = /\d+/g;
const matches = str.matchAll(regex);
for (let match of matches){
    var result = match[0];
}
return result;
}
console.log(arra("Hello123"));