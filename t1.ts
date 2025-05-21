const fullName : string = "Alice";
const age : number = 22;
const isGraduated : boolean = true;
const skills : string[] = ['Javascript','Typescript','HTML'];
const hobbies : string[] = ['Reading','Hiking'];


//printBio function
function printBio(
    name : string,
    age : number,
    graduated : boolean,
    skills : string[],
    hobbies : string[]
):void {
    console.log(`Hi, my name is ${name}. I am ${age} years old.`);
    console.log(`Graduation Status: ${graduated}`);
    console.log(`My skills: ${skills}`);
    console.log(`I enjoy: ${hobbies}`);
}


//calculateYearsUntil30
function calculateYearsUntil30(currAge : number):number{
    let temp = 30-currAge;
    if(temp>0){
        return temp;
    }
    else{
        return 0;
    }
}

type SocialLink = {
  platform: string;
  url: string;
}

const socialLinks: SocialLink[] = [
    {platform:'LinkedIn' , url:'https://linkedin.com/in/alice'},
    {platform:'GitHub' , url:'https://github.com/alice'}
]
 
printBio(fullName,age,isGraduated,skills,hobbies);

const yearsLeft = calculateYearsUntil30(age);   
console.log(`Years until 30: ${yearsLeft}`);

for(let i = 0; i<socialLinks.length; i++){
    const link = socialLinks[i];
    console.log(`Follow me on ${link.platform}: ${link.url}`);
}




//Create a second function called calculateYearsUntil30() that takes age and returns the number of years left until the
 //person turns 30.
//Create a function printBio() that takes in the above values as parameters and prints something like:

// Hi, my name is Alice. I am 22 years old.
// Graduation Status: true
// My skills: JavaScript, TypeScript, HTML
// I enjoy: Reading, Hiking


