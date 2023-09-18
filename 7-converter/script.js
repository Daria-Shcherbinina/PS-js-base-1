/*
   Написать функцию, которая получает на вход строку с:
   - суммой средств;
   - исходной валютой средств;
   - целевой валютой.
   Возвращает число в новой валюте, если конвертация поддерживается, или null, если нет.
   Ставки конвертации хранятся внутри функции.
 */

function converter(sum, fromCurrency, toCurrency) {
    const rateRUB = 1;
    const rateUSD = 96.65;
    const rateEUR = 103.09;
    const rateCNY = 13.24;

    if(fromCurrency !== toCurrency && fromCurrency === 'RUB'){
        switch (true) {
            case toCurrency === 'USD':
                return (sum / rateUSD).toFixed(2);
            case toCurrency === 'EUR':
                return (sum / rateEUR).toFixed(2);
            case toCurrency === 'CNY':
                return (sum / rateCNY).toFixed(2);
            default:
                return null;
        }
    }else{
        return sum.toFixed(2);
    }
}

console.log(converter(500, 'RUB', 'CNY'));