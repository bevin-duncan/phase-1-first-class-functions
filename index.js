function receivesAFunction(cb){
    return cb();
}

function returnsANamedFunction(){
    return function namedFunction(){}
}

 function returnsAnAnonymousFunction(){
     return function(){}
 }   