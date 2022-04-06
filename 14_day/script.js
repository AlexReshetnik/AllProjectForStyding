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
let date = new Date(2015, 0, 2);
getLastDayOfMonth=()=>{
    
    let d=new Date()
    let dd=new Date(d.getFullYear(),d.getMonth(),d.getDate()+1)
   
   return ((dd-d)/1000)/(60*60)
}
console.log( getLastDayOfMonth() ); // 1, (1 січня 2015)





























