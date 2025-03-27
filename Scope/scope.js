// // Global scope
// var globalVar = "I'm a global variable";
// let globalLet = "I'm also global, but scoped with let";
// const globalConst = "I'm a global constant";


// {
// // Block scope
// var blockVar = "I'm a block-scoped var";
// let blockLet = "I'm a block-scoped let";
// const blockConst = "I'm a block-scoped const";
// }

// console.log(blockLet);

// // Global scope
// // console.log(blockVar); // Output: "I'm a global variable"
// // console.log(blockLet); // Output: "I'm also global, but scoped with let"
// // console.log(blockConst); // Output: "I'm a global constant"



// function show(){
//     var functionVar = "I am a block scoped var ";
//     let functionLet = "I am a block scoped let";
//     const functionconst = "I am a block scoped const";
// }

// show();

// console.log(functionVar);
// console.log(functionLet);
// console.log(functionconst);


{
    var test = "test var";
    let test1 = "test let";
    const test2 = "test const";

    test = "var";
    test1 = "let";
    // test2 = "const";
  
   
}

console.log(test);


test = "new var";
console.log(test);

