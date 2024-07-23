function myFunction() {
    return this;
}

let x = myFunction();
console.log(x); // This will log the global object (window in browsers)

const person = {
    firstName: "hari",
    lastName: "priya",
    age: 25,
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
};

console.log(person.fullName()); 
