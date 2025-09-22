const num = [1,2,3,4,5,6,7,8,9,10,11,12]
const evenNum =()=>{
    const even = num.filter((number)=>{
        return number%2 === 0;
    })
    return even;
}
console.log(evenNum());
