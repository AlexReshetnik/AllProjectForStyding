const people = [
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
people.forEach(iterator => console.log(iterator))*/

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
console.log(sd);