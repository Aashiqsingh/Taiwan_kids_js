// why we use function in js 
// -  for code reusiblity 


//  thre are four types of function here 
// 1. without argument without return type 
// 2. with argument without return type
// 3. without argumnet with return type
// 4. with argument with return type


// function --> keyword  , return ---> keyword

// 1. without argumnet without return type
// function demo()
// {
//     console.log("Hello goodmorning guys...");
    
// }

// demo()


// 2 . with argument without return types

// function add(a,b){

//     console.log("Addition =", a+b);
    
// }

// add(3,4)

// 3. without argument with return type

// function test(){

//     return "Without argument with return type function is called...";
    
// }

// var x = test()
// console.log(x);


// console.log(test());


// 4. with argument and with return type 

function mul(x,y,z){

    return x*y*z;
}

var x = mul(2,3,5)
console.log("Multiply = ",x);


