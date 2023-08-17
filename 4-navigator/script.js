/*
    Написать код, рассчитывающий дистанцию от объекта до точки назначения
*/

//Данные:
const positionX = 10; //точка Х текущего положения
const positionY = 6; //точка Y текущего положения
const addressX = 14; //точка Х места назначения
const addressY = 24; //точка Y места назначения

//Решение:
const distance = Math.sqrt((addressX - positionX)**2 + (addressY - positionY)**2);
console.log(distance);

//Итог:
console.log(`Расстояние от текущего места до места назначения ${distance} метров`);