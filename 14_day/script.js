/*const people = [
    { name: "1", age: 10, budget: 1000 },
    { name: "2", age: 20, budget: 2000 },
    { name: "3", age: 30, budget: 3000 },
    { name: "4", age: 40, budget: 4000 },
    { name: "5", age: 50, budget: 5000 }
]
/*for (let index = 0; index < array.length; index++) {
    console.log(people[i]);
}
for (const iterator of people) {
    console.log(iterator);
} 
people.forEach((iterator, i, Par) => {
    console.log(iterator);
    console.log(i);
    console.log(Par);
})
people.forEach(iterator => console.log(iterator))

const constnewPeople = people.map((iterator, i, Par) => { return `${iterator.name +" - "+ iterator.age}` })

const a = people.filter((iterator, i, Par) => iterator.age >= 18)

//просумування зарплат
const sum = people.reduce((total, person) => {
    return total + person.budget
},5)

//знаходить перший елемент який підпадає під умову
const v = people.find((person) => {
    return person.budget > 2000
})
console.log(v);
//знаходить перший елемент який підпадає під умовуs повертає його індекс
const index = people.findIndex((person) => {
    return person.budget > 2000
})
console.log(index);


const sd = people
    .filter((iterator, i, Par) => iterator.budget > 3000)
    .map((iterator, i, Par) => {
        return {
            info: `${iterator.name}(${iterator.age})}`,
             bud: iterator.budget**0.5
        }
    })
    .reduce((total, per) => total+per.bud,0)
console.log(sd);*/

/*
let str = "border-left-width"
camelize = (str) => {
    return  str.split('')
    .map((item, i, ar) => ar[i-1] == '-' ? item.toUpperCase() : item)
    .filter((item)=> item != '-')
    .join('')
}
console.log(camelize(str));*/

/*
let arr = [5, 3, 8, 1];
filterRange = (arr,min,max) => {
    return  arr.filter((item)=> item >= min && item < max)
}
let filtered = filterRange(arr, 1, 4);
console.log(filtered);
console.log(arr);*/

/*
let arr = [5, 3, 8, 1];

filterRange = (arr,min,max) => {
     arr.forEach((item,i) => {(item <= min || item > max)? arr.splice(i, 1):item});
    return arr
}
let filtered = filterRange(arr, 1, 4);
console.log(filtered);
console.log(arr);*/
/*
let arr = [5, 2, 1, -10, 8];
arr.sort((a,b)=> b-a)
// ... ваш код для сортування за спаданням

console.log(arr); // 8, 5, 2, 1, -10*/

/*
let arr = ["HTML", "JavaScript", "CSS"];

copySorted=(arr)=>{
   return arr.concat().sort()
}

let sorted = copySorted(arr);

console.log( sorted ); // CSS, HTML, JavaScript
console.log(arr); // HTML, JavaScript, CSS (без змін)*/
/*
function Calculator() {
    operation={
        '+':(a,b)=>a+b,
        '-':(a,b)=>a-b,
    }
  
    this.calculate = (str) => {        
        ar = str.split(' ')
        return operation[ar[1]](+ar[0],+ar[2])

    }
    this.addMethod=(name, func)=> {    
        operation[name]=func
    }
}

let calc = new Calculator;
calc.addMethod("*", (a, b) => a * b);
calc.addMethod("/", (a, b) => a / b);
console.log(calc.calculate("3 * 7")); // 10
console.log(calc.calculate("20 / 5")); // 10
//console.log(calc.calculate("3 + 7")); // 10*/


/*let ivan = { name: "Іван", age: 25 };
let petro = { name: "Петро", age: 30 };
let mariya = { name: "Марія", age: 28 };

let users = [ ivan, petro, mariya ];

let names = users.map((it)=>it.name)

console.log( names ); // Іван, Петро, Марія*/

/*let ivan = { name: "Іван", surname: "Іванко", id: 1 };
let petro = { name: "Петро", surname: "Петренко", id: 2 };
let mariya = { name: "Марія", surname: "Мрійко", id: 3 };

let users = [ ivan, petro, mariya ];

let usersMapped =users.map((it)=> ({fullName:it.name+' '+it.surname, id: it.id}))


usersMapped = [
  { fullName: "Іван Іванко", id: 1 },
  { fullName: "Петро Петренко", id: 2 },
  { fullName: "Марія Мрійко", id: 3 }
]


console.log( usersMapped[0].id ) // 1
console.log( usersMapped[0].fullName ) // Іван Іванко
*/
/*
let ivan = { name: "Іван", age: 25 };
let petro = { name: "Петро", age: 30 };
let mariya = { name: "Марія", age: 28 };

let arr = [ petro, ivan, mariya ];
sortByAge=(arr)=>{
    arr.sort((a,b)=>a.age-b.age)  
}
sortByAge(arr);

// now: [ivan, mariya, petro]
console.log(arr[0].name); // Іван
console.log(arr[1].name); // Марія
console.log(arr[2].name); // Петро*/

