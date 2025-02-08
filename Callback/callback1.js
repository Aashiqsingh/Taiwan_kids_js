function demo(){

    console.log("demo function called..");
    
}


function test(x)
{
    // console.log(x);
    
    x()
}


test(demo)



// test(10)
// test("ram")
// test(12.56)
// test(true)