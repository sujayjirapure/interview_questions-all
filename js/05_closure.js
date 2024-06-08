//define - closure means inner functions can asccces the outer function variables and values
//(i e. lexical scope) is called closure


function outer(){
    let a = 10;
    console.log("out",a);
    return function inner(){
        console.log("inner",a);
    }
}

let ans = outer();
ans();