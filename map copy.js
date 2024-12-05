// function  double(array){

//   var  doubled = array.map(n  =>{
//         return n*2;
//     })
// return doubled.toString();
//     }
//     console.log(double([1,2,3,4]));


//3. Extract Property Values

var person = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 }
  ]

  var main = person.map((item) =>{ 
    return item.name
  })

  console.log(main);