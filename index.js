function receivesAFunction(cb){
    console.log(cb());
}
receivesAFunction(function () {return "this is crazy"})

function returnsANamedFunction(){
   return function namedFunction(){}
}
function returnsAnAnonymousFunction(){
    return function(){
        console.log("Seriously, this is crazy what have I gotten myself in to??")
    }
}



    