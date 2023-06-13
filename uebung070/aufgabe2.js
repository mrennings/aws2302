import { people } from './people.js';
// Funktioniert im Browser, allerdings nicht via node aufgabe2.js

// 1)
let x = 5;
let y = 7;
console.log(x+y);

// 2)
console.log("Aufgabe 2: let deklariert eine Variable auf Blocklevel, const eine Konstante.");


// 3)
let sprachen = ["Python", "Rust", "kein JS"];
for (let i=0 ; i< sprachen.length ; i++) {
    console.log(sprachen[i]);
}

// 4)
function greeting(name) {
    console.log("Hallo " + name);
}
greeting("Test");

// 5)
const min = (arr, field) => arr.reduce((prev, cur) => prev[field] < cur[field] ? prev  : cur);
const max = (arr, field) => arr.reduce((prev, cur) => prev[field] > cur[field] ? prev : cur);
/* 
 * Lambda-Funktion, die über reduce() das Minimum/Maximum im übergebenem  "field" 
 * innerhalb von "arr" findet.
 ? Alternativlösung über for-Schleife, analog zu mostHobbies().
*/
console.log("Die jüngste Person ist: " + min(people, 'age')['name']);
console.log("Die älteste Person ist: " + max(people, 'age')['name']);

function mostHobbies(arr) {
    let person = arr[0];

    for (let i=0 ; i < arr.length ; i++) {
        if (arr[i].hobbies.length > person.hobbies.length) {
            person = arr[i];
        }
    }

    return person.name;
}
console.log("Die meisten Hobbies hat: " + mostHobbies(people));