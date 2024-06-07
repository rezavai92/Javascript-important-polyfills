function filter(arr, callback) {
    let newArr = [];

    for (let i = 0; i < arr.length; i++){
        
        callback(arr[i]) && newArr.push(arr[i])
    }

    return newArr;
}
