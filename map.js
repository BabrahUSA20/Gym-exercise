
//Question: Given an array of date strings in the format 
//"YYYY-MM-DD", write a function that returns a new array of 
// dates formatted as "MM-DD-YYYY".




function replace(date){
// var str = numbers.map(item=>{
//     let va = item.split("-");
//  let s = va.replace(va[0], va[1]);
//  let b = va.replace(va[1], va[2]);
//  let c = va.replace(va[2], va[0]);
//  return s + b + c ;
// }
// );
//      return str
const [year,month,day] = date.split('-')
var x=2
return `${month}-${day}-${year}`
}
console.log(replace("2024-02-25"));























