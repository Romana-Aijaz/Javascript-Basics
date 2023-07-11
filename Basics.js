//understanding scope

/*var greeting = 'Welcome to my page';
(function() {
    console.log(greeting)
})();*/

//the variable in above code has a global scope it can be accessed inside a function.

/*(function(){
    var greeting = 'welcome to my page';
    console.log(greeting)
})();
console.log(greeting);*/
//error because the variable has local scope inside the function.

 
//What is Closure?

function user(name) {
    var displayName = function(greeting) {
        console.log(greeting+' '+name)
    }
    return displayName;
}

var myFunc = user('Romana');
myFunc('welcome');
myFunc('hello');

//closure is the inner function in the above code. The outter function has an access to the inner function.