function reduce(arr, callback, initialVal) {
    
    if (arr.length == 0) return 0;

    let accumulator = arr[0];

    if (initialVal) accumulator = initialVal;

    let start = initialVal ? 0 : 1;

    while (start<arr.length){
        
        accumulator = callback(accumulator, arr[start++])
    }

    return accumulator;
}

let arr = [1, 2, 3, 4]

console.log(reduce(arr, (a, b) => { return a+b }, 0))

