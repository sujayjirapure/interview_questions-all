
//define :- A higher order function is a function that takes
//one or more functions as arguments, or returns a function as its result.


// Callback function
function callbackFunction(){
    console.log('I am  a callback function');
}

// higher order function
function higherOrderFunction(func){
    console.log('I am higher order function')
    func()
}

higherOrderFunction(callbackFunction);