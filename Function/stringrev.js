const stringRev = (str) => {
str = str.toLowerCase();
const rev = str.split("").reverse().join("");
return rev;
}
console.log(stringRev('Aathil'));
