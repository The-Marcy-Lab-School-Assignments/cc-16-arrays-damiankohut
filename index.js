//write your code here
function replaceWithYerr(array, startIndex = 0, deleteCount = array.length){
    let newArray = [...array] //make a copy of the OG array

    for(let i = startIndex; i < deleteCount + startIndex; i++){
        newArray[i] = 'yerr'
    }
    
    return newArray
}
const months = ['Jan', 'February', 'March', 'April', 'May', 'June'];
console.log(replaceWithYerr(months, 1, 3))