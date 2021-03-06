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

/*
1. Var is there in JS from the beginning. Let was introduced in 2015 in /ES6
2. Let has scope in the block scope, which means that it will die at the end of a block (e.g if statement)
    var has global scope / functon scope It will die at the end of the function 
3. vars get hoisted on top of the function that is defined (defined in top of the function idependently of when you declare them)

*/

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

/*
Both are comparison operators
== -> Compares only value. In order to compare It will make both types equal
 ( the one on the right side to the one on the left side) like a casting

=== -> Compares value and type as well
*/

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
Both are used to 


let: creates a variable (the scope is a bit different) that can change.
It will allow you to change type as well

const: creates a const which makes clear that we don't plan on changing it
const c; -> It will initialize as undefined
c.push(3) -> undefined to 3, error

you can't reasing the object or array

*/


/////////////////////////////////////////////////////////////
// 41. What are the primitive types in JS and the mutables (and inmutables) reference
//////////////////////////////////////////////////////////////
/*
The primitive Data types supported by JavaScript are
String
Numbers
Booleans
Null
Undefined
Symbol (E6)

*/

//////////////////////////////////////////////////////////////
// 42. How arrow functions work and why to use them
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


/*

Allows to refer to the this of the object surrounding it, otherwise it would be assigned to the window object


*/

const arrowFunctionThisExplanation = () => {
    const profile = {
        firstName: '',
        lastName: '',
        setName: function(name) {
            let splitName = (n) => {
                let nameArray = n.split(' ');
                this.firstName = nameArray[0];
                this.lastName = nameArray[1];
            }
            splitName(name);
        }
    }
    profile.setName('John Deere');
    console.log(profile.lastName);
}

////////////////////////////////////////////////////////////


/////////////////////////////////////////////////////////////
// 43. What is an data structe called JS Objects
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
// 44. Arrays how they work
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
// 45. How does the map function work
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
// 46. difference between let and const
/////////////////////////////////////////////////////////////
/* 
reference types only stores an addres, so as long as you don't change
the reference to the Object, what it is pointing to can be change even 
when when it is declared as a const  */

/////////////////////////////////////////////////////////////
// 47. How does the slice function work
/////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////
// 48. How does the Destructuring works
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
// 49. What is asyncronhous code
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
// 50. What are promises
/////////////////////////////////////////////////////////////
/*
*/

const fetchData = callback => {
    const promise = new Promise((resolve, reject) => {

    });
}
/////////////////////////////////////////////////////////////
// 51. How does the splice function work
/////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////
// 52. How does the find function work?
/////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////
// 53. Next generation JavaScript Classes?

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
// 54. How does the find function work?
/////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////
// 55. How does the findIndex function work?
/////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////
// 56. How does the reduce function work?
/////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////
// 57. How does the concat function work?
/////////////////////////////////////////////////////////////


/////////////////////////////////////////////////////////////
// 58. How does the splice function work?
/////////////////////////////////////////////////////////////


/////////////////////////////////////////////////////////////
// 59. Difference between null and undefined?
/////////////////////////////////////////////////////////////
/*
Both represents empty value
undefined is like a placeholder, null you will have to place it manually
typeof(null) => object
typeof(undefined) => undefined
*/

