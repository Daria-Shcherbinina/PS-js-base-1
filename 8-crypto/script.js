/*
    Написать 2 функции:
     - шифратор пароля - функция принимает пароль, разбивает по символам,
     меняет местами какие-то буквы по заданному алгоритму и возвращает строку;
     - проверка пароля - принимает зашифрованный пароль и второй пароль,
     воспроизводит алгоритм назад на зашифрованном пароле и возвращает true, если
     он совпадает со вторым паролем и false, если нет.
 */

// ФУНКЦИЯ ШИФРОВКИ ПАРОЛЯ
function crypto(password)
{
    //Записываю в массив полученный пароль
    const userPassword = password.split('');

    //ПЕРВЫЙ этап кодировки: выделяю чётные и нечётные элементы массива
    const evenIndexAr = userPassword.filter((item, index, array) => index % 2-1); //собираю чётные элементы массива
    const oddIndexAr = userPassword.filter((item, index, array) => index % 2); //собираю нечётные элементы массива
    let firstCrypto = evenIndexAr.concat(oddIndexAr);

    //ВТОРОЙ этап кодировки: заменяю некоторые буквы на букву+символ
    //1. создаю массив с подменными значениями
    const arReplace = new Map([
        ['R', '$w'],
        ['Y', '$5'],
        ['a', '#W'],
        ['c', '#3'],
    ]);

    //2. использую метод forEach() для перебора элементов и замены на новые значения => результат записываю в строку
    firstCrypto.forEach(function (item, index, array) {
        if(typeof arReplace.get(item) !== "undefined"){
            firstCrypto[index] = arReplace.get(item);
        }
    });
    return firstCrypto.join('');
}

// ФУНКЦИЯ ПРОВЕРКИ ПАРОЛЯ
function checkPass(cryptoRes, password){

    //сравниваю зашифрованный пароль с новым через передачу нового пароля в функцию кодировки
    if(cryptoRes === crypto(password))
    {
        return true;
    }
    else
        return false;

}

const cryptoRes = crypto('ПриВет12YR');

console.log(cryptoRes);
console.log(checkPass(cryptoRes, 'ЗриВет12YR'));