const stringRev = (str) => {
str = str.toLowerCase();
const rev = str.split("").reverse().join("");
return rev === str;
}
console.log(stringRev('Mam'));