/*
    Написать однострочный код, который позволяет проверить возможность вести машину по следующим параметрам:
    - hasLicence - имеет права;
    - age - возраст;
    - isDrunk - пьян.
 */

const age = 25;
const hasLicence = true;
const isDrunk = false;

const canDrive = age >= 18 && hasLicence && !isDrunk;

console.log(`Водитель управлять авто ${canDrive ? 'может' : 'не может'}.`);