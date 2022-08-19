const { spy } = require("chai");

function receivesAFunction(callback){
   return callback ();
}
function returnsANamedFunction(callback){
    let function1 = function(){

    }
    return callback();
}
function returnsAnAnonymousFunction (){
    return function () {

    }
}