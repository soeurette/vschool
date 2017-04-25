//es6 new code


let name = "soeurette";
console.log(name);

for (let i = 0; i < 10; i++) {
    console.log(i);
}


//new code using const we cant do pi = 2.5 for example it will break
const app = {};
app.name = "sous";

console.log(app);

app.lastname = "kurdy";

console.log(app);

// pass by value u cant change but by reference u can


const app = {
    name: "jacobe"
};

app.name = "sous";

console.log(app);

app.lastname = "kurdy";

console.log(app);

//default params old code we put || 9now like this.name = heba || 8 now we can put it next to it in the function
function Person(name = "hiba", age = 8) {
    this.name = name;
    this.age = age;
}

let jacob = new Person("jacob", 19);
console.log(jacob);

let heba = new Person();
console.log(heba);


//before it was name:name and var not let
let name = " sous";
let age = "8";

let soeurette = {
    name, age
};


console.log(soeurette);

//new form using `` we can put enter to go to a new line before \n
let name = "hiba";
let helloString = `i hate ${name}`;
console.log(helloString);


//we use ... to separate but not in object
let array = [1, 2, 3, ];
console.log(...array);

//before it was function(){ btn.style.background = "purple";} in html button with id ="btn
let btn = document.getElementById("btn");
btn.addEventListener("click", () => btn.style.background = "red");

//old version
// var students =["jamil","sous","rima"];

// var studentsObj = students.map(function(item){
//   return{name:item};
// });
// console.log(studentsObj)


// new version () => {return } or () => {1}
let students = ["jamil", "sous", "rima"];

let studentsObj = students.map((item) => {
    return {
        name: item
    };
});
console.log(studentsObj)



//we can return base element
let students = ["jamil", "sous", "rima"];

let studentsObj = students.map((item) => {
    return <h1 > {

        {
            item
        }
    } < /h1>
});
console.log(studentsObj)





//old code
//var nums = function () {
//    var nb = [0, 1];
//    for (var i = 2; i < 100; i++) {
//        var temp = nb[i - 2] + nb[i - 1];
//        nb.push(temp);
//    }
//    return nb;
//}
//
//var number = nums();
//console.log(number.length);

let nums = ()=> {
  let nb =[0,1];
  for(let i=2;i<100;i++){
    let temp = nb[i-2] + nb[i-1];
    nb.push(temp);
    
  }
  return nb;
}
let number = nums();
// console.log("the length is"+number.length +"");
console.log(`${number.length}`);