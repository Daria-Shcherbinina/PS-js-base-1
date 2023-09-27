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
    const evenIndexAr = userPassword.filter((item, index, array) => !(index % 2)); //собираю чётные элементы массива
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
console.log(checkPass(cryptoRes, 'ПриВет12YR'));


// ФУНКЦИЯ ШИФРОВКИ ПАРОЛЯ - 2
function crypto2(password)
{
    //Записываю в массив полученный пароль
    const userPassword = password.split('');

    //ПЕРВЫЙ этап: записываю пароль наоборот
    const cryptoPass1 = userPassword.reverse();

    //ВТОРОЙ этап: вырезаю первые два элемента массива и меняю их местами
    const cryptoPass2 = cryptoPass1.splice(0, 2).reverse();

    //ТРЕТИЙ этап: соединяю массивы
    const cryptoPassRes = cryptoPass1.concat(cryptoPass2);

    return cryptoPassRes.join('');
}

// ФУНКЦИЯ ОБРАТНОГО ДЕЙСТВИЯ
function checkPass2(crypto2Res, password){

    // Записываю в массив зашифрованный пароль
    const cryptoPass = crypto2Res.split('');

    //ПЕРВЫЙ этап: вырезаю два последних элемента массива
    const deCryptoPass1 = cryptoPass.splice( -2, 2);

    //ВТОРОЙ этап: меняю порядок модифицированного массива
    const deCryptoPass2 = cryptoPass.reverse();

    //ТРЕТИЙ этап: соединяю массивы
    const deCryptoPassRes = deCryptoPass2.concat(deCryptoPass1).join('');

    if(password == deCryptoPassRes){
        return true;
    }
    else
        return false;
}

const crypto2Res = crypto2('Привет123');


console.log(crypto2('Привет123'));
console.log(checkPass2(crypto2Res, 'Привет223'));

