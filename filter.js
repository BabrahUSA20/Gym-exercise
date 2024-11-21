// Create a function that filters out negative numbers from an array.
// Examples:
// // Example 1
// Input: [-3, 5, -1, 0, 8, -4, 7]
// Output: [5, 0, 8, 7]

function filt(array){
var res= [];
res = array.filter(num =>{
    return num >= 0
})
return res;
}
console.log(filt([10, 20, 30, 40]));


//========================================
// Write a function that filters words longer than 5 characters.
// Examples:
// // Example 1
// Input: ['apple', 'banana', 'cherry', 'date', 'elderberry']
// Output: ['banana', 'elderberry']

// // Example 2
// Input: ['cat', 'dog', 'elephant', 'fox', 'butterfly']
// Output: ['elephant', 'butterfly']

// // Example 3
// Input: ['a', 'be', 'cat', 'dog', 'mouse']
// Output: []


function word(array){

    const res = array.filter( wod =>{
        return wod.length > 5
    }

    )
return res;
}
console.log(word(['cat', 'dog', 'elephant', 'fox', 'butterfly']));


//==================================

// Create a function squareNum that squares each number in an array.
// Examples:
// // Example 1
// Input: [2, 4, 6, 8, 10]
// Output: [4, 16, 36, 64, 100]

// // Example 2
// Input: [-1, 0, 1]
// Output: [1, 0, 1]

// // Example 3
// Input: [3, 2, 1]
// Output: [9, 4, 2]

function squareNum(array){
    const result =  array.map(num =>{
return num * num;
    })
return result;
}
console.log (squareNum([2, 4, 6, 8, 10]));
console.log (squareNum([-1, 0, 1]));

//========================================================


// #2: Sort strings
// Sort the following array of names alphabetically, ignoring case sensitivity.
// ​
// Instructions:
// Sort the names so that case doesn't affect the ordering
// 'alice' and 'Alice' should be treated the same
// Expected Output:
// ['alice', 'Bob', 'Charlie', 'david', 'John']

function sor(name){
    const names = ['John', 'alice', 'Bob', 'david', 'Charlie'];

 
 return  names.sort((a,b) => b.localeCompare(a));
}
console.log(sor());














