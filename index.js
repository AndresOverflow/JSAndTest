// IMPORTANT URLS TO INFO

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#
//https://academind.com/tutorials/reference-vs-primitive-values/



/////////////////////////////////////////////////////////////
// 1.add elements at the beggining and at the end of an array
/////////////////////////////////////////////////////////////
const addElArray = () => {
    console.log("Initial array : ");
    let array = ['a', 'b' ,'c']
    console.log(array)

    //array functions
    array.unshift('start');
    array.push('end');
    console.log("After adding elements array : ");
    console.log(array)

    
    // ES6 : Using Spread operator
    console.log("Using ES6")
    console.log("Initial array : ");
    array = ['a', 'b' ,'c']

    array = ['start', ...array]
    console.log(array)
    array= [...array, 'end']
    console.log("After adding elements array : ");
    console.log(array)

    // array= ["start",...array, "end"]    
}



/////////////////////////////////////////////////////////////
// 2. How do you create a private variable in JavaScript?
/////////////////////////////////////////////////////////////


/////////////////////////////////////////////////////////////
// 3. What is the output?
/////////////////////////////////////////////////////////////

const whichTypeOf = () => {
    console.log(typeof typeof 1);
}

/////////////////////////////////////////////////////////////
// 4. What is the bind?
/////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////
// 5. What is the difference btw let and var?
/////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////
// 6. What is prototype in javascript?
/////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////
// 7. What is closure?
/////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////
// 8. Explain the event loop in node.js?
/////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////
// 9. What is the meaning of the keyword this in javascript?
/////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////
// 10. What is node.js?
/////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////
// 11. What is the difference btw null and undefined?
/////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////
// 12. Expalin settimeout in javascript?
/////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////
// 13. What is the difference btw javascript and node.js 
/////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////
// 14. Expalin what is promise and what is a callback?
/////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////
// 15. difference btw getElementsById, querySelector or querySelectorAll?
/////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////
// 16. differences between == and ===?
/////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////
// 17. What is variable hoisting in JS?
/////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////
// 18. What is Scope of variable? What is Global scope and local scope?
/////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////
// 19. What is OOP? How will you implement it in JavaScript
/////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////
// 20. What is strict mode in JavaScript
/////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////
// 21. What does async and defer attributes do? Why they are used in the script tag
/////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////
// 22. What is shift and push? How they are fiffereing from each other?
/////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////
// 23. What is new operator in JS?
/////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////
// 24. When is JavaScript synchronous? When is javascript asynchronous?
/////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////
// 25. What are all the best practices for writing JavaScript Code? How do you write betterCode?
/////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////
// 26. What is ECMAScript 6 (ES6)? What are the new features?
/////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////
// 27. What is Ajax
/////////////////////////////////////////////////////////////


/////////////////////////////////////////////////////////////
// 28. What is Call Stack in JS
/////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////
// 29. How React works? How Virtual-DOM works in REACT?
/////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////
// 30. What is ES6?
/////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////
// 31. What is Node.JS? what is it used for?
/////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////
// 32. What is Event driven programming?
/////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////
// 33. How is the Spread operator working
/////////////////////////////////////////////////////////////


/*
inmutability concept instead of changing the element, a new reference is created
adding the copy of the old element + the changes
*/
const copyArray = () => {
    console.log("Initial Array")
    const arrayToCopy = [1, 2 , 3, 4]
    console.log(arrayToCopy);
    console.log("copied array with slice:")
    const copiedArray = arrayToCopy.slice();
    console.log(copiedArray);
    console.log("copied array with spread operator:")
    const copiedArray2 = [...arrayToCopy] // they take the array or the object and pull out all the elements or properties
    console.log(copiedArray2);

    const person = {
        id : 1,
        name : "Andres",
        surname: "Overflow"
    }
    const person2 = {...person}
    console.log(person2)
    // and put them arround the whatever is surrounding it
}

/////////////////////////////////////////////////////////////
// 34. How is the Rest operator working?
/////////////////////////////////////////////////////////////

/*
Looks like the spread operator
It will get all the arguments by parameter and inside the function will create an array with al the arguments

*/
const RestOperator = () => {
    const toArray = (arg1, arg2, arg3) => {
        return [arg1, arg2, arg3]
    }
    console.log(toArray(1,2,3));

    const toArrayRest = (...args) => {
        return args
    } 

    console.log(toArray(1,2,3,4));


}


/////////////////////////////////////////////////////////////
// 35. How to remove an element (object) from an array that contains a id with the exact value?
/////////////////////////////////////////////////////////////
const deletionArray= () => {
    let array = ['aasdf', 'basdf', 'csddddddddddddddd']
    console.log(array)
    console.log("After filter");
    array = array.filter(element => element.length > 10);
    console.log(array)
}

/////////////////////////////////////////////////////////////
// 36. assign-by-value vs assign-by-reference in JS
/////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////
// 37. What is the difference between Java and JavaScript
/////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////
// 38. What is Object Destructuring
/////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////
// 39. Characteristics of JavaScript
/////////////////////////////////////////////////////////////
/*
*** Weakly Typed Language :  Dynamic type checking (data types can be switched dynamically, no explicit type assignment)

*** OOP : Data can be organized in logical objects

*** Versatile Language : Runs in browser and directly on a PC/server can perform a broad variety of tasks
*/

/////////////////////////////////////////////////////////////
// 40. difference between let and const
/////////////////////////////////////////////////////////////
/*
let: creates a variable (the scope is a bit different) that can change

const: creates a const which makes clear that we don't plan on changing it


*/


