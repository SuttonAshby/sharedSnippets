//external counter
//the js example can be written to pass the value through 
//like the python example
let count = 10

//recursive function that calls itself
function recursiveFunction(){
    if(count >= 0){
        console.log(count)
        count--
    //here is where the function calls itself again
    recursiveFunction();
    } else {
        console.log('Boom!')
    }
}

//Where the function is invoked
recursiveFunction();