/*
let arr = [1, 2, 3];

shuffle = (arr) => {
    let index = Math.random(2)
    for (let i = 0; i < index; i++) {
        
        arr.push(arr.splise(index,1))
        
    }
}

shuffle(arr);
// arr = [3, 2, 1]

shuffle(arr);
// arr = [2, 1, 3]

shuffle(arr);
// arr = [3, 1, 2]
// ...*/

/*
function unique(arr) {
   return Array.from(new Set(arr))
  }
  
  let values = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
  ];
  
  console.log( unique(values) ); // Hare, Krishna, :-O*/
/*
  aclean=(arr)=>{
      let set=new Set()
      arr.forEach(element =>set.add(element.toLowerCase().split('').sort().join('')));
      return Array.from(set)

  }

  let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

  console.log( aclean(arr) );*/

/*
  let map = new Map();

  map.set("name", "John");
  
  let keys = Array.from(map.keys());
  
  // Помилка: keys.push -- це не функція
  keys.push("more");
console.log(keys);*/

/*let salaries = {
    "Іван": 100,
    "Петро": 300,
    "Марія": 250
  };
  sumSalaries=(salaries)=>{
    let sum=0
    for (const iterator of Object.values(salaries)) {
        sum+=iterator;
    }
    return sum
  }
  console.log( sumSalaries(salaries) ); // 650*/




/*
  let user = {
    name: 'Іван',
    age: 30
  };
  count=(user)=>{
    return Object.keys(user).length
    
  }
  console.log( count(user) ); // 2
*/

/*
let user = { name: "Іван", years: 30 };

let{name,years:age,isAdmin=false}=user

console.log( name ); // Іван
console.log( age ); // 30
console.log( isAdmin ); // false
*/
/*
let salaries = {
    "Іван": 100,
    "Петро": 300,
    "Марія": 250
};

topSalary=(salaries)=> {
     return Object.entries(salaries).find((item)=>item[1] == Math.max(...Object.values(salaries)))
}
console.log(topSalary(salaries))
*/
/*
let deys=['нд','пн','вт','ср','чт','пт','сб']
let date = new Date();  // 3 січня 2012

console.log( getWeekDay(date) ); 
*/
/*
let date = new Date(2015, 0, 2);
getLastDayOfMonth=()=>{
    
    let d=new Date()
    let dd=new Date(d.getFullYear(),d.getMonth(),d.getDate()+1)
   
   return ((dd-d)/1000)/(60*60)
}
console.log( getLastDayOfMonth() ); // 1, (1 січня 2015)*/
/*
let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};

printList = (list) => { 
  list.next!=null&&printList(list.next)
  console.log(list.value);
}
printList(list)*/
/*
let list = {
    value: 1,
    next: {
      a:1
    }
};
let copi=Object.assign({},list)

copi.next.d=5
console.log(list);
console.log(copi);*/

/*
function sum(a) {
    return function (b) {
        return a+b
    }
}


console.log(sum(1)(9));
*/
/*
let arr = [1, 2, 3, 4, 5, 6, 7];

function inBetween(a,b) {
  return function(c){
    return c>=a&&c<=b
  }
}
console.log( arr.filter((item)=>{
    return item>3
}) ); // 3,4,5,6

function inArray(a) {
    return function(c){
      return a.includes(c)
    }
  }
console.log( arr.filter(inArray([1, 2, 10])) ); // 1,2*/


/*let users = [
    { name: "Іван", age: 20, surname: "Іванов" },
    { name: "Петро", age: 18, surname: "Петров" },
    { name: "Енн", age: 19, surname: "Гетевей" }
  ];
  function byField(name) {
    return (a,b)=>
    
       a[name]>b[name]? 1 : -1
    
  }

  console.log(users.sort(byField('name')))
  //console.log(users.sort(byField('age')))

*/

