// define :- this keyword refers to an object that is excuiting the current program


const person = {
    name: "sujay",
    wish: function(){
        console.log("hello "+ this.name);
    }
};

person.wish();