/////////////////////////////////////////////////////////////
// 60. What is an iife?
/////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////
// 61. What are the pros and cons of javascript
/////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////
// 62. Difference between synchrous and asynchronous?
/////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////
// 63. Difference between first JavaScript vs E6 vs E7?
/////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////
// 64. What is JavaScript?
/////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////
// 65. Differences between Java and JavaScript?
/////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////
// 66. What is the use of isNaN function?
/////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////
// 67. Differences between JavaScript and ASP script, which is faster?
/////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////
// 68. What is negative infinity?
/////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////
// 69. Is it possible to break JavaScript Code into several lines?
/////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////
// 70. Which company developed JavaScript
/////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////
// 71. What are undeclared and undefined variables?
/////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////
// 72. Write code for adding new elements dynamically?
/////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////
// 73. What are global variables? How are these variable declared and what are the problems
// associated with using them?
/////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////
// 74. What is a promt box?
/////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////
// 75. What is 'this' keyword in JavaScript?
/////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////
// 76. Explain the working of timers in JavaScript? Also elucidate
// the drawbacks of using the timer, if any?
/////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////
// 77. What is the difference between ViewState and SessionState?
/////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////
// 78. Explain how can you submit a form using JavaScript?
/////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////
// 79. How can the style/class of an element be changed?
/////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////
// 80. How to read and write file using JavaScript?
/////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////
// 81. How to do a for / while / do-while?
/////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////
// 82. How can you convert the string of any base to integer in JavaScirpt?
/////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////
// 83. What would be the result of 3+2+"7"?
/////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////
// 84. What do mean by NULL in JavaScript?
/////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////
// 85. What is the function of delete operator (in an js object)?
/////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////
// 86. What is an undefined value in JavaScript?
/////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////
// 87. what are all the types of pop up boxes available in JavaScript?
/////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////
// 88. What is the use of Void(0)?
/////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////
// 89. How can a page be forced to lead another page in JavaScript?
/////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////
// 90. What is the difference between alert box and confirmation box?
/////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////
// 91. What are escape characters?
/////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////
// 92. What are JavaScript Cookies?
/////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////
// 93. Whether JavaScript has concept level scope?
/////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////
// 94. What is the disadvantage of using innerHTML in JavaScript?
/////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////
// 95. Which keywords are used to handle exceptions?
/////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////
// 96. Which keyword is used to print the text in the screen?
/////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////
// 97. What is variable typing?
/////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////
// 98. How to find operating system in the client machine using JS?
/////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////
// 99. Different kind of erros in JavaSript?
/////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////
// 100. What is the 'Strict' mode in JavaScript and how can it be enabled?
/////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////
// 101. What is the way to get the status of a CheckBox?
/////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////
// 102. Explain window.onload and onDocumentReady?
/////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////
// 103. How will you explain closures in JS? When are they used?
/////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////
// 104. What is the difference between .call() and .apply()?
/////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////
// 105. Define event bubbling?
/////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////
// 106. JS case sensitive? Example?
/////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////
// 107. How can a particular frame be targeted, from a hyperlink in JS?
/////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////
// 108. What is the the point of difference between web-garden and a web-farm?
/////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////
// 109. How are object properties assigned?
/////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////
// 110. What is the mothed for reading and writing a file in JS?
/////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////
// 111. How are event handlers utilized in JavaScript?
/////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////
// 112. How are JS and ECMA Script related?
/////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
// 113. What are the decodeURi() and encodeURI()?
/////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
// 114. Define unescape() and espace()?
/////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
// 115. How are event handlers utilized in JS?
/////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
// 116. Explain the role of deferred scripts in JavaScript?
/////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
// 117. Factorial using recursivity?
/////////////////////////////////////////////////////////////

const factorial = (n) => {
    //Base case
    if (n < 1) {
        return 1
        // Complex case
    } else {
        return n * factorial(n-1)
    }
}

////////////////////////////////////////////////////////////
// 118. How are event handlers utilized in JS?
/////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
// 119. How are event handlers utilized in JS?
/////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
// 120. How are event handlers utilized in JS?
/////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
// 121. How are event handlers utilized in JS?
/////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
// 122. How are event handlers utilized in JS?
/////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
// 123. How are event handlers utilized in JS?
/////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
// 124. How are event handlers utilized in JS?
/////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
// 125. How are event handlers utilized in JS?
/////////////////////////////////////////////////////////////
















 

// Insert the desire function to execute here
//::::::::::::::::::::::::::::::::::::::::::::
console.log(factorial(5));