/*
  function makeArmy() {
    let shooters = [];
  
    let i = 0;
    while (i < 10) {
        let a=i;
      let shooter = function() {
        // створюємо функцію стрільця,
        console.log( a ); // що має показувати свій номер
      };
      shooters.push(shooter); // додаємо її до масиву
      i++;
    }
  
    // ...і повертаємо масив стрільців
    return shooters;
  }
  
  let army = makeArmy();
  
  // всі стрільці показують 10 замість своїх номерів 0, 1, 2, 3...
  army[0](); // 10 від стрільця за номером 0
  army[1](); // 10 від стрільця за номером 1
  army[2]();*/





/*

function makeCounter() {

  function counter() {
    return ++counter.count;
  };
  counter.count = 0;
  counter.set = (value) => count = value
  counter.decrease = () => --count

  return counter;
}

let counter = makeCounter();

counter.count = 10;
console.log(counter()); // 10
counter.set(5)
console.log(counter());

*/
/*
sum.s=0;
function sum(number) {
  sum.toString=()=>{return sum.s}
  sum.s+=number
  return sum
}

console.log(+sum(1)(2)(3));*/

/*
let func = new Function(`...argN`, `{
  console.log(++argN[1])
}`);

func(1, 2, 3, 4, 5, 6)*/


/*

printNumbers = (from, to) => {
  let time=setInterval(()=>{console.log(from++);if(from>to)clearInterval(time)}, 1000)
  
}

printNumbers(1,5)*/

/*
function f(...x) {
  console.log(...x);
}

function delay(foo,ms){
  
  return function(){
    setTimeout(()=>{foo.apply(this, arguments);},ms)
  }
}

// створюємо обгортки
let f1000 = delay(f, 1000);
let f1500 = delay(f, 1500);

f1000("тест"); // показує "test" після 1000 мс
f1500("тест2","5dbf","dddd"); // показує "test" після 1500 мс


*/
/*
let f = _.debounce(alert, 1000);

f("a");
setTimeout( () => f("b"), 200);
setTimeout( () => f("c"), 500);

*/
/*-


function f(a) {
  console.log(a);
}
function throttle(ff, ms) {
  let time

  return function () {

    if (time == undefined) {
      ff.apply(this, arguments)
    }
    time = setTimeout(() => {

      setTimeout(() => {
        if (time == undefined) {
          ff.apply(this, arguments)
        } else {
          clearTimeout(time);
          time = undefined;
        }
      }, ms)
    }, 0)

  }

}
// f1000 передає виклики до f максимум один раз на 1000 мс
let f1000 = throttle(f, 500);

f1000(1); // показує 1
f1000(2); // (обмеження, 1000 мс ще не закінчилися)
f1000(3);
// (обмеження, 1000 мс ще не закінчилися)
setTimeout(() => { f1000(4); }, 500)

// коли 1000 ms time out ...
// ...вивід 3, проміжне значення 2 було проігноровано


*/
/*
let oj={
  a:5,
  add(){
      this.a++
  }
}
oj.add()
foo=oj.add
console.log(foo.bind(oj));
console.log(oj.add);
foo()
foo()
console.log(oj.a);*/

/*
Function.prototype.defer = function(ms) {
 setTimeout(this, ms);
}
function f() {
  console.log("Привіт!");
}

f.defer(5000); // показує "Привіт!" через 1 секунду
*/
/*
Function.prototype.defer = function (ms) {
  setTimeout(() => {  return this.apply;
  }, ms);

}

function f(a, b) {
  console.log(a + b);
}
console.log(f.defer(1000));
f.defer(1000)(1, 2);
*/
/*
class Clock{
  

  constructor(){
    this.time= new Date()
  }
  get time(){

     return this._time
  }
  set time(value){
    this._time=value
    
  }
  runTime( log,what){
   
    setInterval(log,1000,what( this._time))
    
  }
}
let a=new Clock();
a.runTime(console.log,(timer)=>timer.getSeconds())
console.log(a.time);
*/
/* 
class Animal {

  constructor(name) {
    this.name = name;
  }

}

class Rabbit extends Animal {
  constructor(name) {
    super(name)
    this.created = Date.now();
  }
}

let rabbit = new Rabbit("White Rabbit"); // Error: this is not defined

console.log(rabbit.name);*/




/*
import  MessageModule from "./extended-clock.js"

class ExtendedClock extends MessageModule.Clock {
  constructor(template){
      super({template})
  }
  start(precision){
    this.render();
      this.timer = setInterval(() => this.render(), precision??1000);
  }
}


start() {
    this.render();
    this.timer = setInterval(() => this.render(), 1000);
  }

let a=new ExtendedClock("h-m-s")

a.start(100)


let b=new MessageModule.Clock({template:"h-m-s"})

b.render()

*/


