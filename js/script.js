//MIN MAX
function findMin(arr) {
    if (arr.length === 0) {
        return undefined;
    }
    return Math.min(...arr);
}
function findMax(arr) {
    if (arr.length === 0) {
        return undefined;
    }
    return Math.max(...arr);
}
let nums = [11, 5, 7, 61, 12]
console.log("Min val:", findMin(nums));
console.log("Max val:", findMax(nums));