/////////////////////////////////////////////////////////////
// 40. What are the primitive types in JS and the mutables (and inmutables) reference
//////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////
// 40. How arrow functions work and why to use them
// https://academind.com/tutorials/this-keyword-function-references/
/////////////////////////////////////////////////////////////

function normalFunction(param1, param2, param3) {
    return (
        'Param 1 is ' +
        param1 +
        'Param 2 is ' +
        param2 +
        'Param 3 is ' +
        param3
    );
}

// anonymus function

const ArrowFunction1 = function(param1, param2, param3) {
    return (
        'Param 1 is ' +
        param1 +
        'Param 2 is ' +
        param2 +
        'Param 3 is ' +
        param3
    );
}
// arrow function (this keyword and how arrow functions uses)

const ArrowFunction2 = (param1, param2, param3) => {
    return (
        'Param 1 is ' +
        param1 +
        'Param 2 is ' +
        param2 +
        'Param 3 is ' +
        param3
    );
};


const functionToShort = (a,b) => {
    return a+b
}
const shortedFunction = (a,b) => a+b;

const arrowFunction1Argument = a => 1+1;

const arrowFunctionNoArguments = () => console.log("arrow function with no arguments");


////////////////////////////////////////////////////////////


/////////////////////////////////////////////////////////////
// 41. What is an data structe called JS Objects
/////////////////////////////////////////////////////////////

// objects allow to gather data together
// The this in the arrow function refers to the global not to the object surrounding it
// the this in the normal function 
const person = {
    key : 'value',
    key2: 'value2',
    keyfunc : () => { console.log( "hi I'm a person") + this.key},
    keyfunc : function(){ console.log( "hi I'm a person") + this.key},
    keyfunc2() {
        console.log("hi this is the second function" + this.key) 
    }
};

/////////////////////////////////////////////////////////////
// 40. Arrays how they work
/////////////////////////////////////////////////////////////
/*
Arrays are the other kind of data structure
*/


const ArrayFunction = () => {
    const hobbies = ['Sports', 'Cooking'];
    for (let hobby of hobbies) {
        console.log(hobby);
    }
}
        

/////////////////////////////////////////////////////////////
// 40. How does the map function work
/////////////////////////////////////////////////////////////
// The map function applies a function to each element of the array
// Returns a new Array reference
const mapFunction = () => {
    const numbers = [1,2,3,4,5,6]
    console.log("before map")
    console.log(numbers)
    const numbersSquared = numbers.map(number => number*number);
    console.log("after map")
    console.log(numbersSquared);
}

/////////////////////////////////////////////////////////////
// 40. difference between let and const
/////////////////////////////////////////////////////////////
/* 
reference types only stores an addres, so as long as you don't change
the reference to the Object, what it is pointing to can be change even 
when when it is declared as a const  */

/////////////////////////////////////////////////////////////
// 40. How does the slice function work
/////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////
// 40. How does the Destructuring works
/////////////////////////////////////////////////////////////

/*
It allows to extract the exact elements from a reference object by position (array) or by name (js object)
*/

const destructuring = () => {
    const arrayToDestructure = [1,2,3,4,5]
    const objectToDestrucutre = {
        key1 : 'value1',
        key2 : 'value2',
        key3 : 'value3' 
    }
    console.log( arrayToDestructure + objectToDestrucutre);
    const [firstEl, secondEl, thirdEl] = arrayToDestructure
    console.log('destrucutred array : ' + secondEl + thirdEl);
    const {key1, key3} = objectToDestrucutre;
    console.log(key1 + key3)
}


/////////////////////////////////////////////////////////////
// 40. What is asyncronhous code
/////////////////////////////////////////////////////////////
/*
callback functions, executes the function and after that 

*/
asynchronousCode = () => {
    const fetchData = (callback) => {
        setTimeout(() =>{}, 1500)

    };

    setTimeout(
        () => {
            console.log('Timer is done')
        }, 1);
}
/////////////////////////////////////////////////////////////
// 40. What are promises
/////////////////////////////////////////////////////////////
/*
*/

const fetchData = callback => {
    const promise = new Promise((resolve, reject) => {

    });
}
/////////////////////////////////////////////////////////////
// 40. How does the splice function work
/////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////
// 40. How does the find function work?
/////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////
// 40. Next generation JavaScript Classes?

/*
Classes are blueprints for JavaScript objects
they can have properties and methods.
A class is instancied with new
They have inheritance (like prototypes)
ES6
*/

class Animal {
    constructor() {
        this.kind = 'mammal';
    }
    printKind() {
        console.log(this.kind)
    }
}

class Dog extends Animal{
    constructor() {
        super()
        this.name = 'Doggy'
        this.kind = 'mammal2'
    }
    printMyName() {
        console.log(this.name)
    }
}

function classesq() {
    const doggy = new Dog();
    doggy.printKind()
    doggy.printMyName()
    console.log("hello world")
}

/////////////////////////////////////////////////////////////
// 40. How does the find function work?
/////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////
// 40. How does the findIndex function work?
/////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////
// 40. How does the reduce function work?
/////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////
// 40. How does the concat function work?
/////////////////////////////////////////////////////////////


/////////////////////////////////////////////////////////////
// 40. How does the splice function work?
/////////////////////////////////////////////////////////////



/////////////////////////////////////////////////////////////
// 40. How does the find function work?
/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
// 40. How does the find function work?
/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
// 40. How does the find function work?
/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
// 40. How does the find function work?
/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
// 40. How does the find function work?
/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
// 40. How does the find function work?
/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
// 40. How does the find function work?
/////////////////////////////////////////////////////////////

















 

// Insert the desire function to execute here
//::::::::::::::::::::::::::::::::::::::::::::
classesq();