function arrayObject(arr){
    var arrResult = [];
    for (var i = 0; i < arr.length; i++){
        var object = {
            id : arr[i].pk,
            ten : arr[i].lastname,
            phone : arr[i].phone
        }
        arrResult.push(object);
    }
    return arrResult;
}

var arr = [
    {
        pk : 1,
        lastname : "abc",
        phone : "3213123123"
    },
    {
        pk : 2,
        lastname : "xyz",
        phone : "123456789"
    }
]

console.log(arrayObject(arr));