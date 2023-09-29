/*
    Выводим приветствие пользователю в зависимости от переданного языка
 */

const lang = prompt('Выберите язык (например, ru/en/de и т.д.)', 'ru');

switch (lang) {
    case 'ru':
        console.log('Привет!');
        break;
    case 'en':
        console.log('Hello!');
        break;
    case 'de':
        console.log('Gutten tag!');
        break;

    default: console.log('Hello!');
}