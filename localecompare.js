function so(array){
//var result = array.map(str => str.split("").join(""));
    
return array.sort((a,b) => b.localeCompare(a));
}
console.log(so(["appple", "banana", "avocado", "food"]));