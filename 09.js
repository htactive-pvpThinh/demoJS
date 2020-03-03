function checkLargeDate(arr){
    var max = arr[0];
    for (var i = 0; i < arr.length; i++){
        
        if (arr[i] > max){
            max = arr[i];
        }
    }
    return max;
}


var arr = [
    new Date("2020-12-04"),
    new Date("2020-12-12"),
    new Date("2020-08-06")
]

console.log("Max day: " + checkLargeDate(arr));


