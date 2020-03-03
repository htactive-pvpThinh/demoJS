function numberOfOccurrences(st, t){
    var arr = [];
    for (var i = 0; i < 256; i++){
        arr.push(0);
    }

    for (var i = 0; i < st.length; i++){
        arr[st[i].charCodeAt()]++;
    }
    return arr[t.charCodeAt()];
}

var c = 'n';

console.log(numberOfOccurrences("Pham Van Phu Thinh", c))

