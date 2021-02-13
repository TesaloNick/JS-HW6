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
document.write('3 - 5. Положительный результат: ', doPlus(3,5), '.<br>')
document.write('6 - 1. Положительный результат: ', doPlus(6,1), '.<br>')

