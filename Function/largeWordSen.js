const largeWord=(str)=>{
    const vowel = 'aeiouAEIOU';
    const result = str.split("").filter((character) => vowel.includes(character));
    return result.length;
}
console.log(largeWord('aeiouAEIOU'));