// // 'use strict'

const restoran = {
    name : 'Yashil ada',
    newLocation : '3cu dalan, Baki',
    categories : ['Milli', 'Gurcu', 'Italyan', 'Vegetarian'],
    starterMenu : ['Coban salati', 'Manqal salati', 'Suzme', 'Sezar', 'Turshu'],
    mainMenu : ['Kabab', 'Pizza', 'Xengel', 'Dushbere', 'Pasta'],
    openHours : {
        mon : {
            open : '10:00',
            close : '20:00'
        },
        tue : {
            open : '10:00',
            close : '22:00'
        },
        wed : {
            open : '10:00',
            close : '23:00'
        }},
        order : function(starterInd, mainIndex){
            return [ this.starterMenu[starterInd], this.mainMenu[mainIndex] ]
        },
        
        delivery : ({name, number = "Nomre qeyd olunmayib", address, order}) => {
            console.log(`${name} adli mushteri ${order} sifarish etdi, unvan : ${address}, telefon : ${number}`);
        }
   }


//    let newMenu = [...restoran.starterMenu, "Pomidor"];


   

//    console.log(newMenu);

let first = ["Nail", "Nihad"];

let second = [...first];

// second.push("Mahsun")

second = [...second, "Mahsun"]

console.log(first, second);


//    let deliverOne = {
//         name : "Fatime",
//         // number : "+994700000000",
//         address : "Lenkaran",
//         order : "Boyuk boy pizza"
//    };

//    restoran.delivery(deliverOne);

//    let data =  {username : "huseynagha", password : "Salam123"}
//    let myDiv = document.querySelector('.myDiv');

//    let mon_achiq = restoran.openHours.mon.open;
//    let mon_bagli = restoran.openHours.mon.close;

// let { openHours : {mon : {open : mon_achiq , close : mon_baghli}, tue : {open : tue_achiq, close : tue_baghli}}} = restoran;

// console.log( mon_achiq , tue_baghli );


// let variable = 214;

// let numbers = {
//     name : "Numbers",
//     variable 
// }

// console.log(numbers.variable);


// let { name : a, categories : b  = "Kateqoriya teyin edilmeyib", openHours :c , menu : d = "Menu teyin edilmeyib"} = restoran;

// console.log(c);

// console.log(restoran);


// let first = {name : "Sara"};
// let second = first;
// second = "Mutellim"

// console.log(first);



// let { categories :a   = [], newLocation : b = "Online"} = restoran;

// console.log(a);
// console.log(b);


// let a= 1;
// let b =2;

// let myObj = {a: 34, b: 45};

// ({a,b}= myObj);



// console.log(a,b);

// let [first, ,second] = restoran.categories;

// console.log(first , second);

// [second,first] = [first,second];


// console.log(first , second);


// let [ xolodniy, qoryachi ] = restoran.order(3, 2);


// console.log(xolodniy);
// console.log(qoryachi);


// let arr = [1,2,3,6,7]

// let [a,b,c,d] = "65";

// console.log(c);

// Spread operator  (...)

// let arr = ["Amaliya", "Fatime", "Xedice"];

// let newArray = ["Nail", "Nihad"];

// let mixed = [...arr, ...newArray];

// console.log(mixed);


let myData;

let showdata =  async function(){

    let response = await fetch('https://northwind.now.sh/api/categories')

    myData = await response.json()
    console.log(myData);


}
showdata();

console.log(myData);



