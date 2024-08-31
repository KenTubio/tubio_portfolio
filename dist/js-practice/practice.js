function filter(arr, fn){
    let array = [];
    for(let i = 0; i<arr.length;i++){
        if(fn(arr[i], i)){
            array.push(arr[i])
        }
    }
    return array;
}
