/*
   Написать функцию, которая получает на вход строку с:
   - суммой средств;
   - исходной валютой средств;
   - целевой валютой.
   Возвращает число в новой валюте, если конвертация поддерживается, или null, если нет.
   Ставки конвертации хранятся внутри функции.
 */

//ВАРИАНТ КОНВЕРТЕРА, ЕСЛИ НАПИСАТЬ НЕСКОЛЬКО ФУНКЦИЙ (не понятно по заданию можно ли так)
function subConvert(sum, currency, type)
{
    const rateUSD = 96.65;
    const rateEUR = 103.09;
    const rateCNY = 13.24;

    let sumReturn = 0;

    switch (currency)
    {
        case 'RUB':
            sumReturn = sum;
            break;
        case 'USD':
            sumReturn = (type == 'fromRub') ? sum / rateUSD : sum * rateUSD;
            break;
        case 'EUR':
            sumReturn = (type == 'fromRub') ? sum / rateEUR : sum * rateEUR;
            break;
        case 'CNY':
            sumReturn = (type == 'fromRub') ? sum / rateCNY : sum * rateCNY;
            break;
    }

    return sumReturn;
}

function converter1(sum, fromCurrency, toCurrency)
{
    if(fromCurrency == toCurrency)
        return sum.toFixed(2);

    if(fromCurrency != 'RUB')
        sum = subConvert(sum, fromCurrency, 'toRub');

    sum = subConvert(sum, toCurrency, 'fromRub');

    if(sum <= 0)
        return null;
    else
        return sum.toFixed(2);
}

//ВАРИАНТ КОНВЕРТЕРА, ЕСЛИ ДЕЛАТЬ ОДНОЙ ФУНКЦИЕЙ
function converter2(sum, fromCurrency, toCurrency)
{
    const rateUSD = 96.65;
    const rateEUR = 103.09;
    const rateCNY = 13.24;

    let sumNew = 0;

    if(fromCurrency == toCurrency)
        return sum.toFixed(2);

    switch (fromCurrency)
    {
        case 'RUB':
            //из RUB в другие валюты
            switch (toCurrency)
            {
                case 'USD':
                    sumNew = (sum / rateUSD);
                    break;
                case 'EUR':
                    sumNew = (sum / rateEUR);
                    break;
                case 'CNY':
                    sumNew = (sum / rateCNY);
                    break;
            }
            break;

        case 'USD':
            //из USD в другие валюты
            switch (toCurrency)
            {
                case 'EUR':
                    sumNew = (sum * rateUSD / rateEUR);
                    break;
                case 'CNY':
                    sumNew = (sum * rateUSD / rateCNY);
                    break;
                case 'RUB':
                    sumNew = (sum * rateUSD);
                    break;
            }
            break;

        case 'EUR':
            // из EUR в другие валюты
            switch (toCurrency)
            {
                case 'USD':
                    sumNew = (sum * rateEUR / rateUSD);
                    break;
                case 'CNY':
                    sumNew = (sum * rateEUR / rateCNY);
                    break;
                case 'RUB':
                    sumNew = (sum * rateEUR);
                    break;
            }
            break;

        case 'CNY':
            // из CNY в другие валюты
            switch (toCurrency)
            {
                case 'USD':
                    sumNew = (sum * rateCNY / rateUSD);
                    break;
                case 'EUR':
                    sumNew = (sum * rateCNY / rateEUR);
                    break;
                case 'RUB':
                    sumNew = (sum * rateCNY);
                    break;
            }
            break;

        default:
            return null;
    }

    return sumNew.toFixed(2);
}

//ВАРИАНТ 3
const currencyConverter = (amount, from, to) => {

    const rateUSD = 96.65;
    const rateEUR = 103.09;
    const rateCNY = 13.24;

    switch (`${from}/${to}`) {

        case 'RUB/USD':
            return amount / rateUSD;
        case 'RUB/EUR':
            return amount * rateEUR;
        case 'RUB/CNY':
            return amount * rateCNY;
        case 'RUB/RUB':
            return amount;

        case 'USD/RUB':
            return amount * rateUSD;
        case 'USD/EUR':
            return amount * rateUSD / rateEUR;
        case 'USD/CNY':
            return amount * rateUSD / rateCNY;
        case 'USD/USD':
            return amount;

        case 'EUR/RUB':
            return amount / rateEUR;
        case 'EUR/USD':
            return amount * rateEUR / rateUSD;
        case 'EUR/CNY':
            return amount * rateEUR / rateCNY;
        case 'EUR/EUR':
            return amount;

        case 'CNY/RUB':
            return amount / rateCNY;
        case 'CNY/USD':
            return amount * rateCNY / rateUSD;
        case 'CNY/EUR':
            return amount * rateCNY / rateEUR;
        case 'CNY/CNY':
            return amount;

        default:
            return null;
    }
}

console.log(converter1(24000, 'CNY', 'EUR'));
console.log(converter2(24000, 'CNY', 'EUR'));
console.log(currencyConverter(24000, 'CNY', 'EUR'))
