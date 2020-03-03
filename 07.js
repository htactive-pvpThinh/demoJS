function numberOfOccurrences(st){
    var arr = [];
    for (var i = 0; i < 256; i++){
        arr.push(0);
    }

    for (var i = 0; i < st.length; i++){
        arr[st[i].charCodeAt()]++;
    }
    return arr;
}

var result = numberOfOccurrences("Pham Van Phu Thinh");

for (var i = 0; i < 256; i++){
    if (result[i] > 0){
        console.log(String.fromCharCode(i) + ": " + result[i]);
    }
}
