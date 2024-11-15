function mynumber(number){
    return number.toString().split("").sort((a,b) => a-b).join("");
}
console.log(mynumber(51));