/*

class mood{
  constructor(lvl){
    this.lvl=lvl;
  }
  getUp(){
    return ++this.lvl
  }
  getDoun=()=>{
    return --this.lvl
  }
}
let mi=new mood(5)

console.log(mi);
console.log(mi);
ss(mi.getUp)
console.log(mi);

function ss(params) {
  params();
}
*/
/*
class Animal {
  name = 'тварина';

  constructor() {
    console.log(this.name); // (*)
  }
}

class Rabbit extends Animal {
  name = 'кролик';
}

let ani=new Animal(); // тварина
let rad=new Rabbit(); // тварина
console.log(ani.__proto__);
console.log(rad.__proto__);
*/
/*
let arr = [1, 2, 3];
console.log( arr.__proto__.constructor === Array ); // true
console.log( {}.__proto__.constructor === Object ); // true
*/



/*
function delay(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(1);
      resolve(1)
    }, ms);

  })
}


delay(1000).then(() => console.log('виконалось через 3 секунди'));

*/

/*
function showCircle(x,y,t) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(1);
      resolve(1)
    }, ms);

  })
}

showCircle(150, 150, 100).then(div => {
  div.classList.add('message-ball');
  div.append("Привіт, світ!");
});*//*
new Promise(function(resolve, reject) {

  setTimeout(() => resolve(1), 2000); // (*)

}).then(function(result) { // (**)

  console.log(result); // 1
  return result * 2;

}).then(function(result) { // (***)

  console.log(result); // 2
  return result * 2;

}).then(function(result) {

  console.log(result); // 4
  return result * 2;

});

*/
/*
function loadScript(src, callback) {
  if(src=="home"){
    callback(null, "script");
  }else{
    callback(new Error(`Помилка завантаження скрипта ${src}`));
  }
}

function promisify(f) {
  return function (home) { // повертає функію-обгортку (*)
    return new Promise((resolve, reject) => {
      function callback(err, result) { // наш спеціальний колбек для f (**)
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      }
      f.call(this, home, callback); // викликаємо оригінальну функцію
    });
  };
}

// використання:
let loadScriptPromise = promisify(loadScript);
loadScriptPromise("home").then(result=>{
  
    console.log(result+"-");
 
});
*/
/*
function* pseudoRandom(previous){
   while (true) {
    yield previous = previous * 16807 % 2147483647
   }
}


let generator = pseudoRandom(1);

console.log(generator.next().value); // 16807
console.log(generator.next().value); // 282475249
console.log(generator.next().value); // 1622650073
*/
/*
async function* generateSequence(start, end) {

  for (let i = start; i <= end; i++) {
    console.log("+")
    // Ого, можемо використовувати await!
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log("-")
    yield i;
    console.log("/")
  }

}

(async () => {

  let generator = generateSequence(1, 5);
  for await (let value of generator) {
    console.log(JSON.stringify(value.done))    // 1, потім 2, потім 3, потім 4, потім 5 (із затримкою між ними)
  }

})();

*/


/*
let user = {
  name: "Іван"
};

function wrap(target) {
  return new Proxy(target, {
    get(target, prop, receiver) {
      if (prop in target) {
        return target[prop]
      }else{
        return new ReferenceError(`Властивість не існує: "${prop}"`)
      }
    }
  });
}

user = wrap(user);

console.log(user.name); // Іван
console.log(user.age); // ReferenceError: Властивість не існує: "age"
*/

/*
let array = [1, 2, 3];

array = new Proxy(array, {
  get(target, prop, receiver) {
   
    if (prop < 0) {
     // console.log(target.length+prop);
      return target[target.length+(+prop)]
    } 
    return Reflect.get(target, prop, receiver);
  }
});

console.log(array[-1]); // 3
console.log(array[-2]); // 2

// Іншу функціональність масиву слід зберегти "як є"
*/
function makeObservable(tar) {
  tar.observe = (handler) => {
    tar.handle=handler
  }
  return new Proxy(tar, {
    set(target, prop, value, receiver) {
      target.handle(prop, value)
      return Reflect.set(...arguments);
    }
  })
}

let user = {};
user = makeObservable(user);

user.observe((key, value) => {
  console.log(`SET ${key}=${value}`);
});

user.name = "Іван"; // сповіщає: SET name=Іван
























































































