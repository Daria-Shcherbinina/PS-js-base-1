/*
    Дан массив чисел: arr = [1, 40, -5, 10, 0]
    Написать функцию, которая сортирует данный массив при помощи циклов

    Подсказка:
    - нужно использовать 2 цикла, вложенных друг в друга;
    - нужно сравнивать и менять элементы.
 */

const arr = [1, 40, -5, 10, 0];

function arSort(arr)
{
    for (let i = arr.length -1; i >= 0; i--)
    {

        console.log(arr[i]);

        for (let j = i; j >= 0; j--)
        {
            if (arr[i] < arr[j])
            {
                let arElI = arr[i];
                let arElJ = arr[j];

                arr[i] = arElJ;
                arr[j] = arElI;
            }

        }
    }
    return arr;
}

console.log(arSort(arr));