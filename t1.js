var fullName = "Alice";
var age = 22;
var isGraduated = true;
var skills = ['Javascript', 'Typescript', 'HTML'];
var hobbies = ['Reading', 'Hiking'];
//printBio function
function printBio(name, age, graduated, skills, hobbies) {
    console.log("Hi, my name is ".concat(name, ". I am ").concat(age, " years old."));
    console.log("Graduation Status: ".concat(graduated));
    console.log("My skills: ".concat(skills));
    console.log("I enjoy: ".concat(hobbies));
}
//calculateYearsUntil30
function calculateYearsUntil30(currAge) {
    var temp = 30 - currAge;
    if (temp > 0) {
        return temp;
    }
    else {
        return 0;
    }
}
var socialLinks = [
    { platform: 'LinkedIn', url: 'https://linkedin.com/in/alice' },
    { platform: 'GitHub', url: 'https://github.com/alice' }
];
printBio(fullName, age, isGraduated, skills, hobbies);
var yearsLeft = calculateYearsUntil30(age);
console.log("Years until 30: ".concat(yearsLeft));
for (var i = 0; i < socialLinks.length; i++) {
    var link = socialLinks[i];
    console.log("Follow me on ".concat(link.platform, ": ").concat(link.url));
}
//Create a second function called calculateYearsUntil30() that takes age and returns the number of years left until the
//person turns 30.
//Create a function printBio() that takes in the above values as parameters and prints something like:
// Hi, my name is Alice. I am 22 years old.
// Graduation Status: true
// My skills: JavaScript, TypeScript, HTML
// I enjoy: Reading, Hiking
