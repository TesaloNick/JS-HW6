// Задание 1

document.write('Задание 1. Замените все @ на !.<br>')
let str1 = 'aaa@bbb@ccc';
let str1_1 = str1.replace(/@/g, '!');
document.write('Получившаяся строка: ', str1_1, '<br>')

// Задание 2

document.write('<br>Задание 2. Преобразуйте эту дату в формат 31/12/2025.<br>')
let date2 = '2025-12-31';
let date2_1 = date2.replace(/(2025)-(12)-(31)/, `$3/$2/$1`)
// let date2_1 = date2.replace(/(\w+)-(\w+)-(\w+)/, (...match) => `${match[3]}/${match[2]}/${match[1]}`) // альтернативный вариант
document.write('Получившаяся строка: ', date2_1, '<br>')

// Задание 3

document.write('<br>Задание 3. Вырежете слово «учу» и слово «javascript» тремя разными способами.<br>')
const str3 = 'Я учу javascript!'
const strSlice_1 = str3.slice(2, 5)
const srtSubstr_1 = str3.substr(2, 3)
const strSubstring_1 = str3.substring(2, 5)
const strSlice_2 = str3.slice(6, -1)
const srtSubstr_2 = str3.substr(6, 10)
const strSubstring_2 = str3.substring(6, 16)
document.write('Извлекли слова учу и jаvascript 3 способами: ', strSlice_1, ', ', srtSubstr_1, ', ', strSubstring_1, ', ', strSlice_2, ', ', srtSubstr_2, ', ', strSubstring_2, '.<br>')

// Задание 4

document.write('<br>Задание 4. Найдите квадратный корень из суммы кубов его элементов.<br>')
const arr4 = [4, 2, 5, 19, 13, 0, 10]
let sumCube = 0, 
    sumSqrt;
for (let i=0; i < arr4.length; i++) {
    sumCube += Math.pow(+arr4[i], 3);
}
// sumSqrt = Math.pow(sumCube, 0.5);
sumSqrt = Math.sqrt(sumCube)
document.write('Результат: ', sumCube, '.<br>')

// Задание 5

document.write('<br>Задание 5. Модуль.<br>')
function doPlus(a,b) {
    let c = a - b;
    return Math.abs(c)
}
document.write('3 минус 5. Положительный результат: ', doPlus(3,5), '.<br>')
document.write('6 минус 1. Положительный результат: ', doPlus(6,1), '.<br>')

// Задание 6

document.write('<br>Задание 6. Дата-время в формате 12:59:59 31.12.2014.<br>')
let date6 = new Date();
// let date6Ru = date6.toLocaleString('ru'); //13.02.2021, 21:57:05
let date6Ru = date6.toLocaleString('ru').replace(/(.*), (.*)/g, '$2 $1')
document.write('Результат: ', date6Ru, '.<br>')

// Задание 7

document.write('<br>Задание 7. Напишите регулярку для строки "aa aba abba abbba abca abea".<br>')
let str7 = 'aa aba abba abbba abca abea'
document.write('Результат: ', str7.match(/ab+a/g), '.<br>')

// Задание 8

document.write('<br>Задание 8. Напишите функцию строгой проверки ввода номер телефона в международном формате.<br>')
let phoneNumber = '+375 (44) 7084806';
function checkPhoneNumber() {
    if (/(^\+375|^80)( |)(\(|)(33|44|29)(\)|)( |)(\d{7}|\d{3}(-\d{2}){2})/g.test(phoneNumber)) {
        return document.write('Номер правильный<br>')
    } else {
        return document.write('Номер неправильный<br>')
    }
}
checkPhoneNumber()

// Задание 9

document.write('<br>Задание 9. Напишите функцию строгой проверки адреса эл.почты.<br>')
let email = 'dsdfd@gm_.ai-l.com';
function checkEmail() {
    if (/^[a-zA-Z][a-zA-Z0-9]+\@[\w\.\-]+\.\w{2,11}/g.test(email)) {
        return document.write('Адрес эл.почты правильный<br>')
    } else {
        return document.write('Адрес эл.почты неправильный<br>')
    }
}
checkEmail()

// Задание 10

document.write('<br>Задание 10. Разбейте ссылку на части.<br>')
let adress = 'https://tech.onliner.by/2018/04/26/smart-do-200/?utm_source=main_tile&utm_medium=smartdo200#zag3';
let arrayPartsAdress = [];
let part;
function shareAdress() {

    arrayPartsAdress.push(String(adress.match(/http.+\.\w+/gm)), String(adress.match(/(?<=\w)\/.*(?=\?)/gm)), String(adress.match(/(?<=\?).*(?=\#)/gm)), String(adress.match(/\#.*/gm)))

    return arrayPartsAdress; 
}
shareAdress()
for (let i=0; i<arrayPartsAdress.length; i++){
    document.write(arrayPartsAdress[i], '<br>')
}
