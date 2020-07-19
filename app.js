function favMovie(name = 'Tommy Wiseau' ,movie = 'The room'){
    console.log(`my name is ${name} and  my fav movie is ${movie}`);
}
favMovie();
favMovie('irtaza','12 strong');

//arrow function 

let favMovie = (name = 'Tommy Wiseau' ,movie = 'The room') => {
    console.log(`my name is ${name} and  my fav movie is ${movie}`);
};
favMovie();
favMovie('irtaza','12 strong');

// concise body shorthand

let favMovie = (name = 'Tommy Wiseau' ,movie = 'The room') => console.log(`my name is ${name} and  my fav movie is ${movie}`);
favMovie();
favMovie('irtaza','12 strong');


// function that will console log first name only 

let fullName = 'Syed Ali Irtaza';
let fullNameSplit = fullName.split(' ');
let getFirstName = (str) => {
    console.log(str[0]);
};
let getFirstNameConcise = (str) => console.log(str[0]);
getFirstName(fullNameSplit);
getFirstNameConcise(fullNameSplit);

let doMath = (a,b) => ({
    exp: a^b,
    pro: a*b
});
let val1 = doMath(2,4).exp;
let val2 = doMath(2,4).pro;

console.log(`the exponent of two num will be ${val1} and product is ${val2}`);

//spread syntax

let myfunc = (name,loc,favFood) => {
    console.log(`my name is ${name} , i'm from ${loc} and my fav food is ${favFood} !`);
};

let arr = ['Irtaza','Birmingham','Kimchi'];
myfunc(...arr);

let myName = 'Ali';
let mySecondFunc = (str) => {
    let strArray = [...str];
    for(let i=0;i<strArray.length;i++)
    {
        console.log(strArray[i]);
    }
};
mySecondFunc(myName);