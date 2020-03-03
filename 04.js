function largerArray(arr, n){
    var arrResult = [];
    for (var i = 0; i < arr.length; i++){
        if (arr[i] > n){
            arrResult.push(arr[i]);
        }
    }
    return arrResult;
}

var arr = [3,5,1,10,12];
var n = 6

console.log(largerArray(arr,n));