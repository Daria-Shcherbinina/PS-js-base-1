/*
    Написать однострочный код, который позволяет проверить возможность вести машину по следующим параметрам:
    - hasLicence - имеет права;
    - age - возраст;
    - isDrunk - пьян.
 */

let age = 25;
let hasLicence = true;
let isDrunk = false;

let canDrive = age >= 18 && hasLicence && !isDrunk;

console.log(`Водитель управлять авто ${canDrive ? 'может' : 'не может'}.`);