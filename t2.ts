class Person{
    name : string;
    age : number;
    company : string;
    hometown : string;
     constructor(name:string,age:number,company:string,hometown:string)
     {
         this.name = name;
         this.age = age;
         this.company = company;
         this.hometown = hometown;
     }
     g(){
         console.log(`Hello, my name is ${this.name}, I am ${this.age} years old.`);
         console.log(`I am from ${this.hometown}`);
         console.log(`I work in ${this.company}`);
         //if we give g() a private then it will error as modifiers can only be used in Typescript.
     }
    //  g1(){
    //     this.g();
    //  }
 }

// let p1 = new Person("Bhagyashree",20,"FFC","Jabalpur");
// p1.g();

class Pet extends Person{
    private type : string;
    private readonly breed : string;
    constructor(name:string,age:number,company:string,hometown:string,type:string,breed:string){
        super(name,age,company,hometown);
        this.type = type;
        this.breed = breed;
    }
    private d(){
        console.log(`The type is : ${this.type}`);
        console.log(`The breed is : ${this.breed}`);
    }

    d1(){
        this.d();
       
    }

}
let p2 = new Pet("Bhagyashree",20,"FFC","Jabalpur","dog","labrador");
p2.d1();
p2.g();
// p2.breed = "Labrador";