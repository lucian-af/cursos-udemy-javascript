const nums = [3, 1, 7, 9, 4, 6];

function ordenar(array) {
    return [...array].sort();
}

ordenar(nums);
const numsOrdenados = ordenar(nums);
console.log(nums, numsOrdenados);

const parteNums = nums.slice(2);
console.log(parteNums, nums);
