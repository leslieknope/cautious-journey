/*
Create a little library for all the various odd functions we’ve created in class. Think of the Math object built into JavaScript. It’s a grab bag of all the various math-y 
things you might want to do. Make a similar “toolbox” for this class! When you’re done, you should be able to run classToolbox.countBs(); or classToolbox.isPrime() or 
classToolbox.reverseArray(). You can name your library whatever you want instead of classToolbox.
Your library should:
Run in both Node or when linked in the browser like any other library
Create it’s own namespace
Include data property(ies) containing your name, the current date, and something about created for Hack U
Include at least 8 of the functions that we’ve written in the exercises as methods
Include your choice of weekDay or month as a submodule  <--check the cloud9
Include constructors for one prototype, such as Vehicle, Vector, or Student and Person
All methods and properties should be contained within the namespace created, such as in the examples above. Your module should use the “exports” convention like in 
slide #10 to keep things modular. This project is due November 15th at 6pm and will be graded pass/fail on completion. To turn it in, push it to GitHub as a repository. 
I already have your GitHub account names from last project, so you don’t need to do anything more to get it “turned in.”


Slide 10: using the module pattern

(function(exports) {
var names = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

exports.name = function(number) {
return names[number];
};
exports.number = function(name) {
return names.indexOf(name);
};
})(this.weekDay = {});

console.log(weekDay.name(weekDay.number("Saturday"))); // Saturday
*/


/*
Write a function that prints what books you have read and haven’t read. Here’s some data:
*/

(function(exports){



    var library = [ 
      {
          author: 'Bill Gates',
          title: 'The Road Ahead',
          readingStatus: true
      },
      {
          author: 'Steve Jobs',
          title: 'Walter Isaacson',
          readingStatus: true
      },
      {
          author: 'Suzanne Collins',
          title:  'Mockingjay: The Final Book of The Hunger Games', 
          readingStatus: false
      }];

    function readIt (){
        var read = [];
        var notRead = [];
        for(var wut in library){
            if(library[wut].readingStatus){
                read.push(library[wut].title);
            }
            else{
                notRead.push(library[wut].title);
                
            }

        }
        console.log("I have read these " + read);
        console.log("I have not read " + notRead)
    }


    function countBs (stringOfBees){
        var Bcounter = 0;
        for(var i = 0; i < stringOfBees.length; i++){
            
            if(stringOfBees.charAt(i) === "B"){
            Bcounter++;
            }
        }
        return Bcounter;
    }


    function countChar (thestring, thechar) {
        var charCounter = 0;
            for(var i = 0; i < thestring.length; i++){
            
            if(thestring.charAt(i) === thechar){
            charCounter++;
            }
        }
        return charCounter;
    }

    function isEven(x){
        if(x === 0){
            return true;
        }
        else if(x === 1){
            return false;
        }
        else if(x > 1){
            return isEven(x-2);
        }
        else if(x < 0){
            return isEven(x + 2);
        }
    }
   
    function min(x,y) {
        return x < y ?  x :  y;
    }

    function arrayCompare(array) {
        for (var i = 1; i < arguments.length; i++) {
        if (array.indexOf(arguments[i]) === -1) {
            console.log(arguments[i] + " is not in array.");
        } else {
            console.log(arguments[i] + " is in array.")
        }
        }
    }

    function isPrime(number) {
        if (typeof number !== 'number' || !Number.isInteger(number)) {
            return false;
        }

        if (number < 2) {
            return false;
        }
        
        if (number === 2) {
            return true;
        } else if (number % 2 === 0) {
            return false;
        }
    }

    (function(exports) {
    var names = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    exports.name = function(number) {
        return names[number];
    };
    exports.number = function(name) {
        return names.indexOf(name);
    };
    })(typeof window === 'undefined' || window === null ? global.weekDay = {} : this.weekDay = {} );

    var Person = function() {};

        Person.prototype.initialize = function(name, age)
        {
            this.name = name;
            this.age = age;
        }

        Person.prototype.describe = function()
        {
            return this.name + ", " + this.age + " years old.";
        }


exports.weekDay = weekDay;
exports.createdBy = 'Susan Lee';
exports.createdFor = 'Hack University';
exports.createdWhen = '2016-11-13';
exports.readIt = readIt;
exports.countBs = countBs;
exports.countChar = countChar;
exports.isEven = isEven;
exports.arrayCompare = arrayCompare;
exports.isPrime = isPrime;
exports.min = min;
exports.Person = Person;

})(typeof window === 'undefined' || window === null ? global.classToolbox = {} : this.classToolbox = {});

//tests
console.log("created by " + classToolbox.createdBy + "  created for " + classToolbox.createdFor + " created on " + classToolbox.createdWhen);
classToolbox.readIt();
console.log("Num of Bs in this string alsdkfjBas;ldkfjb is " + classToolbox.countBs("alsdkfjBas;ldkfjb"));
console.log("Num of f's in asdf is " + classToolbox.countChar("asdf", "f"));
console.log("3 is even? " + classToolbox.isEven(3));
console.log("4 is even? " + classToolbox.isEven(3));
console.log("the 3rd weekday is " + classToolbox.weekDay.name(3));
newGuy = new classToolbox.Person.prototype.initialize("new guy", 27)
console.log("the new guys name is " + newGuy.name + "." + " He is " + newGuy.age + " years old")