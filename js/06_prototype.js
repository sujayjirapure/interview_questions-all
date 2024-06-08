//Prototypes are a mechanism used by JavaScript objects for inheritance. 
//Every JavaScript object has a prototype, which provides properties and methods 
//that can be accessed by that object.


function person(){
    this.name = name;
}

person.prototype.wish = function(){
    console.log("hii" + this.name);
};

var person = new Person("sujay");
person.greet();