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

document.write('<br>Задание 3. Преобразуйте эту дату в формат 31/12/2025.<br>')
const str3 = 'Я учу javascript!'
const strSlice = str3.slice(6, -1)
const srtSubstr = str3.substr(6, 10)
const strSubstring = str3.substring(6, 16)
document.write('Извлекли слово jаvascript 3 способами: ', strSlice, ', ', srtSubstr, ', ', strSubstring, '.<br>')

