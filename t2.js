var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(name, age, company, hometown) {
        this.name = name;
        this.age = age;
        this.company = company;
        this.hometown = hometown;
    }
    Person.prototype.g = function () {
        console.log("Hello, my name is ".concat(this.name, ", I am ").concat(this.age, " years old."));
        console.log("I am from ".concat(this.hometown));
        console.log("I work in ".concat(this.company));
        //if we give g() a private then it will error as modifiers can only be used in Typescript.
    };
    return Person;
}());
// let p1 = new Person("Bhagyashree",20,"FFC","Jabalpur");
// p1.g();
var Pet = /** @class */ (function (_super) {
    __extends(Pet, _super);
    function Pet(name, age, company, hometown, type, breed) {
        var _this = _super.call(this, name, age, company, hometown) || this;
        _this.type = type;
        _this.breed = breed;
        return _this;
    }
    Pet.prototype.d = function () {
        console.log("The type is : ".concat(this.type));
        console.log("The breed is : ".concat(this.breed));
    };
    Pet.prototype.d1 = function () {
        this.d();
    };
    return Pet;
}(Person));
var p2 = new Pet("Bhagyashree", 20, "FFC", "Jabalpur", "dog", "labrador");
p2.d1();
p2.g();
