//call
helloworld();
// function declaration
function helloworld(){
    //function body
    console.log("Hello");
}



//storing in a variable and calling



// welcome(); //Uncaught ReferenceError: Cannot access 'welcome' before initialization at function.js



const welcome =function(){
    console.log("Welcome to jsclass");
};

welcome();

// console.log(welcome);


const wel1 = function(name){
    console.log(`Hello ${name}`);
};

wel1("Nehal");





const calcArea = function (radius){
    let area=3.14 * radius**2;
    console.log(area);
}

calcArea(5);


const calcAreaOne = function(radius){
    let area =3.14*radius**2;
    return area;
}


const area = calcAreaOne(5);
console.log(area);

const calcAreaTwo=(radius)=>{
    return 3.14*radius**2;
}
const areaTwo=calcAreaTwo(5);
console.log(areaTwo);

 const greet= function(){
    return 'Welcome to Js Class';
};

let message=greet();
console.log(message);

const greetTwo=()=> 'Welcome to Js Arrow function Class';

let messagetwo = greetTwo();
console.log(messagetwo);

const invoice =function(products,tax){
    let total =0;
    for(let counter=0; counter < products.length; counter++){
        total+=products[counter]+products[counter]*tax
    }
    return total;
}
console.log(invoice([10,15,12,40],0.3));


const invoiceArr =(products,tax)=>{
    let total =0;
    for(let counter=0; counter < products.length; counter++){
        total+=products[counter]+products[counter]*tax
    }
    return total;
}
console.log(invoiceArr([10,15,12,40],0.3));

// function vs method

const greeting=()=>{
    return 'welcome to the js ';

};
let wel=greeting();
 
// object={method:function(){

// }
// }

//  let finalname =nameone.toMakeUppercase();



// callback function
// function declaration
const functnone=(callbackFunct) => {
 let value =10;
 callbackFunct(value);  
};

//function call
//functnone(); // Uncaught TypeError: callbackFunct is not a function at functnone 

functnone(
    function(value){
        console.log(value);
    }
);

functnone(
    value => {console.log(value);}
);

let packagingList=["Book","Camera","Lens","Toothbrush","Paste","Note"];
packagingList.forEach(
    function(){
        console.log("Items");
    }
);

packagingList.forEach(
    //callback function
    function(packagingList){
        console.log(packagingList);
    }
);

packagingList.forEach( packagingList => {
        console.log(packagingList);
    }
);

packagingList.forEach(( packagingList,index) => {
    console.log(index+1,packagingList);
}
);

let people=["Nehal","Vishal","Avish","Atul","Rohit","Sahil"];


people.forEach(
    //callback function
    function(people,index){
        console.log(`hello ${people}`);
    }
);

const logpeople = (people,index)=>{
    console.log(`hello ${people}`);
}

people.forEach(logpeople);


let ul=document.querySelector('.person');
// let packagingList=["Book","Camera","Lens","Toothbrush","Paste","Note"];
let html=``;

packagingList.forEach(
    function(person) {
        html +=`<li>${person}</li>`;
    }
);

console.log(html);
ul.innerHTML=html;





