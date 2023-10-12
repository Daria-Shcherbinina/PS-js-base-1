/*
    Написать функцию, которая возвращает новый отфильтрованный массив и которая принимает:
    - массив чисел;
    - функцию удаления элементов.

    Если элемент массива при передаче во вторую функцию возвращает true, то в новом массиве этот элемент удаляем, если false - оставляем.
 */

const arr = [1, 40, -5, 10, 0];

//Функция проверки подходит ли элемент под удаление
function fnDelEl(el){

    if(el < 0){
        return true;
    }
    else{
        return false;
    }

}

//Функция, которая проверяет есть ли в массиве подходящие для удаления элементы и удаляет их
function arSort(arr, fn) {

    for(let i = 0; i < arr.length; i++){
        const resFn = fn(arr[i]);
        if (resFn === true){
            arr.splice(i, 1);
        }
    }

    return arr;
}

let arSortRes = arSort(arr, fnDelEl);
console.log(arSortRes);