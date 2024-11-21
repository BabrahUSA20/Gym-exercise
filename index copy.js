// function mynumber(number){
//     return number.toString().split("").sort((a,b) => b-a).join("");
// }
// console.log(mynumber(1021));


let users = [
    { firstName: 'John', lastName: 'Doe', age: 30, location: 'New York' },
    { firstName: 'Jane', lastName: 'Smith', age: 25, location: 'London' },
    { firstName: 'Alice', lastName: 'Johnson', age: 35, location: 'Paris' },
    { firstName: 'Bob', lastName: 'Brown', age: 40, location: 'Sydney' }
  ];
  
  let userSummaries = users.map(user => {
    return `${user.firstName} ${user.lastName} is ${user.age} years old and lives in ${user.location}`;
  });
  
  console.log(userSummaries);
  
