// 1
const arrays = [1, 5, 4, 10, 0, 3];
for (let i = 0; i < arrays.length; i++) {
    if (arrays[i] == 10) break;
    console.log(arrays[i + 1]);
};

// 2
const arrInd = [1, 5, 4, 10, 0, 3];
const indexArr = arrInd.indexOf(4);
console.log(indexArr);

// 3
const arrayOne = [1, 3, 5, 10, 20];
const newArrayOne = arrayOne.join(' ');
console.log(newArrayOne);

// 4 
const rows = 3;
const cols = 3;
const multiArray = [];

for (let i = 0; i < rows; i++) {
    const innerArray = [];
    for (let j = 0; j < cols; j++) {
        innerArray.push(1);
    }
    multiArray.push(innerArray);
}

console.log(multiArray);

// 5
const arrMass = [1, 1, 1];
arrMass.push(2, 2, 2);
console.log(arrMass);

// 6
let arrNumStr = [9, 8, 7, 'a', 6, 5];
arrNumStr = arrNumStr.sort();
arrNumStrDel = arrNumStr.pop();
console.log(arrNumStr);

// 7
const arrTwo = [9, 8, 7, 6, 5];
let answerUser = prompt("Введите число:");
answerUser = Number(answerUser);
let test = arrTwo.includes(answerUser);
if (test == true) {
    console.log("Угадал");
} else {
    console.log("Не угадал");
}

// 8
let str = "abcdef";
let arrStr = str.split('');
arrStr = arrStr.reverse();
str = arrStr.join('');
console.log(str);

// 9
const arrSpread = [[1, 2, 3],[4, 5, 6]];
const arrFlat = arrSpread.flat();
console.log(arrFlat);

// 10 
const dip = [3, 4, 6, 2, 7, 2, 3, 1, 9, 8];
for (let i = 0; i < (dip.length - 1); i++) {
    const dipSum = dip[i] + dip[i + 1];
    console.log(dipSum);
}

// 11
const dep = [3, 4, 6, 2, 7, 2, 3, 1, 9, 8];
for (let i = 0; i < (dep.length - 1); i++) {
    const dipPr = dep[i] * dep[i];
    console.log(dipPr);
}

// 12
function getLengths(words) {
    return words.map(word => word.length);
}
const strArr = ['Dima','Vovan','Bob','Grib'];
const strLenght = getLengths(strArr);
console.log(strLenght);

// 13
function getNegative(numbb) {
    return numbb.filter(intg => intg < 0);
}
const otr = [3, -4, 6, -2, 7, 2, 3, -1, 9, 8];
const checkOtr = getNegative(otr);
console.log(checkOtr);

// 14
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
let numRandom = [];
for (let i = 0; i < 11; i++) {
    numRandom.push(getRndInteger(0, 10));
}
let numChet = numRandom.filter(rnd => rnd % 2 == 0);
console.log(numRandom);
console.log(numChet);

// 15
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function getNumAverage(array) {
    const numMean = array.reduce((acc, num) => acc + num, 0);
    return numMean / array.length;
}
const numberRnd = [];
for (let i = 0; i < 7; i++) {
    numberRnd.push(getRndInteger(1, 10));
}

const numAverage = getNumAverage(numberRnd);

console.log(numberRnd);
console.log(numAverage);