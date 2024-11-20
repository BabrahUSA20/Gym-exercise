
//Question: Given an array of date strings in the format "YYYY-MM-DD", write a function that returns a new array of dates formatted as "MM-DD-YYYY".




// function replace(numbers){

// var str = numbers.map(item=>{
//     let va = item.split("-");
//  let s = va.replace(va[0], va[1]);
//  let b = va.replace(va[1], va[2]);
//  let c = va.replace(va[2], va[0]);
//  return s + b + c ;
// }
// );
//      return str
// }
// console.log(replace(["2024-02-25"]));


function mult(array){
     var result = array.filter(num => {
          if (num<=1) return false;
          for (i=2; i<= Math.sqrt(num); i++){
               if (num %i === 0) return false;
          }
          return true;
     }

     )
         return result; 
}

console.log(mult([2, 3, 4, 5, 8, 13, 17, 19, 21, 23]));























